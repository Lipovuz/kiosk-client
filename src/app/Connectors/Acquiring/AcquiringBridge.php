<?php
namespace App\Connectors\Acquiring;

use App\Connectors\Acquiring\CommandMessage\AbstractCommandMessage;
use App\Connectors\Acquiring\CommandMessage\DisableCommand;
use App\Connectors\Acquiring\CommandMessage\PingCommand;
use App\Connectors\Acquiring\CommandMessage\SaleCommand;
use App\Connectors\Acquiring\CommandMessage\UploadCommand;
use App\Services\Balance\BalanceService;
use App\Services\KioskService;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\AbstractDto;
use Lomobil\Common\DrIsland\Reference\Accounting\TransactionSourceReference;

/**
 * Class AcquiringBridge
 * Сервис обработки команд из сервиса приема оплаты по карте (2can)
 */
class AcquiringBridge
{
    public const LOG_CHANNEL = 'acquiring';
    public const LOG_CHANNEL_ERROR = 'acquiring_error';

    private BalanceService $balanceService;
    private KioskService $kioskService;

    /**
     * AcquiringBridge constructor.
     * @param KioskService $kioskService
     * @param BalanceService $balanceService
     */
    public function __construct(KioskService $kioskService, BalanceService $balanceService)
    {
        $this->balanceService = $balanceService;
        $this->kioskService = $kioskService;
    }

    /**
     * @param string $bodyRaw
     */
    public function handleRequest(string $bodyRaw)
    {
        try {
            $dto = $this->getResponeDto($bodyRaw);
            $this->handleCommand($dto);
        } catch (\Exception $exception) {
            Log::channel(self::LOG_CHANNEL_ERROR)->error(
                $exception->getMessage(),
                ['exception' => $exception, 'bodyRaw' => $bodyRaw]
            );
        }
    }

    /**
     * @param string $bodyRaw
     * @return AbstractCommandMessage|AbstractDto
     * @throws \JsonException
     */
    protected function getResponeDto(string $bodyRaw): AbstractCommandMessage
    {
        $json  = json_decode($bodyRaw, true, 512, JSON_THROW_ON_ERROR);
        return AbstractCommandMessage::createFromResponse($json);
    }

    /**
     * @param AbstractCommandMessage $commandMessage
     */
    protected function handleCommand(AbstractCommandMessage $commandMessage)
    {
        switch (get_class($commandMessage)) {
            case SaleCommand::class:
                Log::channel(self::LOG_CHANNEL)->info('SaleCommand', ['commandMessage' => $commandMessage]);
                $this->saleHandler($commandMessage);
                break;
            case DisableCommand::class:
                Log::channel(self::LOG_CHANNEL)->info('DisableCommand', ['commandMessage' => $commandMessage]);
                // только логируем
                break;
            case PingCommand::class:
                // игнорируем
                break;
            case UploadCommand::class:
                Log::channel(self::LOG_CHANNEL)->info('UploadCommand', ['commandMessage' => $commandMessage]);
                // только логируем
                break;
        }
    }

    /**
     * @param SaleCommand $saleCommand
     */
    protected function saleHandler(SaleCommand $saleCommand): void
    {
        if (!$saleCommand->isSuccessResponse()) {
            return;
        }
        // зачисляем средства
        $this->balanceService->clientPayment(
            $saleCommand->amount,
            $this->kioskService->getDefaultCurrency()->value,
            TransactionSourceReference::KIOSK_POS_TERMINAL
        );
    }
}
