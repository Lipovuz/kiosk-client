<?php

namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\Http\Requests\Source\ImagesSaveForm;
use App\ImageSources\Selfie\SourcesService;

/**
 * Загрузка по Wi-Fi
 *
 * Class PrintViaWiFiController
 */
class PrintViaWiFiController extends AbstractApiController
{

    /**
     * Метод для сохранения фото
     *
     * @param ImagesSaveForm $imagesSaveForm
     * @param SourcesService $sourcesService
     * @return bool
     */
    public function saveImages(ImagesSaveForm $imagesSaveForm, SourcesService $sourcesService): bool
    {
        $sourcesService->clearImagesViaWiFi();

        return $sourcesService->saveImage($imagesSaveForm->images, $sourcesService->pathByWiFi);
    }

    /**
     * Метод для вывода ранее сохраненных фото
     *
     * @param SourcesService $sourcesService
     * @return array
     */
    public function searchImages(SourcesService $sourcesService): array
    {
        $sourcesService->scanImages($sourcesService->pathByWiFi);

        return $sourcesService->jsonSerialize();
    }
}
