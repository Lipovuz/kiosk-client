<?php

namespace App\Db\Models\Accounting;

use App\Db\Models\Kiosk\Kiosk;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Dto\BalanceTransactionDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionReasonReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionSourceReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionTypeReference;
use Lomobil\Common\DrIsland\Reference\UserSourceReference;

/**
 * Class BalanceTransaction
 * @package App\Db\Models\Balance
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property int $type_id
 * @property int $reason_id
 * @property int $source_id
 * @property int $user_source
 * @property int $user_id
 * @property int $amount_penny
 * @property int $currency_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Kiosk $kiosk
 */
class BalanceTransaction extends AbstractModel
{

    /**
     * @var string - Имя таблицы
     */
    protected $table = 'balance_transactions';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [];

    /**
     * Отношение для киоска
     * @return HasOne
     */
    public function kiosk(): HasOne
    {
        return $this->hasOne(Kiosk::class, 'id', 'kiosk_identity');
    }

    /**
     * @return TransactionTypeReference|null
     */
    public function getType(): ?TransactionTypeReference
    {
        return $this->type_id ? new TransactionTypeReference($this->type_id) : null;
    }

    /**
     * @return TransactionReasonReference|null
     */
    public function getReason(): ?TransactionReasonReference
    {
        return $this->reason_id ? new TransactionReasonReference($this->reason_id) : null;
    }

    /**
     * @return TransactionSourceReference|null
     */
    public function getSource(): ?TransactionSourceReference
    {
        return $this->source_id ? new TransactionSourceReference($this->source_id) : null;
    }

    /**
     * @return UserSourceReference|null
     */
    public function getUserSource(): ?UserSourceReference
    {
        return $this->user_source ? new UserSourceReference($this->user_source) : null;
    }

    /**
     * @return CurrencyReference|null
     */
    public function getCurrency(): ?CurrencyReference
    {
        return $this->currency_id ? new CurrencyReference($this->currency_id) : null;
    }

    /**
     * @return BalanceTransactionDto
     */
    public function getDto(): BalanceTransactionDto
    {
        $dto = new BalanceTransactionDto();
        $dto->id = $this->id;
        $dto->kioskIdentity = $this->kiosk_identity;
        $dto->typeId = $this->type_id;
        $dto->reasonId = $this->reason_id;
        $dto->sourceId = $this->source_id;
        $dto->userId = $this->user_id;
        $dto->amountPenny = $this->amount_penny;
        $dto->currencyId = $this->currency_id;

        return $dto;
    }

    /**
     * @param BalanceTransactionDto $balanceTransactionDto
     * @return BalanceTransaction
     */
    public static function createFromDto(BalanceTransactionDto $balanceTransactionDto): BalanceTransaction
    {
        $model = new BalanceTransaction();
        $model->kiosk_identity = $balanceTransactionDto->kioskIdentity;
        $model->type_id = $balanceTransactionDto->typeId;
        $model->reason_id = $balanceTransactionDto->reasonId;
        $model->source_id = $balanceTransactionDto->sourceId;
        $model->user_id = $balanceTransactionDto->userId;
        $model->amount_penny = $balanceTransactionDto->amountPenny;
        $model->currency_id = $balanceTransactionDto->currencyId;

        return $model;
    }
}
