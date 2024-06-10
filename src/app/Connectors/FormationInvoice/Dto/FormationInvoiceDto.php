<?php
namespace App\Connectors\FormationInvoice\Dto;

use App\Connectors\FormationInvoice\FormationInvoiceConnector;
use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class FormationInvoiceDto
 * @package App\Connectors\FormationInvoice
 *
 * DTO тела запроса "Создание чеков с использованием конвертера «Checkonline»"
 * https://ofd.ru/razrabotchikam/ferma/checkonline
 *
 * @property string $RequestId
 * @property string $Device
 * @property int $DocumentType
 * @property FormationInvoiceLineDto[] $Lines
 * @property array $NonCache
 * @property int $TaxMode
 * @property string $PhoneOrEmail
 * @property int $Place
 */
class FormationInvoiceDto extends AbstractDto
{

    /**
     * Уникальный идентификатор запроса
     * @var string
     */
    protected string $RequestId = '';

    /**
     * Должен иметь значение auto
     * @var string
     */
    protected string $Device = FormationInvoiceConnector::DEVICE_AUTO;

    /**
     * Тип чека
     * @var int
     */
    protected int $DocumentType = FormationInvoiceConnector::DOCUMENT_TYPE_COMING;

    /**
     * Товарные позиции
     * @var FormationInvoiceLineDto[]
     */
    protected array $Lines = [];

    /**
     * Массив из 3-х целых чисел с суммами безналичных оплат 3-х различных типов.
     * Если разбиение не требуется, то можно передавать в виде: [ 1000 ].
     * Число указывается в копейках.
     * @var array
     */
    protected array $NonCache = [];

    /**
     * Система налогообложения
     * @var int
     */
    protected int $TaxMode = FormationInvoiceConnector::TAX_MODE_NO_TAX_SIMPLIFIED_TAXATION_SYSTEM;

    /**
     * Телефон или электронный адрес покупателя
     * @var string
     */
    protected string $PhoneOrEmail = '';

    /**
     * Наименование места установки кассы
     * @var string
     */
    protected string $Place = '';
}
