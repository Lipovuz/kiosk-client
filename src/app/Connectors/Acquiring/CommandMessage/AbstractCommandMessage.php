<?php
namespace App\Connectors\Acquiring\CommandMessage;

use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class AbstractCommandMessage
 *
 * @property-read string $command
 * @property-read string $status
 * @property-read string $error
 */
abstract class AbstractCommandMessage extends AbstractDto
{
    public const STATUS_SUCCESS = 'success';
    public const STATUS_ERROR = 'error';

    public const COMMAND_MAP = [
        'sale' => SaleCommand::class,
        'disable' => DisableCommand::class,
        'ping' => PingCommand::class,
        'upload' => UploadCommand::class,
    ];

    protected string $command = '';

    protected string $status = '';

    protected string $error = '';


    public function isSuccessResponse(): bool
    {
        return $this->status === self::STATUS_SUCCESS;
    }

    public function __set($name, $value): void
    {
        if ($name == 'command') {
            return;
        }
        parent::__set($name, $value);
    }

    /**
     * @param array $response
     * @return AbstractCommandMessage|null
     */
    public static function createFromResponse(array $response): AbstractDto
    {
        if (!isset($response['command'])) {
            throw new \InvalidArgumentException("Поле <command> отсутствует");
        }
        if (!isset(self::COMMAND_MAP[$response['command']])) {
            throw new \InvalidArgumentException("Команда <{$response['command']}> не определенна");
        }
        $dtoClass = self::COMMAND_MAP[$response['command']];
        return self::create(['dtoClass' => $dtoClass, 'data' => $response]);
    }
}
