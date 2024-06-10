<?php


namespace App\ImageSources;


class LocalDirectoryFiles
{

    /**
     * @const - расширения файлов изображений
     */
    const DEFAULT_IMG_EXTENSION = [
        'jpg', 'jpeg', 'png',
    ];

    protected array $imgExtension;

    /**
     * @var string - путь к корневой папки веб хоста
     */
    protected string $publicWebPath;

    /**
     * @var string - относительный путь папки с изображениями
     */
    protected string $relativePath;

    /**
     * @var ImageDto[]
     */
    protected ?array $imageCollections = null;

    /**
     * Время последнего изменения коллекции файлов timestamp
     * (время загрузки последнего файла)
     * @var int
     */
    protected ?int $imageCollectionsLastUpdate = null;


    /**
     * LocalDirectoryFiles constructor.
     * @param string $publicWebPath
     * @param string $relativePath
     * @param array $imgExtension
     */
    public function __construct(string $publicWebPath, string $relativePath, array $imgExtension = [])
    {
        $this->publicWebPath = $publicWebPath;
        $this->relativePath = $relativePath;
        $this->imgExtension = $imgExtension ?: self::DEFAULT_IMG_EXTENSION;
    }

    /**
     * @return array|ImageDto[]
     */
    public function getImageCollections(): array
    {
        if ($this->imageCollections === null) {
            $this->imageCollections = [];
            $this->scanFiles();
        }
        return $this->imageCollections;
    }

    /**
     * @return int
     */
    public function getLastUpdate(): int
    {
        if ($this->imageCollectionsLastUpdate === null) {
            $this->imageCollectionsLastUpdate = 0;
            $this->scanFiles();
        }
        return $this->imageCollectionsLastUpdate;
    }

    /**
     * Сканирование папки,  получение списка изображений
     */
    protected function scanFiles(): void
    {
        // итератор файловой системы
        $iterator = new \RecursiveIteratorIterator(
            new \RecursiveDirectoryIterator($this->getFileStoragePath()),
            \RecursiveIteratorIterator::SELF_FIRST
        );

        foreach ($iterator as $file) {
            /* @var \SplFileInfo $file */
            // файл + доступен к чтению
            if (!$file->isFile() || !$file->isReadable()) {
                continue;
            }
            // поддерживаемое изображение
            if (!in_array(strtolower($file->getExtension()), $this->imgExtension)) {
                continue;
            }

            $this->imageCollections[$this->getDtoKey($file)] = $this->getDto($file);
            // обновляем время изменения
            if ($file->getCTime() > $this->imageCollectionsLastUpdate) {
                // берем максимальное значение
                $this->imageCollectionsLastUpdate = $file->getCTime();
            }
        }
        // сортируем полученную коллекцию по времени (ключ) - сначала самые новые
        krsort($this->imageCollections, SORT_NUMERIC);
        $this->imageCollections = array_values($this->imageCollections);
    }

    /**
     * Получить ключ в коллекции для DTO
     * @param \SplFileInfo $file
     * @return int
     */
    protected function getDtoKey(\SplFileInfo $file): int
    {
        $attempt = 0;   // количество попыток
        $time = $file->getCTime();  //

        while (
            isset($this->imageCollections[$time]) &&      // проверяем что существует уже  файл с таким же временем
            ($attempt < 1000)                           // проверяем что количество подобрать время не более 1000
        ) {
            $time++;    // увеличиваем время на 1 сек.
            $attempt++; // подсчет попыток подобрать "незанятое" время
        }
        return $time;
    }

    /**
     * Конструктор DTO
     * @param \SplFileInfo $file
     * @return ImageDto
     */
    protected function getDto(\SplFileInfo $file): ImageDto
    {
        $dto = new ImageDto();
        $dto->path = $file->getRealPath();
        $dto->originalUri = $this->getFileUri($file);
        $dto->thumbUri = $this->getThumbUri($file);
        $dto->createAt = $file->getCTime();

        return $dto;
    }

    /**
     * URI к изображению
     * @param \SplFileInfo $file
     * @return string
     */
    protected function getFileUri(\SplFileInfo $file): string
    {
        return $this->relativePath . '/' . str_replace($this->getFileStoragePath(), '', $file->getFilename());
    }

    /**
     * URI к изображению
     * @param \SplFileInfo $file
     * @return string
     */
    protected function getThumbUri(\SplFileInfo $file): string
    {
        return $this->relativePath . '/' . str_replace($this->getFileStoragePath(), '', $file->getFilename());
    }

    /**
     * Абсолютный путь к папке с локальными изображениями
     * @return string
     */
    protected function getFileStoragePath(): string
    {
        static $fileStoragePath;
        if (!$fileStoragePath) {
            $fileStoragePath = $this->publicWebPath . str_replace('/', DIRECTORY_SEPARATOR, $this->relativePath);
        }
        return $fileStoragePath;
    }
}
