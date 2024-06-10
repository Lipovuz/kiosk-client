<?php

namespace Lomobil\DeviceController;

use Swoole\Atomic;
use Swoole\Http\Response;
use Swoole\WebSocket\Frame;

class Server
{
    protected const MESSAGE_EVENT_MOTION_START = ['event' => 'motionStart'];
    protected const MESSAGE_EVENT_MOTION_END = ['event' => 'motionEnd'];
    protected const MESSAGE_EVENT_CONTROLLER_CONNECT = ['event' => 'deviceConnect'];
    protected const MESSAGE_EVENT_CONTROLLER_DISCONNECT = ['event' => 'deviceDisconnect'];

    // регистры датчика движения
    protected Atomic $previousHasMotion;
    protected Atomic $currentHasMotion;
    protected Atomic $changeAtMotion;

    // регистры подключения Контроллера порта
    protected Atomic $previousHasController;
    protected Atomic $currentHasController;
    protected Atomic $changeAtController;

    protected Atomic $isLight1;
    protected Atomic $isLight2;
    protected Atomic $isLight3;
    protected Atomic $isChangeLight1;
    protected Atomic $isChangeLight2;
    protected Atomic $isChangeLight3;

    protected string $port;
    protected int $motionTimeout;

    public function __construct(string $port, int $motionTimeout)
    {
        $this->port = $port;
        $this->motionTimeout = $motionTimeout;

        // регистры датчика движения
        $this->previousHasMotion = new Atomic(0);   // состояние
        $this->currentHasMotion = new Atomic(0);    // флаг - состояние менялось
        $this->changeAtMotion = new Atomic(time());      // время последнего события

        // регистры подключения Контроллера порта
        $this->previousHasController = new Atomic(0);
        $this->currentHasController = new Atomic(0);
        $this->changeAtController = new Atomic(time());

        $this->isLight1 = new Atomic(0);
        $this->isLight2 = new Atomic(0);
        $this->isLight3 = new Atomic(0);
        $this->isChangeLight1 = new Atomic(0);
        $this->isChangeLight2 = new Atomic(0);
        $this->isChangeLight3 = new Atomic(0);
    }

    /**
     * Обработчик запросов (роутер + действия)
     * @param string $rout
     * @param array $bodyData
     * @param Response|null $response
     */
    public function requestHandler(string $rout, array $bodyData = [], ?Response $response = null): void
    {
        if ($response) {
            $response->header('Access-Control-Allow-Origin', '*');
            $response->header('Access-Control-Allow-Methods', 'POST, GET, DELETE');
        }

        // зажечь/погасить свет с номером 1- 3
        switch ($rout) {
            case 'POST:/light/1':
                $this->isChangeLight1->set(1);
                $this->isLight1->set(1);
                break;
            case 'POST:/light/2':
                $this->isChangeLight2->set(1);
                $this->isLight2->set(1);
                break;
            case 'POST:/light/3':
                $this->isChangeLight3->set(1);
                $this->isLight3->set(1);
                break;
            case 'DELETE:/light/1':
                $this->isChangeLight1->set(1);
                $this->isLight1->set(0);
                break;
            case 'DELETE:/light/2':
                $this->isChangeLight2->set(1);
                $this->isLight2->set(0);
                break;
            case 'DELETE:/light/3':
                $this->isChangeLight3->set(1);
                $this->isLight3->set(0);
                break;
        }
    }

    public function wsMessageHandler(Frame $frame): void
    {
        if ($frame->opcode != WEBSOCKET_OPCODE_TEXT) {
            return;
        }
        if (!$frame->data) {
            return;
        }
        $data = json_decode($frame->data, true);
        if (isset($data['command']) && is_string($data['command'])) {
            $bodyData = isset($data['data']) && is_array($data['data']) ? $data['data'] :  [];
            $this->requestHandler($data['command'], $bodyData);
        }
    }

    public function getWsMessages(): \Generator
    {
        // есть изменение состояния датчика
        if ($this->currentHasMotion->get() != $this->previousHasMotion->get()) {
            $this->previousHasMotion->set($this->currentHasMotion->get());
            // с момента события прошло менее $this->motionTimeout времени
            if (($this->changeAtMotion->get() + $this->motionTimeout) > time()) {
                // событие "свежее" отправляем
                yield $this->currentHasMotion->get() ? self::MESSAGE_EVENT_MOTION_START : self::MESSAGE_EVENT_MOTION_END;
            }
        }

        // есть изменение состояния подключение контроллера
        if ($this->currentHasController->get() != $this->previousHasController->get()) {
            $this->previousHasController->set($this->currentHasController->get());
            // с момента события прошло менее $this->motionTimeout времени
            if (($this->changeAtController->get() + $this->motionTimeout) > time()) {
                // событие "свежее" отправляем
                yield $this->currentHasController->get() ? self::MESSAGE_EVENT_CONTROLLER_CONNECT : self::MESSAGE_EVENT_CONTROLLER_DISCONNECT;
            }
        }
        return;
    }

    public function controllerProcess()
    {
        $currentHasMotion = $this->currentHasMotion;
        $previousHasMotion = $this->previousHasMotion;
        $changeAtMotion = $this->changeAtMotion;
        $logger = new Logger();
        $progressionTimer = new ProgressionTimer();
        $controller = null;
        do {
            sleep($progressionTimer->getTimeout());
            // создаем контроллер - устанавливаем соединение с портом
            try {
                $controller = new Controller($this->port, $logger, $this->motionTimeout);
                $controller->onStartMotion(function () use ($currentHasMotion, $previousHasMotion, $changeAtMotion) {
                    $previousHasMotion->set($currentHasMotion->get());
                    $currentHasMotion->set(1);
                    $changeAtMotion->set(time());

                });
                $controller->onEndMotion(function () use ($currentHasMotion, $previousHasMotion, $changeAtMotion) {
                    $previousHasMotion->set($currentHasMotion->get());
                    $currentHasMotion->set(0);
                    $changeAtMotion->set(time());
                });

                // сбрасываем таймер поскольку соединение установленно
                $progressionTimer->reset();

                $this->currentHasController->set(1);
                $this->previousHasController->set(0);
                $this->changeAtController->set(time());

                // запускаем петлю прослушивание порта
                while (true) {
                    // обрабатываем включение / выключение каналов подсветки
                    if ($this->isChangeLight1->get()) {
                        if ($this->isLight1->get()) {
                            $controller->onLightByNum(1);
                        } else {
                            $controller->offLightByNum(1);
                        }
                        $this->isChangeLight1->set(0);
                    }

                    if ($this->isChangeLight2->get()) {
                        if ($this->isLight2->get()) {
                            $controller->onLightByNum(2);
                        } else {
                            $controller->offLightByNum(2);
                        }
                        $this->isChangeLight2->set(0);
                    }

                    if ($this->isChangeLight3->get()) {
                        if ($this->isLight3->get()) {
                            $controller->onLightByNum(3);
                        } else {
                            $controller->offLightByNum(3);
                        }
                        $this->isChangeLight3->set(0);
                    }

                    $controller->loop();
                }
            } catch (\Exception $exception) {
                $this->currentHasController->set(0);
                $this->previousHasController->set(1);
                $this->changeAtController->set(time());

                // соединение не удалось либо оборвалось
                $logger->error($exception->getMessage());
                // вызываем деструктор контроллера
                $controller = null;
                // итерируем прогрессивный таймер
                $progressionTimer->step();
            }
        } while (!$controller);
    }
}
