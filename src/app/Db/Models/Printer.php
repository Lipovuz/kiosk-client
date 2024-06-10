<?php

namespace App\Db\Models;

use Lomobil\Common\DrIsland\Dto\KioskDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\PrinterReference;

/**
 * Class PrinterModel
 *
 * Модель принтера киоска
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property int $model_id
 * @property bool $is_real_print
 *
 * @property string $cups_name
 * @property string $cups_media
 * @property int $cups_padding_left
 * @property int $cups_padding_right
 * @property int $cups_padding_top
 * @property int $cups_padding_bottom
 * @property bool $cups_laminate

 * @property int $calibrate_offset_x
 * @property int $calibrate_offset_y
 *
 * @property string $created_at
 * @property string $updated_at
 */
class Printer extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'printers';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'is_real_print', 'cups_name','cups_padding_left', 'cups_padding_right', 'cups_padding_top', 'cups_padding_bottom', 'cups_laminate', 'calibrate_offset_x', 'calibrate_offset_y'
    ];

    protected $casts = [
        'cups_laminate' => 'boolean',
        'is_real_print' => 'boolean',
    ];

    /**
     * Значения по умолчанию
     * @var array
     */
    protected $attributes = [
        'is_real_print' => false,
        'cups_padding_left' => 0,
        'cups_padding_right' => 0,
        'cups_padding_top' => 0,
        'cups_padding_bottom' => 0,
        'cups_laminate' => false,
        'calibrate_offset_x' => 0,
        'calibrate_offset_y' => 0,
    ];
    /**
     * @return PrinterReference|null
     */
    public function getPrinter(): ?PrinterReference
    {
        return $this->model_id ? new PrinterReference($this->model_id) : null;
    }

    public static function createDefaultRx1(KioskDto $kioskDto): Printer
    {
        $printer = new PrinterReference(PrinterReference::DNP_RX1);
        $model = new Printer();
        $model->kiosk_identity = $kioskDto->identity;
        $model->model_id = $printer->value;
        $model->cups_name = 'RX1';
        $model->cups_media = $printer->cupsDefaultMediaSizeOption;

        return $model;
    }
}
