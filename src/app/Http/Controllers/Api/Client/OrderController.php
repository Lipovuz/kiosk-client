<?php
namespace App\Http\Controllers\Api\Client;

use App\Connectors\CertainFacesSearch\NewCertainFacesSearchConnector;
use App\Db\Criteria\Order\OrderInvoiceTaskCriteria;
use App\Db\Models\Order\OrderInvoiceTask;
use App\Http\Controllers\AbstractApiController;
use App\Http\Requests\Order\CreateForm;
use App\ImageSources\CertainFacesSearch\SourcesService;
use App\Reference\Invoice\InvoiceStateReference;
use App\Services\FileSyncService\FileSyncException;
use App\Services\Invoice\FormationInvoiceMobikaService;
use App\Services\Order\OrderExecutorService;
use App\Services\Order\OrderService;
use Exception;
use Illuminate\Http\JsonResponse;

/**
 * Class OrderController
 */
class OrderController extends AbstractApiController
{

    /**
     * Создание заказа
     * @param CreateForm $createForm
     * @param OrderService $orderService
     * @param NewCertainFacesSearchConnector $newCertainFacesSearchConnector
     * @param SourcesService $sourcesService
     * @return JsonResponse
     * @throws FileSyncException
     */
    public function create( CreateForm $createForm, OrderService $orderService, NewCertainFacesSearchConnector $newCertainFacesSearchConnector, SourcesService $sourcesService): JsonResponse
    {
        if ($orderModel = $orderService->create($createForm->getOrderDto($newCertainFacesSearchConnector, $sourcesService))) {
            return new JsonResponse([
                'order_id' => $orderModel->id,
                'amount_penny' => $orderModel->amount_penny,
            ]);
        } else {
            return new JsonResponse(['Undefined error'], 500);
        }
    }

    /**
     * Выполнение заказа
     * @param int $orderId
     * @param OrderExecutorService $orderExecutorService
     * @param FormationInvoiceMobikaService $formationInvoiceService
     * @return JsonResponse
     * @throws Exception
     */
    public function execute(int $orderId, OrderExecutorService $orderExecutorService, FormationInvoiceMobikaService $formationInvoiceService): JsonResponse
    {
        // Выполнение заказа
        $orderExecutorService->execute($orderId);
        // Создание задания для чека
        $formationInvoiceService->create($orderId);
        return new JsonResponse(['Order successfully completed']);
    }

    /**
     * Создание чека
     * @param int $orderId
     * @param FormationInvoiceMobikaService $formationInvoiceService
     * @return JsonResponse
     * @throws Exception
     */
    public function invoice(int $orderId, FormationInvoiceMobikaService $formationInvoiceService): JsonResponse
    {
        /* @var $task OrderInvoiceTask */
        $task = (new OrderInvoiceTaskCriteria)
            ->byOrderId($orderId)
            ->byStateId(InvoiceStateReference::NEW)
            ->first();

        if ($task) {
            return new JsonResponse($formationInvoiceService->execute($task));
        } else {
            return new JsonResponse(['Undefined error'], 500);
        }
    }
}
