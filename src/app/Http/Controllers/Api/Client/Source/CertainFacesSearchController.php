<?php
namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\Http\Requests\Source\CertainFacesSearchForm;
use App\Http\Requests\Source\DatesSearchForm;
use App\ImageSources\CertainFacesSearch\SourcesService;
use App\Services\KioskService;
use Illuminate\Http\JsonResponse;
use Lomobil\Common\DrIsland\Laravel\Exceptions\ApiException;
use Lomobil\Common\DrIsland\Reference\ImageSourceReference;

/**
 * Поиск изображений по образцу (фото лица)
 *
 * Class CertainFacesSearchController
 */
class CertainFacesSearchController extends AbstractApiController
{

    /* @var SourcesService */
    protected SourcesService $sourcesService;

    /**
     * @param KioskService $kiosk
     * @param SourcesService $sourcesService
     */
    public function __construct(KioskService $kiosk, SourcesService $sourcesService)
    {
        parent::__construct($kiosk);
        $this->checkActiveKiosk();
        if (!$this->getKiosk()->hasImageSources(ImageSourceReference::CERTAIN_FACES_SEARCH)) {
            throw new ApiException('Данный источник не доступен на данном киоске.', 403);
        }
        $this->sourcesService = $sourcesService;
    }

    /**
     * Запрос на поиск фото
     *
     * @param CertainFacesSearchForm $form
     * @return JsonResponse
     * @throws \JsonException
     */
    public function request(CertainFacesSearchForm $form): JsonResponse
    {
        $this->sourcesService->get(
            $form->getBinImageStr(),
            $form->getLocation(),
            $form->getLimit(),
            $form->getOffset(),
            $form->getDate(),
            $form->getQueryNumber()
        );

        return new JsonResponse($this->sourcesService->jsonSerialize());
    }
}
