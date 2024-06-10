<?php

namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\Http\Requests\Source\ImagesSaveForm;
use App\ImageSources\Selfie\SourcesService;

/**
 * Селфи сделанные на киоске
 *
 * Class SelfieController
 */
class SelfieController extends AbstractApiController
{

    /**
     * Сохранение селфи
     *
     * @param ImagesSaveForm $selfieSaveForm
     * @param SourcesService $sourcesService
     * @return array
     */
    public function request(ImagesSaveForm $selfieSaveForm, SourcesService $sourcesService): array
    {
        $sourcesService->saveSelfie($selfieSaveForm->images, $sourcesService->pathBySelfie);

        return $sourcesService->jsonSerialize();
    }
}
