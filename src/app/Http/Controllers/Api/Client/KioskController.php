<?php
namespace App\Http\Controllers\Api\Client;

use App\Http\Controllers\AbstractApiController;
use App\Services\Balance\BalanceService;
use Illuminate\Http\JsonResponse;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;

/**
 * Class KioskController
 */
class KioskController extends AbstractApiController
{

    /**
     * Получить общую информацию о киоске
     * - параметры, продукты, цены
     * @return JsonResponse
     */
    public function getInfo(): JsonResponse
    {
        $this->checkActiveKiosk();

        return new JsonResponse(
            $this->getKiosk()->jsonSerialize()
        );
    }

    /**
     * Переход в спящий режим - сброс
     * @param BalanceService $balanceService
     * @return JsonResponse
     */
    public function onStandBy(BalanceService $balanceService): JsonResponse
    {
        $this->checkActiveKiosk();
        // сброс баланса в 0
        $currentDefaultBalance = $balanceService->getBalanceModel(
            BalanceTypeReference::CURRENT,
            $this->getKiosk()->getDefaultCurrency()->value
        );
        $balanceService->botReset($currentDefaultBalance->amount_penny, $currentDefaultBalance->currency_id);
        return new JsonResponse(
            $this->getKiosk()->jsonSerialize()
        );
    }
}
