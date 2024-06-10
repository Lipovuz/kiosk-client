<?php
namespace App\Services\Order;

use App\Connectors\CertainFacesSearch\CertainFacesSearchConnector;
use App\Db\Managers\Kiosk\OrderManager;
use App\Db\Models\Kiosk\Kiosk;
use App\Db\Models\Kiosk\KioskProduct;
use App\Db\Models\Order\Order;
use App\Services\KioskService;
use Lomobil\Common\DrIsland\Dto\OrderDto;

/**
 * Class OrderService
 * Сервис обработки заказа
 */
class OrderService
{
    /**
     * @var OrderManager
     */
    protected OrderManager $orderManager;

    /**
     * @var KioskService
     */
    protected KioskService $kioskService;
    /**
     * @var CertainFacesSearchConnector
     */
    private CertainFacesSearchConnector $certainFacesSearchConnector;

    /**
     * OrderService constructor.
     * @param OrderManager $orderManager
     * @param KioskService $kioskService
     * @param CertainFacesSearchConnector $certainFacesSearchConnector
     */
    public function __construct(OrderManager $orderManager, KioskService $kioskService, CertainFacesSearchConnector $certainFacesSearchConnector)
    {
        $this->orderManager = $orderManager;
        $this->kioskService = $kioskService;
        $this->certainFacesSearchConnector = $certainFacesSearchConnector;
    }

    /**
     * Создание заказа
     * @param OrderDto $orderDto
     * @return Order|null
     */
    public function create(OrderDto $orderDto): ?Order
    {
        $this->kioskService->exist();
        $orderDto->kioskIdentity = $this->kioskService->getIdentity();

        foreach ($orderDto->items as $orderItemDto) {
            /** @var KioskProduct $kioskProduct */
            $kioskProduct = $this->getKiosk()->products
                ->where('product_id', $orderItemDto->productId)
                ->first();

            $orderDto->currencyId = $kioskProduct->currency_id;
            $orderItemDto->kioskIdentity = $this->kioskService->getIdentity();
            $orderItemDto->productPricePenny = $kioskProduct->cost_penny;
            $orderItemDto->totalAmountPenny = $orderItemDto->productCount * $orderItemDto->productPricePenny;
            $orderDto->amountPenny += $orderItemDto->totalAmountPenny;
        }
        if ($this->orderManager->createFromDto($orderDto)) {
            return $this->orderManager->getLastModel();
        } else {
            return null;
        }
    }

    protected function getKiosk() : Kiosk
    {
        $this->kioskService->exist();
        return $this->kioskService->getModel();
    }
}