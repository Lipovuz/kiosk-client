<?php

namespace App\Console\Commands;

use App\Services\Invoice\FormationInvoiceMobikaService;
use Illuminate\Console\Command;

/**
 * Class HoldInvoices
 * @package App\Console\Commands
 */
class HoldInvoices extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'kiosk:hold_invoices';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Создать чеки которые по которой либо причине не создались раньше';

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
     */
    public function handle(FormationInvoiceMobikaService $formationCheckService)
    {
        $formationCheckService->holdInvoices();

        echo 'Чеки успешно создани!!!';
    }
}
