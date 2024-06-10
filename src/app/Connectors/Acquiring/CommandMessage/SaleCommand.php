<?php
namespace App\Connectors\Acquiring\CommandMessage;

/**
 * Class SaleCommand
 *
 * @property int $amount
 * @property string $receipt
 *
 *
 * sale – продажа, требует целочисленного поля amount , которое содержит сумму
 *        транзакции в минимальных единицах валюты (копейки, центы и т.д.).
 * {"command":"sale", "amount":1000, "status":"success"}
 */
class SaleCommand extends AbstractCommandMessage
{
    /**
     * @var string
     */
    protected string $command = 'sale';

    /**
     * @var int
     */
    protected int $amount = 0;

    /**
     * @var string
     */
    protected string $receipt = '';

}
