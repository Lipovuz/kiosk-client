<?php
namespace Lomobil\DeviceController;

/**
 * Class Timer
 * @package Lomobil\DeviceController
 */
class Timer
{
    /**
     * @var int
     */
    private int $startedAt = 0;

    /**
     * @var int
     */
    private int $intervalAt = 0;

    /**
     * @var bool
     */
    private bool $isRunning = false;

    public function __construct(int $intervalAt)
    {
        $this->intervalAt = $intervalAt;
    }

    public function start(): void
    {
        $this->startedAt = time();
        $this->isRunning = true;
    }

    public function done(): bool
    {
        if (!$this->isRunning()) {
            return false;
        }

        if ($this->getExecutionTime() < $this->intervalAt) {
            return false;
        }

        $this->isRunning = false;
        return true;
    }

    public function isRunning(): bool
    {
        return $this->isRunning;
    }

    public function getExecutionTime(): ?int
    {
        if ($this->isRunning()) {
            return time() - $this->startedAt;
        }
        return null;
    }
}
