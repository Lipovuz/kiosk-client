<?php
namespace App\Db\Models\Order;

use App\Db\Models\Kiosk\Kiosk;
use App\Reference\Order\OrderStateReference;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Dto\OrderDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;

/**
 * Class Order
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property int $currency_id
 * @property int $amount_penny
 * @property int $state_id
 * @property string $client_email
 * @property string $error
 * @property int $start_at
 * @property int $end_at
 * @property int $synchronized_at
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|OrderItem[] $items
 * @property-read \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk $kiosk
 */
class Order extends AbstractModel
{
    public const TABLE_NAME = 'orders';

    /**
     * @var string - Имя таблицы
     */
    protected $table = self::TABLE_NAME;

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'kiosk_identity',
        'currency_id',
        'amount_penny',
        'state_id',
        'client_email',
        'error',
        'start_at',
        'end_at',
        'synchronized_at'
    ];

    /**
     * Значения по умолчанию
     * @var array
     */
    protected $attributes = [
        'state_id' => OrderStateReference::NEW,
        'amount_penny' => 0,
    ];

    /**
     * Элементы заказа
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    /**
     * @return HasOne
     */
    public function kiosk(): HasOne
    {
        return $this->hasOne(Kiosk::class, 'identity', 'kiosk_identity');
    }

    /**
     * @return OrderStateReference|null
     */
    public function getState(): ?OrderStateReference
    {
        return new OrderStateReference($this->state_id);
    }

    /**
     * @return CurrencyReference|null
     */
    public function getCurrency(): ?CurrencyReference
    {
        return $this->currency_id ? new CurrencyReference($this->currency_id) : null;
    }

    /**
     * @return OrderDto
     */
    public function getDto(): OrderDto
    {
        $dto = new OrderDto();
        $dto->id = $this->id;
        $dto->kioskIdentity = $this->kiosk_identity;
        $dto->currencyId = $this->currency_id;
        $dto->amountPenny = $this->amount_penny;
        $dto->isSuccess = $this->getState()->isSuccess;
        $dto->clientEmail = $this->client_email;
        $dto->error = $this->error;
        $dto->startAt = $this->start_at;
        $dto->endAt = $this->end_at;
        $items = [];
        foreach ($this->items as $orderItem) {
            $items[] = $orderItem->getDto();
        }
        $dto->items = $items;
        return $dto;
    }

    /**
     * @param OrderDto $orderDto
     * @return Order
     */
    public static function createFromDto(OrderDto $orderDto): Order
    {
        $model = new Order();
        $model->kiosk_identity = $orderDto->kioskIdentity;
        $model->currency_id = $orderDto->currencyId;
        $model->amount_penny = $orderDto->amountPenny;
        $model->client_email = $orderDto->clientEmail;
        $model->error = $orderDto->error;
        $model->start_at = $orderDto->startAt;
        $model->end_at = $orderDto->endAt;

        return $model;
    }
}
