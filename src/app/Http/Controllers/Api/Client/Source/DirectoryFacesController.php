<?php
namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\ImageSources\ImageDirectoryFaces\SourcesService;
use App\Services\KioskService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Lomobil\Common\DrIsland\Laravel\Exceptions\ApiException;
use Lomobil\Common\DrIsland\Reference\ImageSourceReference;

/**
 * Изображения из локальной директории
 *
 * Class DirectoryFacesController
 */
class DirectoryFacesController extends AbstractApiController
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

        if (!$this->getKiosk()->hasImageSources(ImageSourceReference::IMAGE_DIRECTORY_FACES)) {
            throw new ApiException('Данный источник не доступен на данном киоске.', 403);
        }
        $this->sourcesService = $sourcesService;
    }

    /**
     * Получить список фото для отображения
     * + пагинация
     * @param Request $request
     * @return JsonResponse
     */
    public function get(Request $request): JsonResponse
    {
        $offset = (int) $request->get('offset', 0);
        $limit = (int) $request->get('limit', 0);

        return new JsonResponse(
            $this->sourcesService->jsonSerialize($offset, $limit)
        );
    }
}
