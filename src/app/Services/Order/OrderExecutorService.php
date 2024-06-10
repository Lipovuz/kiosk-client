<?php
namespace App\Services\Order;

use App\Db\Managers\Kiosk\OrderManager;
use App\Db\Models\Order\Order;
use App\ProductExecutors\AbstractProduct;
use App\ProductExecutors\Email\EmailBrandFullPhoto;
use App\ProductExecutors\Printing\PrintBrandFullPhoto;
use App\Reference\Order\OrderStateReference;
use App\Services\Balance\BalanceService;
use App\Services\KioskService;
use Illuminate\Support\Facades\DB;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;
use Lomobil\Common\DrIsland\Laravel\Exceptions\ApiException;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class OrderExecutorService
 * Сервис выполнения заказа
 */
class OrderExecutorService
{

    private OrderManager $orderManager;

    private BalanceService $balanceService;

    private KioskService $kioskService;

    public function __construct(KioskService $kioskService, OrderManager $orderManager, BalanceService $balanceService)
    {
        $this->kioskService = $kioskService;
        $this->orderManager = $orderManager;
        $this->balanceService = $balanceService;
    }

    protected static array $executorMap = [
        ProductReference::BRAND_PRINT_PAPER_10x15 => PrintBrandFullPhoto::class,
        ProductReference::BRAND_SEND_EMAIL => EmailBrandFullPhoto::class,
    ];


    /**
     * Основной метод - выполнение заказа
     * @param int $orderId
     */
    public function execute(int $orderId): void
    {
        $this->kioskService->exist();
        // получение модели заказа
        $orderModel = $this->orderManager->getNewModel($this->kioskService->getIdentity(), $orderId);
        if (!$orderModel) {
            throw new ApiException('Order not found', 404);
        }
        // проверка баланса
        $balanceModel = $this->balanceService->getBalanceModel(BalanceTypeReference::CURRENT, $orderModel->currency_id);
        if ($balanceModel->amount_penny < $orderModel->amount_penny) {
            // недостаточно средств
            throw new ApiException('Insufficient funds, check balance', 402);
        }
        // списание средств
        if (!$this->balanceService->botCharge($orderModel->amount_penny, $orderModel->currency_id)) {
            // ошибка списания средств
            throw new ApiException('Internal error of the service - writing off the balance', 500);
        }
        if (!$this->orderExecute($orderModel)) {
            // ошибка выполнения заказа
            throw new ApiException('Order is not fulfilled or partially fulfilled', 500);
        }
    }

    /**
     * @param Order $orderModel
     * @return bool
     */
    protected function orderExecute(Order $orderModel): bool
    {
        // заказ в процессе исполнения
        $orderModel->state_id = OrderStateReference::REALIZATION_PROCESS;
        $this->orderManager->saveOrder($orderModel);

        $orderIsSuccess = true;
        $itemsModels = [];
        foreach ($orderModel->items as $orderItem) {
            $orderItemDto = $orderItem->getDto();
            if (!$this->itemExecute($orderItemDto)) {
                $orderIsSuccess = false;
            }
            $orderItem->is_success = $orderItemDto->isSuccess;
            $orderItem->error = $orderItemDto->error;
            $itemsModels[] = $orderItem;
        }

        $orderModel->end_at = time();
        if ($orderIsSuccess) {
            $orderModel->state_id = OrderStateReference::COMPLETE_SUCCESS;
        } else {
            $orderModel->state_id = OrderStateReference::COMPLETE_ERROR;
        }

        DB::beginTransaction();
        try {
            $this->orderManager->saveOrder($orderModel);
            foreach ($itemsModels as $orderItem) {
                $this->orderManager->saveOrderItem($orderModel, $orderItem);
            }
        } catch (\Exception $exception) {
            DB::rollBack();
            return false;
        }
        DB::commit();
        return $orderIsSuccess;
    }

    /**
     * @param OrderItemDto $orderItemDto
     * @return bool
     */
    protected function itemExecute(OrderItemDto $orderItemDto): bool
    {
        if (!isset(self::$executorMap[$orderItemDto->productId])) {
            throw new \LogicException("Исполнитель продукта {$orderItemDto->productId} не определен");
        }
        /* @var AbstractProduct $executor */
        $executor = resolve(self::$executorMap[$orderItemDto->productId]);
        if (!($executor instanceof AbstractProduct)) {
            throw new \LogicException("Сервис продукта {$orderItemDto->productId} не реализует исполнителя");
        }
        return $executor->execute($orderItemDto);
    }
}
