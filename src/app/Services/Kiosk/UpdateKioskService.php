<?php
namespace App\Services\Kiosk;

use App\Db\Criteria\Brand\BrandCriteria;
use App\Db\Criteria\Kiosk\FileKioskCriteria;
use App\Db\Criteria\Kiosk\KioskCriteria;
use App\Db\Managers\Brand\BrandManager;
use App\Db\Managers\File\FileManager;
use App\Db\Models\Brand\Brand;
use App\Db\Models\Brand\BrandFrameImage;
use App\Db\Models\Kiosk\FilesKiosk;
use App\Db\Models\Kiosk\Kiosk;
use App\Db\Models\Kiosk\KioskImageSource;
use App\Db\Models\Kiosk\KioskProduct;
use App\Db\Models\Kiosk\KioskSetting;
use App\Db\Models\Kiosk\KioskViewSetting;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Connectors\Core\CoreKioskConnector;
use Lomobil\Common\DrIsland\Dto\BrandDto;
use Lomobil\Common\DrIsland\Dto\FilesCollectionDto;
use Lomobil\Common\DrIsland\Dto\KioskImageSourceDto;
use Lomobil\Common\DrIsland\Dto\KioskSettingDto;
use Lomobil\Common\DrIsland\Reference\KioskViewSettingReference;

/**
 * Сервис обновления настроек киоска из ядра
 * Class UpdateCoreKioskService
 */
class UpdateKioskService
{
    public const LOG_ERROR_CHANNEL = 'update_kiosk_error';

    /**
     * @var CoreKioskConnector
     */
    private CoreKioskConnector $coreKioskConnector;

    /**
     * @var BrandManager
     */
    private BrandManager $brandManager;

    /**
     * @var FileManager
     */
    private FileManager $fileManager;

    /**
     * UpdateCoreKioskService constructor.
     * @param CoreKioskConnector $coreKioskConnector
     * @param BrandManager $brandManager
     * @param FileManager $fileManager
     */
    public function __construct(CoreKioskConnector $coreKioskConnector, BrandManager $brandManager, FileManager $fileManager)
    {
        $this->coreKioskConnector = $coreKioskConnector;
        $this->brandManager = $brandManager;
        $this->fileManager = $fileManager;
    }

    /**
     * @return FilesCollectionDto|null
     */
    public function downloadImages(): ?FilesCollectionDto
    {
        /* @var FilesCollectionDto $fileCollectionDto */
        $fileCollectionDto = $this->coreKioskConnector->downloadImages();
        DB::beginTransaction();

        try {
            foreach ($fileCollectionDto->files as $file) {
                $this->fileManager->saveFile($this->coreKioskConnector->getHost() . DIRECTORY_SEPARATOR . $file->localPath);
            }
            $this->coreKioskConnector->clearImages();
            DB::commit();
            return $fileCollectionDto;
        } catch (\Exception $e) {
            DB::rollBack();
            return null;
        }
    }

    /**
     * Обновление данных по киоску из ядра
     * @return bool
     */
    public function updateKiosk() : bool
    {
        /** @var Kiosk $kiosk */
        $kiosk = (new KioskCriteria())->first();

        if (!$kiosk) {
            return false;
        }

        $kioskUpdateDto = $this->coreKioskConnector->kioskUpdate(strtotime($kiosk->synchronized_at));

        if (!$kioskUpdateDto) {
            return false;
        }

        DB::beginTransaction();

        $updateDataKiosk = Kiosk::createFromDto($kioskUpdateDto);
        $kiosk->fill($updateDataKiosk->attributesToArray());

        $kiosk->synchronized_at = date("Y-m-d H:i:s");
        if ($kiosk->save()
            && $this->updateKioskProducts($kiosk, $kioskUpdateDto->products)
            && $this->updateKioskImageSource($kiosk, $kioskUpdateDto->imageSources)
            && $this->updateBrand($kiosk, $kioskUpdateDto->defaultBrand)
            && $this->updateBrands()
            && $this->updateVideo()
            && $this->updateSetting($kiosk, $kioskUpdateDto->setting)
        ) {
            DB::commit();
            return true;
        }

        DB::rollBack();
        return false;
    }

    /**
     * Обновление бренда
     * @param Kiosk $kiosk
     * @param BrandDto $brandDto
     *
     * @return bool
     */
    public function updateBrand(Kiosk $kiosk, BrandDto $brandDto): bool
    {
        try {
            if (!$brandDto && $kiosk->default_brand_id == $brandDto->id) {
                return true;
            }
            $brand = (new BrandCriteria())->byId($brandDto->id)->first();

            $newBrand = Brand::createFromDto($brandDto);

            if ($brand) {
                $brand->fill($newBrand->attributesToArray())
                    ->save();
            } else {
                $newBrand->id = $brandDto->id;
                $newBrand->save();
                $brand = $newBrand;
            }

            if ($brandDto->frameImages) {
                return $this->updateBrandFrameImages($brand, $brandDto->frameImages);
            }
            return true;
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$brandDto, $exception]);
            return false;
        }
    }

    /**
     * Обновление технических настроек
     * @param Kiosk $kiosk
     * @param KioskSettingDto[] $kioskSettingDtoCollection
     * @return bool
     */
    public function updateSetting(Kiosk $kiosk, array $kioskSettingDtoCollection): bool
    {
        try {
            foreach ($kioskSettingDtoCollection as $kioskSettingDto) {
                $newSetting = KioskSetting::createFromDto($kioskSettingDto);
                $setting = $kiosk->setting
                    ->where('kiosk_identity', '==', $kioskSettingDto->kioskIdentity)
                    ->where('type', '==', $kioskSettingDto->type)->first();

                if ($setting) {
                    $setting->fill($newSetting->attributesToArray())
                        ->save();
                } else {
                    $newSetting->save();
                }
            }
            return true;
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kioskSettingDto, $exception]);
            return false;
        }
    }

    /**
     * Обновление настроек вида
     * @param Kiosk $kiosk
     * @param KioskSettingDto[] $kioskSettingDtoCollection
     * @return bool
     */
    public function updateSettingView(Kiosk $kiosk, array $kioskSettingDtoCollection): bool
    {
        try {
            foreach ($kioskSettingDtoCollection as $kioskSettingDto) {
                $newSetting = KioskViewSetting::createFromDto($kioskSettingDto);
                $setting = $kiosk->settingsView
                    ->where('kiosk_identity', '==', $kioskSettingDto->kioskIdentity)
                    ->where('type', '==', $kioskSettingDto->type)->first();

                if (KioskViewSettingReference::getReferenceCollection()[$newSetting->type]->type == 'file') {
                    $this->fileManager->saveFile($newSetting->value);
                }

                if ($setting) {
                    $setting->fill($newSetting->attributesToArray())
                        ->save();
                } else {
                    $newSetting->save();
                }
            }
            return true;
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kioskSettingDto, $exception]);
            return false;
        }
    }

    /**
     * Обновление брендов
     * @return bool
     */
    public function updateBrands(): bool
    {
        $brandCollectionDto = $this->coreKioskConnector->brandsUpdate();
        $brands = (new BrandCriteria())->get();
        try {
            foreach ($brandCollectionDto->brands as $brandDto) {
                $newBrand = Brand::createFromDto($brandDto);
                $brand = $brands->where('id', '==', $brandDto->id)->first();
                if ($brand) {
                    $brand->fill($newBrand->attributesToArray())
                        ->save();
                } else {
                    $newBrand->id = $brandDto->id;
                    $newBrand->save();
                    $brand = $newBrand;
                }

                if ($brandDto->frameImages) {
                    $this->updateBrandFrameImages($brand, $brandDto->frameImages);
                }
            }
            return true;
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$brandCollectionDto, $exception]);
            return false;
        }
    }


    /**
     * Обновление брендов
     * @return bool
     */
    public function updateVideo()
    {
        $fileCollectionDto = $this->coreKioskConnector->synсVideo(time());
        $localFiles = [];
        $ids = [];

        try {
            $kioskFiles = (new FileKioskCriteria());
            foreach ($kioskFiles as $file) {
                $localFiles[] = $file->getDto();
            }
            foreach ($fileCollectionDto->files as $file) {
                $kioskFile = $kioskFiles->where(['local_path' => $file->localPath])->first();
                if (!$kioskFile) {
                    $newFile = FilesKiosk::createFromDto($file);
                    $newFile->save();

                    $this->fileManager->saveFile($newFile->local_path);
                    $ids[] = $newFile->id;

                } else {
                    $ids[] = $kioskFile->id;
                }
            }

            if ($ids) {
               (new FileKioskCriteria())->whereIn('id',$ids, 'and', true)->delete();
            }

            return true;
        } catch (\Exception $exception) {

            Log::error($exception->getMessage(), [$fileCollectionDto, $exception]);
            return false;
        }
    }

    /**
     * Обновление источников изображений киоска
     * @param Kiosk $kiosk
     * @param KioskImageSourceDto[] $kioskImageSourceDtoCollection
     * @return false
     */
    private function updateKioskImageSource(Kiosk $kiosk, array $kioskImageSourceDtoCollection): bool
    {
        try {
            DB::transaction(function () use($kiosk, $kioskImageSourceDtoCollection) {
                // обновляем существующие источники
                foreach ($kiosk->imageSources as $existImageSource) {
                    foreach ($kioskImageSourceDtoCollection as $key => $kioskImageSourceDto) {
                        $modelImageSource = KioskImageSource::createFromDto($kioskImageSourceDto);
                        if ($existImageSource->image_source_id == $modelImageSource->image_source_id) {
                            $existImageSource->image_source_id = $kioskImageSourceDto->imageSourceId;
                            $existImageSource->fill($modelImageSource->attributesToArray());
                            $existImageSource->save();
                            unset($kioskImageSourceDtoCollection[$key]);
                            continue 2;
                        }
                    }
                    $existImageSource->delete();
                }
                // добавляем новые источники
                foreach ($kioskImageSourceDtoCollection as $kioskImageSourceDto) {
                    $requestImageSource = KioskImageSource::createFromDto($kioskImageSourceDto);
                    $kiosk->imageSources()->save(
                        new KioskImageSource($requestImageSource->attributesToArray())
                    );
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kiosk, $kioskImageSourceDtoCollection, $exception]);
            return false;
        }
        return true;
    }

    /**
     * Обновление продуктов киоска
     * @param Kiosk $kiosk
     * @param array $kioskProductDtoCollection
     * @return bool
     */
    private function updateKioskProducts(Kiosk $kiosk, array $kioskProductDtoCollection): bool
    {
        try {
            DB::transaction(function () use($kiosk, $kioskProductDtoCollection) {
                // обновляем существующие источники
                foreach ($kiosk->products as $existProduct) {
                    foreach ($kioskProductDtoCollection as $key => $kioskProductDto) {
                        $modelProduct = KioskProduct::createFromDto($kioskProductDto);
                        if ($existProduct->product_id == $modelProduct->product_id) {
                            $existProduct->fill($modelProduct->attributesToArray());
                            $existProduct->save();
                            unset($kioskProductDtoCollection[$key]);
                            continue 2;
                        }
                    }
                    $existProduct->delete();
                }
                // добавляем новые источники
                foreach ($kioskProductDtoCollection as $kioskProductDto) {
                    $requestProduct = KioskProduct::createFromDto($kioskProductDto);
                    $kiosk->products()->save(
                        new KioskProduct($requestProduct->attributesToArray())
                    );
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kiosk, $kioskProductDtoCollection, $exception]);
            return false;
        }
        return true;
    }

    /**
     * Обновление рамок бренда
     * @param Brand $brand
     * @param array $brandFrameImagesDtoCollection
     * @return bool
     */
    private function updateBrandFrameImages(Brand $brand, array $brandFrameImagesDtoCollection): bool
    {
        // TODO избыточный код - отрефакторить в перспективе
        try {
            DB::transaction(function () use($brand, $brandFrameImagesDtoCollection) {
                // обновляем существующие источники
                foreach ($brand->frameImages as $existImage) {
                    foreach ($brandFrameImagesDtoCollection as $key => $brandFrameImagesDto) {
                        $modelImage = BrandFrameImage::createFromDto($brandFrameImagesDto);
                        if ($existImage->brand_id == $modelImage->brand_id) {
                            $existImage->fill($modelImage->attributesToArray());
                            $this->brandManager->saveBrandFrame($brand, $existImage);
                            unset($brandFrameImagesDtoCollection[$key]);
                            continue 2;
                        }
                    }
                    $existImage->delete();
                }
                // добавляем новые источники
                foreach ($brandFrameImagesDtoCollection as $kioskProductDto) {
                    $modelImage = BrandFrameImage::createFromDto($kioskProductDto);
                    $this->brandManager->saveBrandFrame(
                        $brand,
                        new BrandFrameImage($modelImage->attributesToArray())
                    );
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$brand, $brandFrameImagesDtoCollection, $exception]);
            return false;
        }
        return true;
    }
}
