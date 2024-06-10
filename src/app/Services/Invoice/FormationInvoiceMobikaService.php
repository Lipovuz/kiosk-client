<?php

namespace App\Services\Invoice;

use App\Connectors\FormationInvoice\Dto\FormationInvoiceMobikaConnector;
use App\Connectors\FormationInvoice\Dto\FormationInvoiceMobikaDto;
use App\Connectors\FormationInvoice\Dto\FormationInvoiceProductMobikaDto;
use App\Connectors\FormationInvoice\Dto\FormationInvoiceReceiptMobikaDto;
use App\Db\Criteria\Order\OrderInvoiceTaskCriteria;
use App\Db\Models\Order\Order;
use App\Db\Models\Order\OrderInvoiceTask;
use App\Dto\Invoice\OrderInvoiceDto;
use App\Reference\Invoice\InvoiceStateReference;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class FormationInvoiceService
 * @package App\Services\Check
 */
class FormationInvoiceMobikaService
{

    /* @const - наименование канала лога */
    public const LOG_ERROR_CHANNEL = 'formation_invoice_error';

    /* @var FormationInvoiceMobikaConnector */
    private FormationInvoiceMobikaConnector $formationInvoiceMobikaConnector;

    /**
     * FormationInvoiceConnector constructor.
     * @param FormationInvoiceMobikaConnector $formationInvoiceMobikaConnector
     */
    public function __construct(FormationInvoiceMobikaConnector $formationInvoiceMobikaConnector)
    {
        $this->formationInvoiceMobikaConnector = $formationInvoiceMobikaConnector;
    }

    /**
     * Создание записи для чека
     * @param int $orderId
     * @return OrderInvoiceTask|null
     */
    public function create(int $orderId): ?OrderInvoiceTask
    {
        $orderInvoiceDto = new OrderInvoiceDto();
        $orderInvoiceDto->orderId = $orderId;
        $orderInvoiceDto->stateId = InvoiceStateReference::NEW;

        try {
            $orderCheck = OrderInvoiceTask::createFromDto($orderInvoiceDto);
            $orderCheck->save();
            return $orderCheck;
        } catch (\Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error($exception->getMessage(), ['exception' => $exception]);
            return null;
        }
    }

    /**
     * Создание чека
     * @param OrderInvoiceTask $orderCheck
     * @return array|null
     * @throws \Exception
     */
    public function execute(OrderInvoiceTask $orderCheck): ?array
    {
        try {
            return $this->formationInvoice($orderCheck);
        } catch (\Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error($exception->getMessage(), ['exception' => $exception]);
            return null;
        }
    }

    /**
     * Создание чеков которые по которой либо причине не создались раньше
     * @return bool
     */
    public function holdInvoices(): bool
    {
        $orderChecks = (new OrderInvoiceTaskCriteria())->byStateId(InvoiceStateReference::COMPLETE_ERROR)->get();

        foreach ($orderChecks as $orderCheck) {
            $this->formationInvoice($orderCheck);
        }

        return true;
    }

    /**
     * @param Order $order
     * @return FormationInvoiceMobikaDto
     */
    protected function getFormationInvoiceDto(Order $order): FormationInvoiceMobikaDto
    {
        $ecash = 0;
        $formationInvoiceMobikaDto = new FormationInvoiceMobikaDto();
        $formationInvoiceReceiptMobikaDto = new FormationInvoiceReceiptMobikaDto();

        $formationInvoiceMobikaDto->orderId = $order->id;

        foreach ($order->items as $item) {
            $formationInvoiceProductMobikaDto = new FormationInvoiceProductMobikaDto();

            $formationInvoiceProductMobikaDto->quantity = $item->product_count * 1000;
            $formationInvoiceProductMobikaDto->price = $item->product_price_penny;
            $formationInvoiceProductMobikaDto->name = (new ProductReference($item->product_id))->checkDescription;
            $formationInvoiceProductMobikaDto->taxType = $this->formationInvoiceMobikaConnector->taxType;

            $ecash += $item->product_price_penny;
            $formationInvoiceReceiptMobikaDto->products = array_merge($formationInvoiceReceiptMobikaDto->products, [$formationInvoiceProductMobikaDto]);
        }
        $formationInvoiceReceiptMobikaDto->receiptType = $this->formationInvoiceMobikaConnector->receiptType;
        $formationInvoiceReceiptMobikaDto->taxSystem = $this->formationInvoiceMobikaConnector->taxSystem;
        $formationInvoiceReceiptMobikaDto->payment = ['ecash' => $ecash];

        $formationInvoiceMobikaDto->receipt = $formationInvoiceReceiptMobikaDto;

        return $formationInvoiceMobikaDto;
    }

    /**
     * @param OrderInvoiceTask $orderCheck
     * @return array|null
     */
    protected function formationInvoice(OrderInvoiceTask $orderCheck): ?array
    {
        $orderCheck->state_id = InvoiceStateReference::REALIZATION_PROCESS;
        $orderCheck->update();
        try {
            $result = $this->formationInvoiceMobikaConnector->formation($this->getFormationInvoiceDto($orderCheck->order));
            $orderCheck->state_id = InvoiceStateReference::COMPLETE_SUCCESS;
            $orderCheck->update();
            return $result;
        } catch (\Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error($exception->getMessage(), ['exception' => $exception]);
            $orderCheck->state_id = InvoiceStateReference::COMPLETE_ERROR;
            $orderCheck->error = mb_strimwidth($exception->getMessage(), 0 , 100);
            $orderCheck->update();

            return null;
        }
    }
}
