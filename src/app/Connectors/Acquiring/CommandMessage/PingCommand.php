<?php
namespace App\Connectors\Acquiring\CommandMessage;

/**
 * Class PingCommand
 *
 * ping – ничего не делает, сделана для проверки доступности сервиса.
 *
 */
class PingCommand extends AbstractCommandMessage
{
    /**
     * @var string
     */
    protected string $command = 'ping';
}
