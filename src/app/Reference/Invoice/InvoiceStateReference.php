<?php

namespace App\Reference\Invoice;

use Lomobil\Common\DrIsland\AbstractReference;

/**
 * Class CheckStateReference
 * Справочник состояний чеков
 * @package App\Reference\Check
 */
class InvoiceStateReference extends AbstractReference
{

    /* @const - новый чек */
    public const NEW = 1;

    /* @const - выполняется */
    public const REALIZATION_PROCESS = 11;

    /* @const - чек создан успешно */
    public const COMPLETE_SUCCESS = 21;

    /* @const - ошибка создания */
    public const COMPLETE_ERROR = 22;

    /**
     * @var array - коллекция статус (статический провайдер данных)
     */
    protected static array $collections = [
        self::NEW              => [
            'title'     => 'новый',
            'isSuccess' => false,
        ],
        self::REALIZATION_PROCESS => [
            'title' => 'выполняется',
            'isComplete' => false,
            'isSuccess' => false,
        ],
        self::COMPLETE_SUCCESS => [
            'title'     => 'создан успешно',
            'isSuccess' => true,
        ],
        self::COMPLETE_ERROR   => [
            'title'     => 'ошибка создания',
            'isSuccess' => false,
        ],
    ];

    /**
     * @var bool - чек успешно создан
     */
    protected bool $isSuccess;

    /**
     * @return array|array[]
     */
    protected static function getCollection(): array
    {
        return self::$collections;
    }

    /**
     * @param int $key
     * @return bool
     */
    protected static function filterDelete(int $key): bool
    {
        return true;
    }
}