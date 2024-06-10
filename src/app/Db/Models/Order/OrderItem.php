<?php

namespace App\Db\Models\Order;

use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class OrderItem
 * @package App\Db\Models\Order
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property int $order_id
 * @property int $product_price_penny
 * @property int $product_id
 * @property int $product_count
 * @property int $brand_id
 * @property string $email
 * @property int $total_amount_penny
 * @property int $is_success
 * @property string $error
 * @property string $specific_details
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class OrderItem extends AbstractModel
{

    /**
     * @var string - Имя таблицы
     */
    protected $table = 'orders_items';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'kiosk_identity', 'order_id', 'product_price_penny', 'product_id', 'product_count',
        'brand_id', 'email', 'total_amount_penny', 'is_success', 'error', 'specific_details'
    ];

    protected $casts = [
        'specific_details' => 'array'
    ];

    /**
     * @return ProductReference|null
     */
    public function getProduct(): ?ProductReference
    {
        return $this->product_id ? new ProductReference($this->product_id) : null;
    }

    /**
     * @return OrderItemDto
     */
    public function getDto(): OrderItemDto
    {
        $dto = new OrderItemDto();
        $dto->id = $this->id;
        $dto->kioskIdentity = $this->kiosk_identity;
        $dto->orderId = $this->order_id;
        $dto->productPricePenny = $this->product_price_penny;
        $dto->productId = $this->product_id;
        $dto->productCount = $this->product_count;
        $dto->brandId = $this->brand_id;
        $dto->email = $this->email;
        $dto->totalAmountPenny = $this->total_amount_penny;
        $dto->isSuccess = $this->is_success;
        $dto->error = $this->error;
        $dto->specificDetails = $this->specific_details;

        return $dto;
    }

    /**
     * @param OrderItemDto $orderItemDto
     * @return OrderItem
     */
    public static function createFromDto(OrderItemDto $orderItemDto): OrderItem
    {
        $model = new OrderItem();
        $model->kiosk_identity = $orderItemDto->kioskIdentity;
        $model->order_id = $orderItemDto->orderId;
        $model->product_price_penny = $orderItemDto->productPricePenny;
        $model->product_id = $orderItemDto->productId;
        $model->product_count = $orderItemDto->productCount;
        $model->brand_id = $orderItemDto->brandId;
        $model->email = $orderItemDto->email;
        $model->total_amount_penny = $orderItemDto->totalAmountPenny;
        $model->is_success = $orderItemDto->isSuccess;
        $model->error = $orderItemDto->error;
        $model->specific_details = $orderItemDto->specificDetails;

        return $model;
    }
}
