<?php
namespace App\Db\Criteria\Order;

use App\Db\Models\Order\Order;
use App\Reference\Order\OrderStateReference;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;

/**
 * Class OrderCriteria
 */
class OrderCriteria extends AbstractCriteria
{
    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return Order::class;
    }

    /**
     * @param int $id
     * @return OrderCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

    /**
     * @param string $kioskIdentity
     * @return OrderCriteria
     */
    public function byKioskIdentity(string $kioskIdentity): self
    {
        $this->where(['kiosk_identity' => $kioskIdentity]);
        return $this;
    }

    /**
     * @return $this
     */
    public function notSynchronized(): self
    {
        $this->where(['synchronized_at' => 0]);

        return $this;
    }

    /**
     * @return $this
     */
    public function isNew(): self
    {
        $this->where(['state_id' => OrderStateReference::NEW]);
        return $this;
    }

    /**
     * @return $this
     */
    public function isCompleted(): self
    {
        $this->whereIn(
            'state_id',
            [OrderStateReference::COMPLETE_SUCCESS, OrderStateReference::COMPLETE_ERROR]
        );
        return $this;
    }

}
