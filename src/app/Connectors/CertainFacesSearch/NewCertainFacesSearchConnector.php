<?php
namespace App\Connectors\CertainFacesSearch;

use App\Db\Managers\File\FileManager;
use App\Services\FileSyncService\FileSyncException;
use Lomobil\Common\DrIsland\Connectors\AbstractConnector;

/**
 * Коннектор сервиса поиска фото по образцу (Нейросеть)
 *
 * Class NewCertainFacesSearchConnector
 */
class NewCertainFacesSearchConnector extends AbstractConnector
{
    /* @const - URI метода поиска, возвращается номер запроса проверки, сервер начинает формировать архив с фотографиями человека */
    protected const URI_CHECK = '/check';

    /* @const - URI метода проверяет готовность и возвращает фото */
    protected const URI_CHECK_NUMBER = '/checknumber';

    /**
     * @const - Статус при провале
     */
    public const RESPONSE_STATUS_FAIL = 'fail';

    /**
     * @const - Статус при успехе
     */
    public const RESPONSE_STATUS_DONE = 'Done';

    /**
     * @const - Статус при ожедании
     */
    public const RESPONSE_STATUS_IN_PROGRESS = 'InProgress';

    /**
     * @const - Статус нет лиц
     */
    protected const RESPONSE_STATUS_NO_FACE = 'no_face';

    /**
     * @const - Статус фото не найдено
     */
    protected const RESPONSE_STATUS_NOT_FOUND = 'NotFound';

    /**
     * @const - Статус лица не найдено
     */
    protected const RESPONSE_FACES_NOT_FOUND_ON_SELFIE = 'FacesNotFoundOnSelfie';

    /**
     * @const - Максимальний кількість циклів при перевірці
     */
    protected const MAX_NUMBER_CYCLE_WHEN_CHECKING = 20;

    /**
     * @var string - относительный путь к директории для сохранения изображений (от public)
     */
    protected string $relativePath;

    /**
     * @var string - абсолютный путь к директории для сохранения изображений
     */
    protected string $resultPathDir;

    /**
     * @var FileManager
     */
    private FileManager $fileManager;

    /**
     * NewCertainFacesSearchConnector constructor.
     * @param string $host - хост сервиса
     * @param string $secretKey - BEARER токен
     * @param string $relativePath - относительный URI директории для сохранения изображений
     */
    public function __construct(string $host, string $secretKey, string $relativePath, $fileManager)
    {
        parent::__construct($host, $secretKey);
        $this->relativePath = $relativePath;
        $this->resultPathDir = public_path($relativePath);
        $this->fileManager = $fileManager;

        if (file_exists($this->resultPathDir)) {
            if (!is_writable($this->resultPathDir)) {
                throw new \LogicException("<{$this->resultPathDir}> не доступен для записи");
            }
            return;
        }
        if (!mkdir($this->resultPathDir , 0777 , true)) {
            throw new \LogicException("<{$this->resultPathDir}> не удалось создать");
        }
    }

    /**
     * Проверка фотографии
     *
     * @param string $binImageStr
     * @param string $kioskIdentity
     * @param int $date
     * @return string|null
     * @throws \JsonException
     */
    public function checkPhoto(string $binImageStr, string $kioskIdentity, int $date): ?string
    {
        $url = $this->host . self::URI_CHECK;
        $data = [
            'terminal' => $kioskIdentity,
            'file' => $binImageStr,
            'date' => date('Y_m_d', $date)
        ];

       $result = $this->curlExecute($data, $url);

        if ($result['status'] == false) {
            return null;
        }

        return isset($result['id']) ? $result['id'] : null;
    }

    /**
     * Актуализация каталога
     * - создание если нет
     * - проверка прав
     * ..
     * @param string $dirPath
     * @throws FileSyncException
     */
    protected function checkDirByDirPath(string $dirPath): void
    {
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

    /**
     * Проверка готовности и скачивание фото
     *
     * @param string $queryNumber
     * @param string $status
     * @return array
     * @throws FileSyncException
     * @throws \JsonException
     */
    public function checkForReadiness(string $queryNumber, string &$status): array
    {
        /* @var CertainFacesSearchImageDto[] $imageDtoCollection */
        $imageDtoCollection = [];
        $url = $this->host . self::URI_CHECK_NUMBER;

        $data = [
            'queryNumber' => $queryNumber
        ];

        for( $i = 0; $i < self::MAX_NUMBER_CYCLE_WHEN_CHECKING; $i++) {
            sleep(1);

            $result = $this->curlExecute($data, $url);

            if (!isset($result['status'])) {
                $status = self::RESPONSE_STATUS_FAIL;
            }

            if (isset($result['status'])
                && in_array($result['status'], [self::RESPONSE_STATUS_NOT_FOUND, self::RESPONSE_STATUS_DONE, self::RESPONSE_STATUS_NO_FACE, self::RESPONSE_STATUS_IN_PROGRESS]) && !empty($result['preview_files'])) {
                foreach($result['preview_files'] as $key => $previewPhotoUrl) {
                    $originPhotoUrl = $result['origin_files'][$key];
                    $imageDtoCollection[] = $this->saveFile($previewPhotoUrl, $originPhotoUrl);
                }
                $status = $result['status'];

                return $imageDtoCollection;
            }

            if (isset($result['status'])
                && $result['status'] == self::RESPONSE_FACES_NOT_FOUND_ON_SELFIE && empty($result['preview_files'])) {
                $status = self::RESPONSE_STATUS_NOT_FOUND;
                return $imageDtoCollection;
            }

            if (isset($result['status'])
                && $result['status'] == self::RESPONSE_STATUS_DONE && empty($result['preview_files'])) {
                $status = self::RESPONSE_STATUS_NOT_FOUND;
                return $imageDtoCollection;
            }
        }

        $status = self::RESPONSE_STATUS_FAIL;

        return $imageDtoCollection;
    }

    /**
     * Сохранение и формирование ответа
     * @param string $previewPhotoUrl
     * @param string $originPhotoUrl
     * @return CertainFacesSearchImageDto
     * @throws FileSyncException
     */
    protected function saveFile(string $previewPhotoUrl, string $originPhotoUrl): CertainFacesSearchImageDto
    {
        $dto = new CertainFacesSearchImageDto();
//        $url = parse_url($previewPhotoUrl);

//        $this->fileManager->saveFile($previewPhotoUrl);

        $dto->originalUri = $originPhotoUrl;
        $dto->thumbUri = $previewPhotoUrl;
        $dto->path = $previewPhotoUrl;

        return $dto;
    }

    /**
     * Сохранение и формирование ответа
     * @param string $originPhotoUrl
     * @return string
     * @throws FileSyncException
     */
    public function saveOriginFile(string $originPhotoUrl): string
    {
        $url = parse_url($originPhotoUrl);
        $localPath = public_path($this->relativePath);
        $this->checkDirByDirPath($localPath);
        copy($originPhotoUrl, $localPath. DIRECTORY_SEPARATOR . basename($originPhotoUrl));

        return $this->relativePath . DIRECTORY_SEPARATOR . basename($originPhotoUrl);
    }

    /**
     * Выполнение
     *
     * @param array $data
     * @param string $url
     * @return mixed|null
     * @throws \JsonException
     * @throws \Exception
     */
    private function curlExecute(array $data, string $url)
    {
        $curl = curl_init($url);

        $header = [
            'Content-type: application/json',
            'Accept: */*',
        ];

        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($data));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);

        $output = curl_exec($curl);
        $result  = json_decode($output, true);

        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if ($statusCode != 200) {
            throw new \Exception("Удаленный сервис ответил статусом $statusCode. Response:" . PHP_EOL . $output);
        }

        return $result;
    }
}
