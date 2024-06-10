<?php

namespace App\Console\Commands;

use App\Services\Order\OrderSyncService;
use Illuminate\Console\Command;

/**
 * Class SyncOrders
 * @package App\Console\Commands
 */
class SyncOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kiosk:sync_orders';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Команда синхронизации заказов с ядром';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @param OrderSyncService $orderSyncService
     * @return int
     */
    public function handle(OrderSyncService $orderSyncService)
    {
        $orderSyncService->synchronization();

        echo 'Успешно синхронизировано ' . $orderSyncService->getLastStatSuccessPacks() . 'пакетов.' . PHP_EOL;
        echo 'Ошибка синхронизации в ' . $orderSyncService->getLastStatErrorPacks() . 'пакетах' . PHP_EOL;
    }
}
