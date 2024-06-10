<?php

include __DIR__ . '/src/Logger.php';
include __DIR__ . '/src/Timer.php';
include __DIR__ . '/src/Port/SerialPort.php';
include __DIR__ . '/src/Controller.php';
include __DIR__ . '/src/ProgressionTimer.php';
include __DIR__ . '/src/Server.php';

/**
 * Параметры:
 */
$serverPort = 9671; // http порт сервиса (интерфейс)
$deviceSerialPort = '/dev/serial/by-id/usb-Arduino_LLC_Arduino_Micro-if00';     // порт устройства
// для тестирования можно создать файл, и имитировать запись / чтение с порта
// $deviceSerialPort = '/dev/sd1328TestPort';
$motionTimeout = 5;         // таймаут отсутствия движения что бы вызвать событие "фиксация движения окончена"


/**
 * Сборка http сервера сервиса
 */
try {
    $serverHandler = new \Lomobil\DeviceController\Server($deviceSerialPort, $motionTimeout);
    $server = new \Swoole\WebSocket\Server("0.0.0.0", $serverPort, SWOOLE_BASE);
    $server->addProcess(
        new Swoole\Process([$serverHandler, 'controllerProcess'])
    );

    // коллекция WS подключений
    $wsConnections = new \Swoole\Table(100);
    $wsConnections->column('fd', \Swoole\Table::TYPE_INT);
    $wsConnections->column('sendTimerId', \Swoole\Table::TYPE_INT);
    $wsConnections->column('sendPongTimerId', \Swoole\Table::TYPE_INT);
    $wsConnections->create();


    /**
     * Http запрос
     */
    $server->on('request', function (Swoole\Http\Request $request, Swoole\Http\Response $response) use ($serverHandler) {
        $rout = $request->server['request_method'] . ':' . $request->server['request_uri'];
        $data = $request->rawContent() ? (array) json_decode($request->rawContent(), true) : [];
        $serverHandler->requestHandler($rout, $data, $response);
        $response->end();
    });

    /**
     * WebSocket
     */

    // Новое соединение
    $server->on('open', function(\Swoole\WebSocket\Server $server, Swoole\Http\Request $request)  use ($serverHandler, $wsConnections) {

        // отправка сообщений клиенту
        $sendTimerId = $server->tick(1000, function() use ($server, $request, $serverHandler) {
            if ($server->isEstablished($request->fd)) {
                // проверяем наличие сообщений клиенту
                foreach ($serverHandler->getWsMessages() as $message) {
                    $server->push($request->fd, json_encode($message), WEBSOCKET_OPCODE_TEXT);
                }
            } else {
                $server->disconnect($request->fd);
            }
        });

        // отправка PONG сообщений клиенту
        $sendPongTimerId = $server->tick(8000, function() use ($server, $request, $serverHandler) {
            if ($server->isEstablished($request->fd)) {
                $server->push($request->fd, json_encode(['now' => time()]), WEBSOCKET_OPCODE_PONG);
            } else {
                $server->disconnect($request->fd);
            }
        });

        // добавляем в коллекцию подключений
        $wsConnections->set($request->fd, [
            'sendTimerId' => $sendTimerId,
            'sendPongTimerId' => $sendPongTimerId,
            'fd' => $request->fd,
        ]);
    });

    // соединение закрыто
    $server->on('close', function(\Swoole\WebSocket\Server $server, int $fd) use ($wsConnections) {
        if ($wsConnections->exist($fd)) {
            $connections = $wsConnections->get($fd);
            // удаляем таймеры отправки
            swoole_timer_clear($connections['sendTimerId']);
            swoole_timer_clear($connections['sendPongTimerId']);
            // удаляем подключение
            $wsConnections->del($fd);
        }
    });

    // получено сообщение
    $server->on('message', function(\Swoole\WebSocket\Server $server, \Swoole\WebSocket\Frame $frame) use ($serverHandler) {
        $serverHandler->wsMessageHandler($frame);
    });

    // запуск сервера
    $server->start();


} catch (\Exception $exception) {
    echo
        date('i:H d-m-Y') . PHP_EOL .
        $exception->getMessage() . PHP_EOL .
        $exception->getFile() . ' : ' .
        $exception->getLine() . PHP_EOL . $exception->getTraceAsString();
}
