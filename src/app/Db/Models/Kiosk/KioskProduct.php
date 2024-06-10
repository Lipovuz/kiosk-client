<?php
namespace App\Db\Models\Kiosk;

use Lomobil\Common\DrIsland\Dto\KioskProductDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class KioskProduct
 *
 * @property int $id
 * @property int $kiosk_id
 * @property int $product_id
 * @property float $cost - виртуальное поле
 * @property int $cost_penny
 * @property int $currency_id
 * @property string $created_at
 * @property string $updated_at
 *
 * @property-read \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk $kiosk
 */
class KioskProduct extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'kiosk_products';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'product_id', 'cost', 'cost_penny', 'currency_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk
     */
    public function kiosk()
    {
        return $this->belongsTo(Kiosk::class);
    }

    /**
     * Стоимость в денежных единицах (рублях, долларах, ...)
     * @param float $value
     */
    public function setCostAttribute(float $value)
    {
        $this->attributes['cost_penny'] = (int) round($value * 100);
    }

    /**
     * Стоимость в денежных единицах (рублях, долларах, ...)
     * @return float
     */
    public function getCostAttribute(): float
    {
        return round($this->cost_penny / 100, 2);
    }

    /**
     * @return ProductReference|null
     */
    public function getProduct(): ?ProductReference
    {
        return $this->product_id ? new ProductReference($this->product_id) : null;
    }

    /**
     * @return CurrencyReference|null
     */
    public function getCurrency(): ?CurrencyReference
    {
        return $this->currency_id ? new CurrencyReference($this->product_id) : null;
    }

    /**
     * @return KioskProductDto
     */
    public function getDto(): KioskProductDto
    {
        $dto = new KioskProductDto();
        $dto->kioskIdentity = $this->kiosk->identity;
        $dto->productId = $this->product_id;
        $dto->costPenny = $this->cost_penny;
        $dto->currencyId = $this->currency_id;
        return $dto;
    }

    /**
     * @param KioskProductDto $productDto
     * @return KioskProduct
     */
    public static function createFromDto(KioskProductDto $productDto): KioskProduct
    {
        $model = new KioskProduct();
        $model->product_id = $productDto->productId;
        $model->cost_penny = $productDto->costPenny;
        $model->currency_id = $productDto->currencyId;

        return $model;
    }
}
