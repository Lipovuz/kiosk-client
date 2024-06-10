<?php
namespace App\Db\Managers\Brand;

use App\Db\Criteria\Brand\BrandCriteria;
use App\Db\Models\Brand\Brand;
use App\Db\Models\Brand\BrandFrameImage;
use App\Services\FileSyncService\FileSyncException;
use App\Services\FileSyncService\Service as FileSyncService;
use App\Services\Kiosk\UpdateKioskService;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Support\Facades\Log;

/**
 * Class BrandManager
 */
class BrandManager
{
    /**
     * @var Brand|BrandFrameImage|null
     */
    protected $lastModel;

    /**
     * @var FileSyncService
     */
    private FileSyncService $fileSyncService;

    /**
     * @param FileSyncService $fileSyncService
     */
    public function __construct(FileSyncService $fileSyncService)
    {
        $this->fileSyncService = $fileSyncService;
    }

    /**
     * @return Brand|null
     */
    public function getLastModel(): ?Brand
    {
        return $this->lastModel;
    }

    public function getBrand(int $brandId): Brand
    {
        $model = (new BrandCriteria())->byId($brandId)->first();
        if (!$model) {
            throw new NotFound('Бренд не найден');
        }
        return $model;
    }

    public function getBrandByIdentity(string $brandIdentity): Brand
    {
        $model = (new BrandCriteria())->byIdentifier($brandIdentity)->first();
        if (!$model) {
            throw new NotFound('Бренд не найден');
        }
        return $model;
    }

    /**
     * @return Brand[]|\Illuminate\Database\Eloquent\Collection
     */
    public function getBrandList()
    {
        return (new BrandCriteria())->get();
    }

    /**
     * @param Brand $brand
     * @param BrandFrameImage $brandFrameImage
     * @return bool
     * @throws \App\Services\FileSyncService\FileSyncException
     */
    public function saveBrandFrame(Brand $brand, BrandFrameImage $brandFrameImage): bool
    {
        // синхронизация файла изображения
        try {
            $this->fileSyncService->syncFile($brandFrameImage->local_path);
        } catch (FileSyncException $fileSyncException) {
            Log::channel(UpdateKioskService::LOG_ERROR_CHANNEL)->error(
                $fileSyncException->getMessage(),
                ['brandFrameImage' => $brandFrameImage]
            );
        }
        return (bool) $brand->frameImages()->save($brandFrameImage);
    }
}
