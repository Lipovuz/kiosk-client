<?php
namespace App\Http\Requests\Order;

use App\Connectors\CertainFacesSearch\NewCertainFacesSearchConnector;
use App\ImageSources\CertainFacesSearch\SourcesService;
use App\ProductExecutors\AbstractImageProduct;
use App\Services\FileSyncService\Service;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;
use Lomobil\Common\DrIsland\Dto\OrderDto;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class CreateForm
 *
 * @property string $client_email
 * @property integer $start_at
 * @property integer $queryNumber
 * @property string $terminal
 * @property array $items
 */
class CreateForm extends FormRequest
{
    /**
     * Есть ли поле client_email обязательным
     * @var bool
     */
    private bool $isClientEmailRequired = false;

    /**
     * Правила валидации
     * @return array
     */
    public function rules(): array
    {
        return [
            'items'                 => ['required', 'array'],
            'queryNumber'           => ['string', 'nullable'],
            'terminal'              => ['string'],
            'client_email'          => ['string', 'email', 'max:100', Rule::requiredIf($this->isClientEmailRequired)],
            'start_at'              => ['required', 'int', 'min:1'],
            'items.*.product_id'    => ['required', 'int', 'exists:App\Db\Models\Kiosk\KioskProduct,product_id' /*значение из таблицы БД*/],
            'items.*.product_count' => ['required', 'int',  'min:1', 'max:1000'],
            'items.*.brand_id'      => ['int',/* 'exists:App\Db\Models\Brand\Brand,id' значение из таблицы БД*/],
            'items.*.image_path'    => ['nullable', 'string'],
            'items.*.remote_path'   => ['required', 'string'], // Путь к оригинальному изображению
        ];
    }

    /**
     * @param NewCertainFacesSearchConnector $newCertainFacesSearchConnector
     * @param SourcesService $sourcesService
     * @return OrderDto
     * @throws \App\Services\FileSyncService\FileSyncException
     */
    public function getOrderDto(NewCertainFacesSearchConnector $newCertainFacesSearchConnector, SourcesService $sourcesService): OrderDto
    {
        $arrayItemDto = [];
        $orderDto = new OrderDto();
        $orderDto->clientEmail = $this->client_email;
        $orderDto->startAt = $this->start_at;

        foreach ($this->items as $item) {
            if (filter_var($item['remote_path'], FILTER_VALIDATE_URL) === false) {
                $originImagePath = $item['image_path'];
            } else {
                $originImagePath = $newCertainFacesSearchConnector->saveOriginFile($item['remote_path']);
            }

            $itemDto = new OrderItemDto();
            $itemDto->email = $orderDto->clientEmail ?: '';
            $itemDto->productId = $item['product_id'];
            $itemDto->productCount = $item['product_count'];
//            $itemDto->brandId = $item['brand_id'] ?: $sourcesService->defineBrandByPath($originImagePath);
            $itemDto->brandId = 1;
            $itemDto->specificDetails = [AbstractImageProduct::SPECIFIC_DETAILS_FIELD => public_path($originImagePath)];
            $arrayItemDto[] = $itemDto;
        }
        $orderDto->items = $arrayItemDto;

        return $orderDto;
    }

    /**
     * Пре-подготовка данных - фильтрация
     */
    protected function prepareForValidation()
    {
        $items = $this->get('items', []);
        if (!is_array($items)) {
            return;
        }

        foreach ($items as $item) {
            if (
                is_array($item) && isset($item['product_id']) &&
                $item['product_id'] == ProductReference::BRAND_SEND_EMAIL
            ) {
                $this->isClientEmailRequired = true;
            }
        }
    }

    /**
     * Подготовка урлов для скачивания изображений
     */
    private function getUriCollection(): array
    {
        $uriCollection = [];
        foreach ($this->items as $key => $item) {
            $uriCollection[$key] = $item['remote_path'];
        }

        return $uriCollection;
    }
}
