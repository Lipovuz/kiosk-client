<?php
namespace App\Db\Criteria\Order;

use App\Db\Models\Order\OrderInvoiceTask;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;

/**
 * Class OrderCheckCriteria
 * @package App\Db\Criteria\Order
 */
class OrderInvoiceTaskCriteria extends AbstractCriteria
{

    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return OrderInvoiceTask::class;
    }

    /**
     * @param int $id
     * @return OrderInvoiceTaskCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

    /**
     * @param int $orderId
     * @return OrderInvoiceTaskCriteria
     */
    public function byOrderId(int $orderId): self
    {
        $this->where(['order_id' => $orderId]);
        return $this;
    }

    /**
     * @param int $state_id
     * @return OrderInvoiceTaskCriteria
     */
    public function byStateId(int $state_id): self
    {
        $this->where(['state_id' => $state_id]);
        return $this;
    }
}
