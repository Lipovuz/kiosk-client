<?php
namespace App\Http\Controllers\Api\Broker;

use App\Connectors\Acquiring\AcquiringBridge;
use App\Http\Controllers\AbstractApiController;
use App\Services\KioskService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

/**
 * Class AcquiringController
 * Контроллер - обработка команд из сервиса оплаты картой
 */
class AcquiringController extends AbstractApiController
{
    /**
     * @param Request $request
     * @param AcquiringBridge $acquiringBridge
     * @param KioskService $kioskService
     * @return JsonResponse
     */
    public function handleCommand(Request $request, AcquiringBridge $acquiringBridge, KioskService $kioskService): JsonResponse
    {
        $acquiringBridge->handleRequest($request->getContent());
        return new JsonResponse($kioskService->defaultBalanceJsonSerialize());
    }
}
