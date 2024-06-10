<?php
namespace App\ImageSources\CertainFacesSearch;

use App\Connectors\CertainFacesSearch\CertainFacesSearchImageDto;
use App\Connectors\CertainFacesSearch\NewCertainFacesSearchConnector;
use App\Db\Managers\Brand\BrandManager;
use App\Facades\AppImage;
use App\Services\FileSyncService\FileSyncException;
use Exception;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Image;

/**
 * Сервис для работы с нейросетью
 * Class SourcesService
 * @package App\ImageSources\CertainFacesSearch
 */
class SourcesService
{
    /* @const - наименование канала лога */
    public const LOG_ERROR_CHANNEL = 'certain_faces_search_error';

    /* @var NewCertainFacesSearchConnector */
    private NewCertainFacesSearchConnector $certainFacesSearchConnector;

    /* @var BrandManager */
    private BrandManager $brandManager;

    /* @var CertainFacesSearchImageDto[] */
    private array $lastResult = [];

    /* @var int|null */
    private ?int $lastLimit = null;
    private ?string $queryNumber = null;
    private ?int $lastOffset = null;
    private ?int $date;
    private ?int $rotateCamera = 0;

    /* @var bool */
    private bool $saveImageFromWebcam = false;

    /* @var string */
    private string $pathToImagesFromWebcam;
    private string $status = NewCertainFacesSearchConnector::RESPONSE_STATUS_DONE;

    /**
     * SourcesService constructor.
     * @param NewCertainFacesSearchConnector $certainFacesSearchConnector
     * @param BrandManager $brandManager
     * @param int $rotateCamera
     * @param bool $saveImageFromWebcam
     * @param string $pathToImagesFromWebcam
     */
    public function __construct(
        NewCertainFacesSearchConnector $certainFacesSearchConnector,
        BrandManager $brandManager,
        int $rotateCamera,
        bool $saveImageFromWebcam,
        string $pathToImagesFromWebcam
    )
    {
        $this->certainFacesSearchConnector = $certainFacesSearchConnector;
        $this->brandManager = $brandManager;
        $this->rotateCamera = $rotateCamera;
        $this->saveImageFromWebcam = $saveImageFromWebcam;
        $this->pathToImagesFromWebcam = $pathToImagesFromWebcam;
    }

    /**
     * Поиск фото в нейросети
     *
     * @param string $binImageStr
     * @param string $location
     * @param int $limit
     * @param int $offset
     * @param int $date
     * @param string $queryNumber
     * @return string
     */
    public function get(string $binImageStr, string $location, int $limit, int $offset, int $date, string $queryNumber): string
    {
        $location = 'TEST';
        $this->lastResult = [];
        $this->lastLimit = $limit;
        $this->lastOffset = $offset;
        $this->date = $date;
        try {
            if (!$queryNumber) {
                $this->queryNumber = $this->certainFacesSearchConnector->checkPhoto(
                    $this->rotateImage($binImageStr), $location, $date
                );
            } else {
                $this->queryNumber = $queryNumber;
            }

            if ($this->queryNumber == null) {
                $this->status = NewCertainFacesSearchConnector::RESPONSE_STATUS_FAIL;

                return true;
            }

        $this->lastResult = $this->certainFacesSearchConnector->checkForReadiness($this->queryNumber, $this->status);

        } catch (Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error($exception->getMessage(), ['exception' => $exception]);

            $this->status = NewCertainFacesSearchConnector::RESPONSE_STATUS_FAIL;
            return false;
        }
        return true;
    }

    /**
     * Подстановка бренда с фото
     *
     * @param string $path
     * @return int
     */
    public function defineBrandByPath(string $path): ?int
    {
        $exifData = @exif_read_data($path);
        try {
            return $this->brandManager->getBrandByIdentity($exifData['Copyright'])->id;
        } catch (Exception $exception) {
            return null;
        }
    }

    /**
     * Подготовка данных для выдачи
     *
     * @return array
     */
    public function jsonSerialize(): array
    {
        $data = [
            'images' => [],
            'total' => count($this->lastResult),
            'offset' => $this->lastOffset,
            'limit' => $this->lastLimit,
            'data' => $this->date,
            'queryNumber' => $this->queryNumber,
            'status' => $this->status,
        ];

        foreach ($this->lastResult as $imageDto) {
            $data['images'][] = $imageDto->getImageDto()->toArray();
        }

        return $data;
    }

    /**
     * Метод для поворота фото
     *
     * @param string $originImage
     * @return string
     * @throws FileSyncException
     */
    public function rotateImage(string $originImage): string
    {
        $image = AppImage::make($originImage)->rotate($this->rotateCamera);
        if ($this->saveImageFromWebcam) {
            $this->saveImageFromWebcam($image);
        }
        return base64_encode($image->encode('jpg')->encoded);
    }

    /**
     * Сохранение фото из вебкамеры
     * @param Image $image
     * @throws FileSyncException
     */
    protected function saveImageFromWebcam(Image $image): void
    {
        $dirPath =public_path(str_replace(
            '/',
            DIRECTORY_SEPARATOR,
            $this->pathToImagesFromWebcam
        ));

        if (file_exists($dirPath)) {
            if (!is_writable($dirPath)) {
                throw new FileSyncException("<$dirPath> не доступен для записи");
            }
        } else {
            if (!mkdir($dirPath , 0777 , true)) {
                throw new FileSyncException("<$dirPath> не удалось создать");
            }
        }

        $image->save($dirPath . DIRECTORY_SEPARATOR . date("Y-m-d_H:i:s"). '.jpeg');
    }
}
