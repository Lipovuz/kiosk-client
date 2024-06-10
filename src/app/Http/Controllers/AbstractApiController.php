<?php
namespace App\Http\Controllers;

use App\Services\KioskService;
use Illuminate\Routing\Controller;
use Lomobil\Common\DrIsland\Laravel\Exceptions\ApiException;

/**
 * Class AbstractApiController
 * Базовый класс контроллеров API
 */
class AbstractApiController extends Controller
{
    private KioskService $kiosk;

    public function __construct(KioskService $kiosk)
    {
        $this->kiosk = $kiosk;
    }

    protected function getKiosk(): KioskService
    {
        return $this->kiosk;
    }

    /**
     * Проверка что киоск установлен
     */
    protected function checkActiveKiosk(): void
    {
        if (!$this->getKiosk()->isExist()) {
            throw new ApiException('Kiosk not set', 204);
        }
    }
}
