<?php
namespace App\Db\Models\Order;

use App\Dto\Invoice\OrderInvoiceDto;
use App\Reference\Invoice\InvoiceStateReference;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;

/**
 * Class OrderCheck
 * @package App\Db\Models\Order
 *
 * @property int $id
 * @property int $order_id
 * @property int $state_id
 * @property string $error
 * @property Carbon $create_at
 * @property Carbon $update_at
 *
 * @property-read null|Order $order
 */
class OrderInvoiceTask extends AbstractModel
{

    /* @var string - Имя таблицы */
    protected $table = 'orders_invoice_tasks';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'order_id', 'state_id', 'error'
    ];

    /**
     * @return InvoiceStateReference|null
     */
    public function getState(): ?InvoiceStateReference
    {
        return new InvoiceStateReference($this->state_id);
    }

    /**
     * Заказ
     * @return HasOne
     */
    public function order(): HasOne
    {
        return $this->hasOne(Order::class, 'id', 'order_id');
    }

    /**
     * @return OrderInvoiceDto
     */
    public function getDto(): OrderInvoiceDto
    {
        $dto = new OrderInvoiceDto();
        $dto->id = $this->id;
        $dto->order = $this->order->getDto();
        $dto->stateId = $this->state_id;
        $dto->error = $this->error;

        return $dto;
    }

    /**
     * @param OrderInvoiceDto $orderCheckDto
     * @return OrderInvoiceTask
     */
    public static function createFromDto(OrderInvoiceDto $orderCheckDto): OrderInvoiceTask
    {
        $model = new OrderInvoiceTask();
        $model->order_id = $orderCheckDto->orderId;
        $model->state_id = $orderCheckDto->stateId;
        $model->error = $orderCheckDto->error;

        return $model;
    }
}
