<?php
namespace App\Services\Kiosk;

use App\Db\Managers\Kiosk\KioskManager;
use Lomobil\Common\DrIsland\Connectors\Core\CoreKioskConnector;
use Lomobil\Common\DrIsland\Dto\KioskDto;

/**
 * Class InitializeService
 * @package App\Services\Kiosk
 */
class InitializeService
{
    /** @var CoreKioskConnector */
    private CoreKioskConnector $coreKioskConnector;

    /** @var KioskManager */
    private KioskManager $kioskManager;

    /**
     * UpdateCoreKioskService constructor.
     * @param CoreKioskConnector $coreKioskConnector
     * @param KioskManager $kioskManager
     */
    public function __construct(CoreKioskConnector $coreKioskConnector, KioskManager $kioskManager)
    {
        $this->coreKioskConnector = $coreKioskConnector;
        $this->kioskManager = $kioskManager;
    }

    /**
     * @param KioskDto $kioskDto
     * @return bool
     */
    public function sendRequest(KioskDto $kioskDto): bool
    {
        $secure_key = $this->coreKioskConnector->connectionRequest($kioskDto);

        if ($secure_key) {
            return $this->kioskManager->createFromInitialize($kioskDto, $secure_key);
        }

        return false;
    }
}