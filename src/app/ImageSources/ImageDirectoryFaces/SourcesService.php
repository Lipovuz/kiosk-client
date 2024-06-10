<?php
namespace App\ImageSources\ImageDirectoryFaces;

use App\ImageSources\LocalDirectoryFiles;
use App\Services\KioskService;

/**
 * Фото из директории
 * Class SourcesService
 * @package App\ImageSources\ImageDirectoryFaces
 */
class SourcesService extends LocalDirectoryFiles
{

    /* @var int */
    protected int $defaultLimit;

    /* @var KioskService */
    protected KioskService $kioskService;

    /**
     * SourcesService constructor.
     * @param KioskService $kioskService
     * @param string $relativePath
     * @param int $defaultLimit
     * @param array $imgExtension
     */
    public function __construct(KioskService $kioskService, string $relativePath, int $defaultLimit, array $imgExtension = [])
    {
        $this->defaultLimit = $defaultLimit;
        $this->kioskService = $kioskService;
        parent::__construct(public_path(), $relativePath, $imgExtension);
    }

    /**
     * Подготовка данных для выдачи
     *
     * @param int $offset
     * @param int|null $limit
     * @return array
     */
    public function jsonSerialize(int $offset = 0, int $limit = 0): array
    {
        $limit = $limit ?: $this->defaultLimit;
        $images = array_slice($this->getImageCollections(), $offset, $limit);

        $data = [
            'images' => [],
            'total' => count($this->getImageCollections()),
            'offset' => $offset,
            'limit' => $limit,
        ];
        foreach ($images as $imageDto) {
            $imageDto->brandId = $this->kioskService->getDefaultBrandId();
            $data['images'][] = $imageDto->toArray();
        }
        return $data;
    }
}
