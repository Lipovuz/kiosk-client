<?php
namespace App\Db\Criteria\Accounting;

use App\Db\Models\Accounting\BalanceTransaction;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;

class BalanceTransactionCriteria extends AbstractCriteria
{
    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return BalanceTransaction::class;
    }

    /**
     * @param string $identity
     * @return $this
     */
    public function byKioskIdentity(string $identity): self
    {
        $this->where(['kiosk_identity' => $identity]);
        return $this;
    }

    public function byCurrency(CurrencyReference $currency): self
    {
        $this->where(['currency_id' => $currency->value]);
        return $this;
    }
}
