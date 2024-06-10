<?php
namespace App\Console\Commands;

use App\Services\Kiosk\UpdateKioskService;
use Illuminate\Console\Command;

/**
 * Синхронизация настроек киоска
 * Class SyncKioskSetting
 * @package App\Console\Commands
 */
class SyncKioskSetting extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kiosk:sync_kiosk_setting';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Команда синхронизации настроек киоска';

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
     * @param UpdateKioskService $service
     * @return int
     */
    public function handle(UpdateKioskService $service)
    {
        $service->updateKiosk();

        echo 'Киоск успешно синхронизирован!' . PHP_EOL;

    }
}
