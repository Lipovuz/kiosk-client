<?php
namespace App\Services\FileSyncService;

/**
 * Class Service
 * Сервис синхронизации файлов
 * - используется для закачки
 */
class Service
{
    /**
     * Путь к родительской папке (src/public)
     * @var string
     */
    protected string $basePath;

    /**
     * Схема внешнего хоста по умолчанию (хост Ядра) для скачивания файлов
     * @var string
     */
    protected string $defaultScheme;

    /**
     * Внешний хост по умолчанию (хост Ядра) для скачивания файлов
     * @var string
     */
    protected string $defaultHost;

    /**
     * FileSyncService constructor.
     * @param string $basePath
     * @param string $defaultExtHost
     */
    public function __construct(string $basePath, string $defaultExtHost)
    {
        $this->basePath = $basePath;

        $parseUrl = parse_url($defaultExtHost);

        $this->defaultHost =
            $parseUrl['host'] .
            (
                (isset($parseUrl['port']) && $parseUrl['port'])
                    ? ':' . $parseUrl['port']
                    : ''
            );
        $this->defaultScheme = isset($parseUrl['scheme']) ? $parseUrl['scheme'] : 'http';
    }

    /**
     * Синхронизация файла
     * @param string $uri
     * @return string
     * @throws FileSyncException
     */
    public function syncFile(string $uri): string
    {
        $fileItem = new FileItem($uri, $this->basePath, $this->defaultScheme, $this->defaultHost);
        if (!$fileItem->isValidUri()) {
            throw new FileSyncException("<$uri> не является корректной ссылкой на файл");
        }

        if ($fileItem->isExist()) {
            // файл уже существует
            return $fileItem->getLocalUri();
        }

        // загрузка файла
        if ($this->loadFile($fileItem)) {
            return $fileItem->getLocalUri();
        } else {
            throw new FileSyncException("<$uri> неопределенная ошибка загрузки файла");
        }
    }

    /**
     * @param array $uriCollection
     * @param string $jwtToken
     * @return array
     * @throws FileSyncException
     */
    public function syncFiles(array $uriCollection, string $jwtToken): array
    {
        /** @var FileItem[] $fileItems */
        $fileItems = [];
        foreach ($uriCollection as $key => $uri) {
            $fileItem = new FileItem($uri, $this->basePath, $this->defaultScheme, $this->defaultHost);
            if (!$fileItem->isValidUri()) {
                continue;
            }
            $fileItems[$key] = $fileItem;
        }

        // загрузка файлов
        return $this->loadFiles($fileItems, $jwtToken);
    }

    /**
     * @param FileItem[] $fileItems
     * @param string $jwtToken
     * @return FileItem[]
     * @throws FileSyncException
     */
    public function loadFiles(array $fileItems, string $jwtToken): array
    {
        $chCollection = [];     // коллекция дескрипторов CURL
        $fileCollection = [];   // коллекция файловых дескрипторов
        //создаём набор дескрипторов cURL
        $mh = curl_multi_init();
        foreach ($fileItems as $key => $fileItem) {
            if ($fileItem->isExist()) {
                // файл уже существует
                continue;
            }
            $this->checkDir($fileItem);
            $chCollection[$key] = curl_init();
            curl_setopt($chCollection[$key], CURLOPT_URL, $fileItem->getAbsoluteUri());
            curl_setopt($chCollection[$key], CURLOPT_HTTPAUTH, CURLAUTH_BEARER);
            curl_setopt($chCollection[$key], CURLOPT_XOAUTH2_BEARER, $jwtToken);
            curl_setopt($chCollection[$key], CURLOPT_CONNECTTIMEOUT, 5);
            curl_setopt($chCollection[$key], CURLOPT_CONNECTTIMEOUT, 30);
            $fileCollection[$key] = fopen($fileItem->getFullPath(), "w+");
            curl_setopt($chCollection[$key], CURLOPT_FILE, $fileCollection[$key]);

            curl_multi_add_handle($mh, $chCollection[$key]);
        }

        $status = null;
        $active = null;
        do {
            $status = curl_multi_exec($mh, $active);
            usleep(50);
            if ($active) {
                // Ждём какое-то время для оживления активности
                curl_multi_select($mh);
            }
        } while ($active && $status == CURLM_OK);

        foreach ($fileItems as $key => $fileItem) {
            if ($fileItem->isExist()) {
                // файл уже существует
                continue;
            }
            //закрываем дескрипторы
            curl_multi_remove_handle($mh, $chCollection[$key]);
            fclose($fileCollection[$key]);

            $fileItems[$key] = $fileItem;
        }

        curl_multi_close($mh);
        return $fileItems;
    }

    /**
     * Загрузка удаленного файла в локальную ФС
     * @param FileItem $fileItem
     * @return bool
     * @throws FileSyncException
     */
    protected function loadFile(FileItem $fileItem): bool
    {
        $this->checkDir($fileItem);
        try {
            return copy($fileItem->getAbsoluteUri(), $fileItem->getFullPath());
        } catch (\Exception $exception) {
            throw new FileSyncException($exception->getMessage(), 0, $exception);
        }
    }

    /**
     * Актуализация каталога
     * - создание если нет
     * - проверка прав
     * ..
     * @param FileItem $fileItem
     * @throws FileSyncException
     */
    protected function checkDir(FileItem $fileItem): void
    {
        $dirPath = str_replace(
            '/',
            DIRECTORY_SEPARATOR,
            $this->basePath . $fileItem->dirname
        );

        if (file_exists($dirPath)) {
            if (!is_writable($dirPath)) {
                throw new FileSyncException("<$dirPath> не доступен для записи");
            }
            return;
        }
        if (!mkdir($dirPath , 0777 , true)) {
            throw new FileSyncException("<$dirPath> не удалось создать");
        }
    }
}
