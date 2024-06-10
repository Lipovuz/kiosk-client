<?php
namespace App\Db\Criteria\Accounting;

use App\Db\Models\Accounting\Balance;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;

/**
 * Class BalanceCriteria
 */
class BalanceCriteria extends AbstractCriteria
{
    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return Balance::class;
    }

    /**
     * @param string $identity
     * @return BalanceCriteria
     */
    public function byKioskIdentity(string $identity): self
    {
        $this->where(['kiosk_identity' => $identity]);
        return $this;
    }

    public function currentType(): self
    {
        $this->where(['type_id' => BalanceTypeReference::CURRENT]);
        return $this;
    }

    public function commonType(): self
    {
        $this->where(['type_id' => BalanceTypeReference::COMMON]);
        return $this;
    }
}
