<?php
namespace App\Connectors\FormationInvoice\Dto;

use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class FormationInvoiceMobikaDto
 * @package App\Connectors\FormationInvoice
 *
 * DTO тела запроса "Создание чеков с использованием сервиса «Mobika»"
 * https://docs.kkt.cloud/payments.html#tax-types
 *
 * @property string $orderId
 * @property string $groupId
 * @property FormationInvoiceReceiptMobikaDto[]|null $receipt
 */
class FormationInvoiceMobikaDto extends AbstractDto
{

    /**
     * Идентификатор запроса (уникальный для группы).
     * @var string
     */
    protected string $orderId = '';

    /**
     * Идентификатор запроса (уникальный для группы).
     * @var string
     */
    protected string $groupId = '';

    /**
     * Данные чека
     * @var FormationInvoiceReceiptMobikaDto|null
     */
    protected ?FormationInvoiceReceiptMobikaDto $receipt = null;
}
