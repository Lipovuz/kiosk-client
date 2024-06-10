<?php

namespace App\Services\Invoice;

use App\Connectors\FormationInvoice\Dto\FormationInvoiceDto;
use App\Connectors\FormationInvoice\Dto\FormationInvoiceLineDto;
use App\Connectors\FormationInvoice\FormationInvoiceConnector;
use App\Db\Criteria\Order\OrderInvoiceTaskCriteria;
use App\Db\Models\Order\Order;
use App\Db\Models\Order\OrderInvoiceTask;
use App\Dto\Invoice\OrderInvoiceDto;
use App\Reference\Invoice\InvoiceStateReference;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class FormationInvoiceService
 * @package App\Services\Check
 */
class FormationInvoiceService
{

    /* @const - наименование канала лога */
    public const LOG_ERROR_CHANNEL = 'formation_invoice_error';

    /* @var FormationInvoiceConnector */
    private FormationInvoiceConnector $formationInvoiceConnector;

    /**
     * FormationInvoiceConnector constructor.
     * @param FormationInvoiceConnector $formationInvoiceConnector
     */
    public function __construct(FormationInvoiceConnector $formationInvoiceConnector)
    {
        $this->formationInvoiceConnector = $formationInvoiceConnector;
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
     *  Создание чеков которые по которой либо причине не создались раньше
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
     * @return FormationInvoiceDto
     */
    protected function getFormationInvoiceDto(Order $order): FormationInvoiceDto
    {
        $formationInvoiceDto = new FormationInvoiceDto();

        $formationInvoiceDto->RequestId = Str::uuid();

        foreach ($order->items as $item) {
            $formationInvoiceLineDto = new FormationInvoiceLineDto();

            $formationInvoiceLineDto->Qty = $item->product_count * 1000;
            $formationInvoiceLineDto->Price = $item->product_price_penny;
            $formationInvoiceLineDto->Description = (new ProductReference($item->product_id))->checkDescription;

            $formationInvoiceDto->Lines = array_merge($formationInvoiceDto->Lines, [$formationInvoiceLineDto]);
        }

        $formationInvoiceDto->NonCache = [$order->amount_penny];
        $formationInvoiceDto->PhoneOrEmail = $order->client_email;

        return $formationInvoiceDto;
    }

    /**
     * @param OrderInvoiceTask $orderCheck
     * @return string|null
     */
    protected function formationInvoice(OrderInvoiceTask $orderCheck): ?array
    {
        $orderCheck->state_id = InvoiceStateReference::REALIZATION_PROCESS;
        $orderCheck->update();
        try {
            $result = $this->formationInvoiceConnector->formation($this->getFormationInvoiceDto($orderCheck->order));
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
