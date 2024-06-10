<?php
namespace App\Db\Models\Accounting;

use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;

/**
 * Class Balance
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property integer $type_id
 * @property integer $currency_id
 * @property integer $amount_penny
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class Balance extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'balances';

    /**
     * @var BalanceTypeReference|null
     */
    private ?BalanceTypeReference $balanceTypeReference = null;

    /**
     * @var CurrencyReference|null
     */
    private ?CurrencyReference $currencyReference = null;

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'type', 'currency_id', 'amount_penny'
    ];

    /**
     * @param  string  $value
     * @return void
     */
    public function setTypeIdAttribute($value): void
    {
        $this->attributes['type_id'] = $value;
        $this->balanceTypeReference = null;
    }

    /**
     * @param  string  $value
     * @return void
     */
    public function setCurrencyIdAttribute($value): void
    {
        $this->attributes['currency_id'] = $value;
        $this->currencyReference = null;
    }

    /**
     * @return CurrencyReference|null
     */
    public function getCurrency(): ?CurrencyReference
    {
        if ($this->currency_id && !$this->currencyReference) {
            $this->currencyReference = new CurrencyReference($this->currency_id);
        }
        return $this->currencyReference;
    }

    /**
     * @return BalanceTypeReference|null
     */
    public function getType(): ?BalanceTypeReference
    {
        if ($this->type_id && !$this->balanceTypeReference) {
            $this->balanceTypeReference = new BalanceTypeReference($this->type_id);
        }
        return $this->balanceTypeReference;
    }
}
