<?php
namespace App\Services;

use App\Services\Printing\PrintService;
use Illuminate\Support\Facades\Log;

/**
 * Class ExecMachine
 */
class ExecMachine
{

    /**
     * Выполнить консольную команду
     * @param string $command
     * @param $resultCode
     * @return false|string
     */
    public function exec(string $command, &$resultCode)
    {
        Log::channel(PrintService::LOG_CHANNEL)->info(
            "Команда для печати: $command"
        );

        ob_start();
        passthru($command, $resultCode);
        $resultString = ob_get_contents();
        ob_end_clean();

        return $resultString;
    }
}
