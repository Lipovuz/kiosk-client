<?php
namespace App\Dto\Invoice;

use App\Reference\Invoice\InvoiceStateReference;
use Lomobil\Common\DrIsland\AbstractDto;
use Lomobil\Common\DrIsland\Dto\OrderDto;

/**
 * Class OrderInvoiceDto
 * @package App\Dto\Check
 *
 * @property int $id
 * @property null|OrderDto $order
 * @property int $orderId
 * @property int $stateId
 * @property string $error
 */
class OrderInvoiceDto extends AbstractDto
{
    /**
     * @var int - ID в чека
     */
    protected int $id = 0;

    /**
     * @var int ID заказа
     */
    protected int $orderId = 0;

    /**
     * @var OrderDto|null - заказ
     */
    protected ?OrderDto $order = null;

    /**
     * Справочник CheckStateReference
     * @var int - ID состояния чека
     */
    protected int $stateId = 0;

    /**
     * @var string - некая ошибка
     */
    protected string $error = '';


    /**
     * @return InvoiceStateReference|null
     */
    public function getState(): ?InvoiceStateReference
    {
        return $this->stateId ? new InvoiceStateReference($this->stateId) : null;
    }
}