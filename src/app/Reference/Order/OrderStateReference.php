<?php
namespace App\Reference\Order;

use Lomobil\Common\DrIsland\AbstractReference;

/**
 * Class OrderStateReference
 * Справочник состояний заказа
 *
 * @property-read bool $isComplete
 * @property-read bool $isSuccess
 */
class OrderStateReference extends AbstractReference
{
    public const NEW = 1;                   // новый заказ
    public const REALIZATION_PROCESS = 11;  // заказ выполняется (печать/отправка, и т.д.)
    public const COMPLETE_SUCCESS = 21;     // заказ успешно выполнен
    public const COMPLETE_ERROR = 22;       // заказ завершен с ошибками

    /**
     * @var array - коллекция статус (статический провайдер данных)
     */
    protected static array $collections = [
        self::NEW => [
            'title' => 'новый',
            'isComplete' => false,
            'isSuccess' => false,
        ],
        self::REALIZATION_PROCESS => [
            'title' => 'выполняется',
            'isComplete' => false,
            'isSuccess' => false,
        ],
        self::COMPLETE_SUCCESS => [
            'title' => 'успешно выполнен',
            'isComplete' => true,
            'isSuccess' => true,
        ],
        self::COMPLETE_ERROR => [
            'title' => 'завершен с ошибками',
            'isComplete' => true,
            'isSuccess' => false,
        ],
    ];

    /**
     * @var bool - заказ завершен
     */
    protected bool $isComplete;

    /**
     * @var bool - заказ успешно завершен
     */
    protected bool $isSuccess;

    protected static function getCollection(): array
    {
        return self::$collections;
    }

    protected static function filterDelete(int $key): bool
    {
        return true;
    }
}
