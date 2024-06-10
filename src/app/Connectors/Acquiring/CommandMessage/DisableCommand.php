<?php
namespace App\Connectors\Acquiring\CommandMessage;

/**
 * Class DisableCommand
 *
 * disable – отмена ожидания карты после начала продажи, работает только в
 *           системах Asseco и Nayax, в остальных случаях ничего не делает. Киоск
 *           периодически отправляет ее в режиме ожидания.
 */
class DisableCommand extends AbstractCommandMessage
{
    /**
     * @var string
     */
    protected string $command = 'disable';
}
