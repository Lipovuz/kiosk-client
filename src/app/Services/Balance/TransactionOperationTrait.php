<?php
namespace App\Services\Balance;

use Lomobil\Common\DrIsland\Reference\Accounting\TransactionReasonReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionSourceReference;
use Lomobil\Common\DrIsland\Reference\UserSourceReference;

/**
 * Trait TransactionOperationTrait
 * Трейт транзакций в разрезе Причин
 *
 * @see \Lomobil\Common\DrIsland\Reference\Accounting\TransactionReasonReference
 */
trait TransactionOperationTrait
{
    abstract public function setTransaction(
        int $reasonId, int $userSourceId, int $amountPenny,
        int $currencyId, int $sourceId, int $userId = 0
    ): bool;

    /**
     * Оплата клиентом
     * @param int $amountPenny
     * @param int $currencyId
     * @param int $sourceId
     * @return bool
     */
    public function clientPayment(int $amountPenny, int $currencyId, int $sourceId): bool
    {
        return $this->setTransaction(
            TransactionReasonReference::CLIENT_PAYMENT,
            UserSourceReference::KIOSK_CLIENT,
            $amountPenny,
            $currencyId,
            $sourceId
        );
    }

    /**
     * Списание стоимости заказа
     * @param int $amountPenny
     * @param int $currencyId
     * @return bool
     */
    public function botCharge(int $amountPenny, int $currencyId): bool
    {
        return $this->setTransaction(
            TransactionReasonReference::BOT_CHARGE,
            UserSourceReference::KIOSK_BOT,
            $amountPenny,
            $currencyId,
            TransactionSourceReference::KIOSK_BOT
        );
    }

    /**
     * Сброс "Текущего" баланса
     * @param int $amountPenny
     * @param int $currencyId
     * @return bool
     */
    public function botReset(int $amountPenny, int $currencyId): bool
    {
        return $this->setTransaction(
            TransactionReasonReference::BOT_RESET,
            UserSourceReference::KIOSK_BOT,
            $amountPenny,
            $currencyId,
            TransactionSourceReference::KIOSK_BOT
        );
    }
}
