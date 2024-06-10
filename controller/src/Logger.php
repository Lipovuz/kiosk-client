<?php
namespace Lomobil\DeviceController;

/**
 * реализует Psr\Log\LoggerInterface
 * Не указываем что-бы не тянуть внешние зависимости
 */
class Logger
{

    public function emergency($message, array $context = [])
    {
        $this->log('emergency', $message, $context);
    }

    public function alert($message, array $context = [])
    {
        $this->log('debug', $message, $context);
    }

    public function critical($message, array $context = [])
    {
        $this->log('critical', $message, $context);
    }

    public function error($message, array $context = [])
    {
        $this->log('error', $message, $context);
    }

    public function warning($message, array $context = [])
    {
        $this->log('warning', $message, $context);
    }

    public function notice($message, array $context = [])
    {
        $this->log('notice', $message, $context);
    }

    public function info($message, array $context = [])
    {
        $this->log('info', $message, $context);
    }

    public function debug($message, array $context = [])
    {
        $this->log('debug', $message, $context);
    }

    public function log($level, $message, array $context = [])
    {
        $this->toTty($level, $message, $context);
    }

    /**
     * Вывод  станд. поток вывода
     * @param $level
     * @param $message
     * @param array $context
     */
    private function toTty($level, $message, array $context = []): void
    {
        echo "[$level]["
            . date("Y-m-d H:i") . "]: $message"
            . PHP_EOL . ($context ? print_r($context, true) . PHP_EOL : '');
    }
}
