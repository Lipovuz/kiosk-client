<?php

namespace App\Connectors\FormationInvoice\Dto;

    use App\Connectors\FormationInvoice\FormationInvoiceConnector;
    use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class FormationInvoiceLineDto
 * @package App\Connectors\FormationCheck
 *
 * @property int $Qty
 * @property int $Price
 * @property int $PayAttribute
 * @property int $TaxId
 * @property string $Description
 */
class FormationInvoiceLineDto extends AbstractDto
{

    /**
     * Количество товара. Указывается в тысячных долях.
     * @var int
     */
    protected int $Qty = 0;

    /**
     * Цена указывается в копейках
     * @var int
     */
    protected int $Price = 0;

    /**
     * Код налога (4 - Без налога)
     * @var int
     */
    protected int $TaxId = FormationInvoiceConnector::TAX_ID_NO_TAX;

    /**
     * Наименование товарной позиции
     * @var string
     */
    protected string $Description = '';
}
