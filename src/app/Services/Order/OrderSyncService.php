<?php

namespace App\Services\Order;

use App\Db\Criteria\Order\OrderCriteria;
use App\Db\Models\Order\Order;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Connectors\Core\CoreKioskConnector;

/**
 * Class OrderSyncService
 * @package App\Services\Order
 */
class OrderSyncService
{
    /* @const int */
    protected const DEFAULT_PACKAGE_SIZE = 10;

    /* @const int */
    protected const MAX_PACK = 10;

    /* @var CoreKioskConnector */
    private CoreKioskConnector $coreKioskConnector;

    /** @var int  */
    private int $packageSize;

    /* @var int */
    private int $lastStatSuccessPacks = 0;

    /* @var int */
    private int $lastStatErrorPacks = 0;

    /**
     * OrderSyncService constructor.
     * @param CoreKioskConnector $coreKioskConnector
     * @param int|null $packageSize
     */
    public function __construct(CoreKioskConnector $coreKioskConnector, int $packageSize = null)
    {
        $this->coreKioskConnector = $coreKioskConnector;
        $this->packageSize = $packageSize ?: self::DEFAULT_PACKAGE_SIZE;
    }

    /**
     * Метод синхронизации заказов с ядром
     */
    public function synchronization(): void
    {
        $packNum = 0;
        while (
            ($orders = $this->getOrdersPack()) &&
            $orders->count() &&
            $packNum <= self::MAX_PACK
        ) {

            if ($this->syncChunk($orders)) {
                $this->lastStatSuccessPacks++;
            } else {
                $this->lastStatErrorPacks++;
            }
        }
    }

    /**
     * @return Collection
     */
    protected function getOrdersPack(): Collection
    {
        return (new OrderCriteria())
            ->notSynchronized()
            ->isCompleted()
            ->limit($this->packageSize)
            ->get();
    }

    /**
     * @param Collection $orders
     * @return bool
     */
    protected function syncChunk(Collection $orders): bool
    {
        $ordersDto = [];
        $ids = [];
        foreach ($orders as $order) {
            $ordersDto[] = $order->getDto();
            $ids[] = $order->id;
        }

        try {
            if ($this->coreKioskConnector->ordersSync($ordersDto)) {
                $this->setSynchronizedAt($ids);
                return true;
            } else {
                return false;
            }
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), ['exception' => $exception]);
            return false;
        }
    }

    /**
     * @param array $ids
     */
    protected function setSynchronizedAt(array $ids)
    {
        DB::table(Order::TABLE_NAME)
            ->whereIn('id', $ids)
            ->update(['synchronized_at' => time()]);
    }

    /**
     * @return int
     */
    public function getLastStatSuccessPacks(): int
    {
        return $this->lastStatSuccessPacks;
    }

    /**
     * @return int
     */
    public function getLastStatErrorPacks(): int
    {
        return $this->lastStatErrorPacks;
    }
}
