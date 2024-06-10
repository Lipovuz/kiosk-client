<?php

namespace App\Connectors\FormationInvoice\Dto;

use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class FormationInvoiceProductMobikaDto
 * @package App\Connectors\FormationCheck
 *
 * @property string $name
 * @property int $quantity
 * @property int $price
 * @property string $taxType
 */
class FormationInvoiceProductMobikaDto extends AbstractDto
{

    /**
     * Наименование предмета расчёта.
     * @var string
     */
    protected string $name = '';

    /**
     * Количество предмета расчёта, в тысячных долях
     * @var int
     */
    protected int $quantity = 1000;

    /**
     * Цена единицы предмета расчёта, в копейках
     * @var int
     */
    protected int $price = 0;

    /**
     * Код налоговой ставки
     * @var string
     */
    protected string $taxType = '';
}
