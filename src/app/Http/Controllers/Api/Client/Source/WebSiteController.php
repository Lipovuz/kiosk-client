<?php

namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\ImageSources\Selfie\SourcesService;
use App\Services\Kiosk\UpdateKioskService;

/**
 * Загрузка через сайт
 *
 * Class WebSiteController
 */
class WebSiteController extends AbstractApiController
{

    /**
     * Загрузка фото
     *
     * @param UpdateKioskService $service
     * @param SourcesService $sourcesService
     * @return array
     */
    public function request(UpdateKioskService $service, SourcesService $sourcesService): array
    {
        for( $i = 0; $i < 8; $i++) {
            sleep(5);

            $fileCollectionDto = $service->downloadImages();

            if (!empty($fileCollectionDto->files)) {
                foreach ($fileCollectionDto->files as $file) {
                    $sourcesService->setImageDto($file->localPath, time());
                }
                break;
            }
        }

        return $sourcesService->jsonSerialize();
    }
}
