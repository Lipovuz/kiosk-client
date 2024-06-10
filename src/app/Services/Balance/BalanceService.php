<?php
namespace App\Services\Balance;

use App\Db\Criteria\Accounting\BalanceCriteria;
use App\Db\Criteria\Accounting\BalanceTransactionCriteria;
use App\Db\Models\Accounting\Balance;
use App\Db\Models\Accounting\BalanceTransaction;
use App\Services\KioskService;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionReasonReference;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionTypeReference;
use Lomobil\Common\DrIsland\Reference\UserSourceReference;

/**
 * Class BalanceService
 * Сервис баланса (состояние денежного счета) киоска
 */
class BalanceService
{
    use TransactionOperationTrait;

    /**
     * @var KioskService
     */
    private KioskService $kioskService;

    /**
     * Карта моделей балансов
     * [
     *      {тип баланса} => [
     *          {валюта} => new Balance()
     *      ],
     * ]
     * @var Balance[][]
     */
    private ?array $balanceModelsCache = null;

    public function __construct(KioskService $kioskService)
    {
        $this->kioskService = $kioskService;
    }

    /**
     * @param int $reasonId
     * @param int $userSourceId
     * @param int $amountPenny
     * @param int $currencyId
     * @param int $sourceId
     * @param int $userId
     * @return bool
     */
    public function setTransaction(
        int $reasonId, int $userSourceId, int $amountPenny,
        int $currencyId, int $sourceId, int $userId = 0
    ): bool
    {
        $reason = new TransactionReasonReference($reasonId);
        if (!in_array($sourceId, $reason->transactionSourcesKeys)) {
            throw new \LogicException(
                "Недопустимый источник транзакции: [$sourceId] для причины [$reasonId]. Допустимые источники <" .
                implode(',', $reason->transactionSourcesKeys) . ">"
            );
        }
        $userSource = new UserSourceReference($userSourceId);
        $currency = new CurrencyReference($currencyId);

        $model = new BalanceTransaction();
        $model->kiosk_identity = $this->kioskService->getIdentity();
        $model->type_id = $reason->transactionType->value;
        $model->reason_id = $reason->value;
        $model->source_id = $sourceId;
        $model->user_source = $userSource->value;
        $model->user_id = $userId;
        $model->amount_penny = $amountPenny;
        $model->currency_id = $currency->value;

        DB::beginTransaction();
        try {
            $model->save();
            $this->calcBalance();
        } catch (\Exception $exception) {
            DB::rollBack();
            Log::error($exception->getMessage(), ['exception' => $exception]);
            return false;
        }
        DB::commit();
        return true;
    }

    /**
     * @param int $balanceTypeId
     * @param int $currencyId
     * @return Balance
     */
    public function getBalanceModel(int $balanceTypeId, int $currencyId): Balance
    {
        if ($this->balanceModelsCache === null) {
            $this->loadBalanceModels();
        }
        if (!isset($this->balanceModelsCache[$balanceTypeId][$currencyId])) {
            $balance = new Balance();
            $balance->kiosk_identity = $this->kioskService->getIdentity();
            $balance->currency_id = $currencyId;
            $balance->type_id = $balanceTypeId;
            $balance->amount_penny = 0;
            $this->balanceModelsCache[$balanceTypeId][$currencyId] = $balance;
        }
        return $this->balanceModelsCache[$balanceTypeId][$currencyId];
    }


    /**
     * Пересчет балансов
     * @throws \Exception
     */
    protected function calcBalance(): void
    {
        $transactions = (new BalanceTransactionCriteria())
            ->byKioskIdentity($this->kioskService->getIdentity())
            ->get(['type_id', 'reason_id', 'currency_id', 'amount_penny'])
            ->toArray();

        /* @var TransactionTypeReference[] $transactionTypes */
        $transactionTypes = TransactionTypeReference::getReferenceCollection();
        /* @var BalanceTypeReference[] $balanceTypes */
        $balanceTypes = BalanceTypeReference::getReferenceCollection();

        $calcBalances = [];

        foreach ($transactions as $transaction) {
            foreach ($balanceTypes as $balanceType) {
                if ($balanceType->inReason($transaction['reason_id'])) {
                    if (!isset($calcBalances[$balanceType->value][$transaction['currency_id']])) {
                        $calcBalances[$balanceType->value][$transaction['currency_id']] = 0;
                    }
                    $calcBalances[$balanceType->value][$transaction['currency_id']] +=
                        $transaction['amount_penny'] * $transactionTypes[$transaction['type_id']]->operationSign;
                }
            }
        }
        /* @var Balance $balanceModel */
        foreach ($calcBalances as $balanceTypeId => $balances) {
            foreach ($balances as $currencyId => $balance) {
                $balanceModel = $this->getBalanceModel(
                    $balanceTypeId,
                    $currencyId
                );
                $balanceModel->amount_penny = $balance;
            }
        }
        $this->saveBalance();
    }

    /**
     * Сохраняем балансы
     * @throws \Exception
     */
    protected function saveBalance(): void
    {
        DB::beginTransaction();
        try {
            /* @var Balance $balanceModel */
            foreach ($this->balanceModelsCache as $balanceTypeId => $balanceModels) {
                foreach ($balanceModels as $currencyId => $balanceModel) {
                    $balanceModel->save();
                }
            }
        } catch (\Exception $exception) {
            DB::rollBack();
            throw $exception;
        }
        DB::commit();
    }

    /**
     * Загрузка карты балансов киоска
     */
    protected function loadBalanceModels(): void
    {
        $this->balanceModelsCache = [];
        $models = (new BalanceCriteria())
            ->byKioskIdentity($this->kioskService->getIdentity())
            ->get();
        /* @var Balance $model */
        foreach ($models as $model) {
            $this->balanceModelsCache[$model->type_id][$model->currency_id] = $model;
        }
    }
}
