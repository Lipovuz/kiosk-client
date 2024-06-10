<?php
namespace Lomobil\DeviceController;

use Lomobil\DeviceController\Port\SerialPort;

/**
 * Class Controller
 * @package Lomobil\DeviceController
 */
class Controller
{
    private Logger $logger;

    private SerialPort $serialPort;

    private Timer $motionTimer;

    /**
     * @var null|\Closure
     */
    private ?\Closure $onStartMotionClosure = null;

    /**
     * @var null|callable
     */
    private ?\Closure $onEndMotionClosure = null;

    public function __construct(string $port, Logger $logger, int $motionTimeout)
    {
        $this->logger = $logger;
        // таймер датчика движения
        $this->motionTimer = new Timer($motionTimeout);

        // обработчики команд контроллера
        $commandHandlers = [
            'ar_motion' => [$this, 'arMotionHandler'],
            'ar_light ok' => [$this, 'arLightOkHandler'],
        ];
        $this->serialPort = new SerialPort($port, $this->logger, $commandHandlers, [$this, 'afterLoopHandler']);


        // начальный сброс
        $this->offLightByNum(1);
        $this->offLightByNum(2);
        $this->offLightByNum(3);
    }

    public function onStartMotion(\Closure $onStartMotionClosure)
    {
        $this->onStartMotionClosure = $onStartMotionClosure;
    }

    public function onEndMotion(\Closure $onEndMotionClosure)
    {
        $this->onEndMotionClosure = $onEndMotionClosure;
    }

    public function loop(): void
    {
        $this->serialPort->read();
    }


    public function arMotionHandler(): void
    {
        // если таймер НЕ запущен - запускаем
        if (!$this->motionTimer->isRunning()) {
            $this->logger->info('motion detect');
            if ($this->onStartMotionClosure) {
                $this->onStartMotionClosure->call($this);
            }
        }
        // перезапускаем таймер
        $this->motionTimer->start();
    }

    public function arLightOkHandler(): void
    {
        // ничего не делаем, контроллер  сообщает что канал  подсветки сработал
    }

    public function afterLoopHandler()
    {
        // таймер отсутствия движения истек - вызываем событие отсутствие движения
        if ($this->motionTimer->done()) {
            $this->logger->info('motion detect stop');
            if ($this->onEndMotionClosure) {
                $this->onEndMotionClosure->call($this);
            }
        }
    }

    /**
     * Включить канал подсветки с номером $lightNum (1, 2, 3)
     * @param int $lightNum
     */
    public function onLightByNum(int $lightNum): void
    {
        $this->logger->info("light [$lightNum] ON");
        $this->serialPort->write("ar_light $lightNum 1");
    }

    /**
     * Выключить канал подсветки с номером $lightNum (1, 2, 3)
     * @param int $lightNum
     */
    public function offLightByNum(int $lightNum): void
    {
        $this->logger->info("light [$lightNum] OFF");
        $this->serialPort->write("ar_light $lightNum 0");
    }
}
