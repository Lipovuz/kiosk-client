<?php

namespace App\Connectors\FormationInvoice\Dto;

use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class FormationInvoiceReceiptMobikaDto
 * @package App\Connectors\FormationCheck
 *
 * @property int $receiptType
 * @property int $taxSystem
 * @property array $payment
 * @property FormationInvoiceProductMobikaDto[] $products
 * @property string $customerContact
 */
class FormationInvoiceReceiptMobikaDto extends AbstractDto
{

    /**
     * Тип чека.
     * @var int
     */
    protected int $receiptType = 0;

    /**
     * Код системы налогообложения
     * @var int
     */
    protected int $taxSystem = 0;

    /**
     * Данные о платежах
     * @var array
     */
    protected array $payment = ['ecash' => 0];

    /**
     * Массив предметов расчета
     * @var FormationInvoiceProductMobikaDto[]
     */
    protected array $products = [];

    /**
     * Номер телефона или адрес электронной почты покупателя. Телефон передаётся в формате +XXXXXXXXXXX
     * @var string
     */
    protected string $customerContact = '';
}
