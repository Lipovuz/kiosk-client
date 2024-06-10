<?php
namespace App\Connectors\CertainFacesSearch;

use App\ImageSources\ImageDto;
use Lomobil\Common\DrIsland\Connectors\AbstractConnector;

/**
 * Class PreviewCertainFacesSearchConnector
 * Коннектор сервиса поиска фото по образцу (Нейросеть)
 */
class PreviewCertainFacesSearchConnector extends AbstractConnector
{
    /**
     * @const - URI метода поиска
     */
    protected const URI_PHOTO_SEARCHING = '/find/similar';

    /**
     * @const - текст ответа сервера когда лицо не найдено
     */
    protected const RESPONSE_NOT_FOUND_FACE = '400: Face not found';

    /**
     * @const - текст ответа сервера когда найдено несколько лиц
     */
    protected const RESPONSE_MANY_FACES_FOUND = '400: Many faces found';

    /**
     * @const - Обязательные поля - элемента результата поиска
     */
    protected const PHOTO_SEARCH_REQUIRED_FIELDS = ['utc_timestamp', 'similarity_distance', 'img_url'];

    /**
     * @var int - макс количество параллельных потоков для скачивания
     */
    protected int $maxDownloadThreads = 5;

    /**
     * @var string - относительный путь к директории для сохранения изображений (от public)
     */
    protected string $relativePath;

    /**
     * @var string - абсолютный путь к директории для сохранения изображений
     */
    protected string $resultPathDir;

    /**
     * Результаты с меньше релевантностью игнорируем
     * @var float - минимальная релевантность для учета найденных изображений
     */
    private float $minSimilarityDistance;

    /**
     * PreviewCertainFacesSearchConnector constructor.
     * @param string $host - хост сервиса
     * @param string $secretKey - BEARER токен
     * @param string $relativePath - относительный URI директории для сохранения изображений
     * @param float $minSimilarityDistance
     * @param int $maxDownloadThreads
     */
    public function __construct(string $host, string $secretKey, string $relativePath, float $minSimilarityDistance, int $maxDownloadThreads)
    {
        parent::__construct($host, $secretKey);
        $this->relativePath = $relativePath;
        $this->minSimilarityDistance = $minSimilarityDistance;
        $this->resultPathDir = public_path($relativePath);
        $this->maxDownloadThreads = $maxDownloadThreads;

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
     * Поиск фото по изображению с лицом
     * @param string|null $binImageStr
     * @param string|null $filePath
     * @param int $limit
     * @param int $offset
     * @param int $dateFromAt
     * @param int $dateToAt
     * @return CertainFacesSearchImageDto[]|ImageDto[]
     * @throws \Exception
     */
    public function photoSearching(
        ?string $binImageStr = null,
        ?string $filePath = null,
        int $limit = 10,
        int $offset = 0,
        int $dateFromAt = 0,
        int $dateToAt = PHP_INT_MAX
    ): array
    {
        if ($filePath && file_exists($filePath)) {
            $binImageStr = file_get_contents($filePath);
        } elseif (!$binImageStr) {
            throw new \LogicException('Не указан ни один источник изображений-образца');
        }

        $url = $this->host . self::URI_PHOTO_SEARCHING;
        $curl = curl_init($url);

        $header = [
            'Content-type: image/jpeg',
            'Accept: application/json',
            'Authorization: Bearer ' . $this->secretKey
        ];

        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_POSTFIELDS, $binImageStr);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl, CURLOPT_AUTOREFERER, 5);

        $output = curl_exec($curl);

        if ($output === false) {
            throw new \Exception("CURL Error: " . curl_error($curl));
        }
        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        // Если лицо не найдено
        if ($statusCode == 400 && $output == self::RESPONSE_NOT_FOUND_FACE) {
            return [];
        }
        // Если несколько лиц
        if ($statusCode == 400 && $output == self::RESPONSE_MANY_FACES_FOUND) {
            return [];
        }
        if ($statusCode != 200) {
            throw new \Exception("Удаленный сервис ответил статусом $statusCode. Response:" . PHP_EOL . $output);
        }
        $json  = json_decode($output, true, 512, JSON_THROW_ON_ERROR);

        return $this->parseResponse($json, $limit, $offset, $dateFromAt, $dateToAt);
    }

    /**
     * Обработка ответа
     * @param array $response
     * @param int $limit
     * @param int $offset
     * @param int $dateFromAt
     * @param int $dateToAt
     * @return CertainFacesSearchImageDto[]
     * @throws \Exception
     */
    protected function parseResponse(
        array $response, int $limit = 10, int $offset = 0,
        $dateFromAt = 0, $dateToAt = PHP_INT_MAX
    ): array
    {
        /* @var CertainFacesSearchImageDto[] $imageDtoCollection */
        $imageDtoCollection = [];
        // счетчик подходящих (отфильтрованных изображений) фото
        $numberMatchingImages = 0;

        foreach ($response as $item) {
            // проверка параметров
            if (
                !is_array($item) ||
                array_diff(self::PHOTO_SEARCH_REQUIRED_FIELDS, array_keys($item))
            ) {
                throw new \Exception("Структура ответа не соответствует ожиданию: ");
            }

            // фильтрация по баз. параметрам
            if (
                // релевантность меньше допустимой
                $this->minSimilarityDistance > $item['similarity_distance'] ||
                $dateFromAt > $item['utc_timestamp'] ||     // дата ранее минимальной
                $dateToAt < $item['utc_timestamp']          // дата более максимальной
            ) {
                continue;
            }
            $numberMatchingImages++;                    // подсчет номера текущего элемента
            if ($numberMatchingImages < $offset) {      // достигнут ли заданный $offset
                continue;
            }

            $imageDtoCollection[] = $this->responseItemToDto($item);

            if (count($imageDtoCollection) > $limit) {  // достигнут лимит отбора записей
                break;
            }
        }

        return $imageDtoCollection;
    }

    /**
     * Обработка элемента ответа
     * @param array $item
     * @return CertainFacesSearchImageDto
     */
    protected function responseItemToDto(array $item): CertainFacesSearchImageDto
    {
        $dto = new CertainFacesSearchImageDto();
        // Получение полного урл из урл превью
        $dto->originalUri = str_replace('blur', 'storedimages', $item['img_url']);
        $dto->thumbUri = $item['img_url'];
        $dto->similarityDistance = (float) $item['similarity_distance'];
        $dto->createAt = (int) $item['utc_timestamp'];

        return $dto;
    }
}
