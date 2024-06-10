<?php
namespace Lomobil\DeviceController;

/**
 * Class ProgressionTimer
 *
 * Таймер с прогрессией задержек - позволяет получать увеличивающиеся размеры задержек
 * К примеру: нужно повторять попытки подключения, вместо регулярно периодических, делаем через: 2, 4, 8, 16 с.
 *
 * @package Lomobil\DeviceController
 */
class ProgressionTimer
{
    public const DEFAULT_PROGRESSION_STEP_NUMBER = 10;
    public const DEFAULT_START_TIMEOUT = 1;

    private int $progressionStepNumber;
    private int $startTimeout;


    private int $currentTimeout = self::DEFAULT_START_TIMEOUT;
    private int $currentProgressionStep = 0;

    public function __construct(int $progressionStepNumber = self::DEFAULT_PROGRESSION_STEP_NUMBER, int $startTimeout = self::DEFAULT_START_TIMEOUT)
    {
        $this->progressionStepNumber = $progressionStepNumber;
        $this->startTimeout = $startTimeout;

        $this->reset();
    }

    /**
     * Произвести шаг прогрессии
     */
    public function step(): void
    {
        if ($this->currentProgressionStep < $this->progressionStepNumber) {
            $this->currentProgressionStep++;
            $this->currentTimeout = $this->currentTimeout * 2;
        }
    }

    /**
     * Получить текущий таймаут
     * @return int
     */
    public function getTimeout(): int
    {
        return $this->currentTimeout;
    }

    /**
     * Сбросить начальное состояние
     */
    public function reset(): void
    {
        $this->currentTimeout = $this->startTimeout;
        $this->currentProgressionStep = 0;
    }
}
