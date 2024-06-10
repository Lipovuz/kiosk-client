<?php
namespace App\Db\Managers\Kiosk;

use App\Db\Criteria\Order\OrderCriteria;
use App\Db\Models\Order\Order;
use App\Db\Models\Order\OrderItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Dto\OrderDto;

/**
 * Class OrderManager
 * Менеджер заказов
 */
class OrderManager
{

    protected ?Order $lastModel = null;

    /**
     * @return Order|null
     */
    public function getLastModel(): ?Order
    {
        return $this->lastModel;
    }

    /**
     * @param string $kioskIdentity
     * @param int $orderId
     * @return Order|null
     */
    public function getNewModel(string $kioskIdentity, int $orderId): ?Order
    {
        return (new OrderCriteria())
            ->isNew()
            ->byKioskIdentity($kioskIdentity)
            ->byId($orderId)
            ->first();
    }

    /**
     * Создать заказ из DTO
     * @param OrderDto $orderDto
     * @return bool
     */
    public function createFromDto(OrderDto $orderDto): bool
    {
        try {
            DB::transaction(function () use($orderDto) {
                $this->lastModel = Order::createFromDto($orderDto);
                $this->saveOrder($this->lastModel);
                foreach ($orderDto->items as $orderItemDto) {
                    $orderItem = OrderItem::createFromDto($orderItemDto);
                    $this->saveOrderItem($this->lastModel, $orderItem);
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$orderDto, $exception]);
            return false;
        }
        return true;
    }

    public function saveOrder(Order $order): void
    {
        $this->lastModel = $order;
        if (!$this->lastModel->save()) {
            throw new \LogicException("Undefined save error Order");
        }
    }

    public function saveOrderItem(Order $order, OrderItem $orderItem): void
    {
        $this->lastModel = $order;
        if (!$this->lastModel->id) {
            throw new \LogicException("Невозможно добавить элемент к не созданному заказу");
        }
        if (!$this->lastModel->items()->save($orderItem)) {
            throw new \LogicException("Undefined save error OrderItem");
        }
    }
}
