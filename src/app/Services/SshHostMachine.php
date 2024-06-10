<?php
namespace App\Services;

use App\Services\Printing\PrintService;
use Illuminate\Support\Facades\Log;

/**
 * Class SshHostMachine
 */
class SshHostMachine
{
    /**
     * @const - путь к ключу по умолчанию
     */
    public const DEFAULT_SSH_KEY_PATH = '/ssh/id_rsa';

    /**
     * @const - имя пользователя системы
     */
    public const DEFAULT_USER_NAME = 'lomobil';

    /**
     * @var string - путь к ключу
     */
    protected string $sshKeyPath;

    /**
     * @var string - пользователь
     */
    protected string $userName;


    /**
     * @param string $sshKeyPath
     * @param string $userName
     */
    public function __construct(string $sshKeyPath = self::DEFAULT_SSH_KEY_PATH, string $userName = self::DEFAULT_USER_NAME)
    {
        $this->sshKeyPath = $sshKeyPath;
        $this->userName = $userName;
    }

    /**
     * Выполнить команду на удаленном хосте через ssh
     * @param string $command
     * @param $resultCode
     * @return string|false
     */
    public function exec(string $command, &$resultCode)
    {
        $commandPattern = "ssh -i %s -o StrictHostKeyChecking=no $this->userName@%s bash << EOCMD\n%s\nEOCMD";
        $sshCommand = sprintf($commandPattern, $this->sshKeyPath, $this->getIpAddr(), $command);
        Log::channel(PrintService::LOG_CHANNEL)->info(
            "SSH команда: $sshCommand"
        );

        ob_start();
        passthru($sshCommand, $resultCode);
        $resultString = ob_get_contents();
        ob_end_clean();
        return $resultString;
    }

    /**
     * Получение IP шлюза сети докера
     * @return string|null
     */
    public function getIpAddr()
    {
        return '172.17.0.1';
        /*
        $gw = null;
        // Получите IP-адрес хоста Docker из таблицы маршрутизации
        $table = file("/proc/net/route");

        foreach ($table as $row) {
            //Разделить поля из таблицы маршрутизации
            $fields = preg_split("/[\t ]+/", trim($row));

            // Пропустите этот маршрут, если это не шлюз по умолчанию
            if ($fields[1] != "00000000") {
                continue;
            }
            //Преобразование шестнадцатеричного IP-адреса шлюза в точечную нотацию
            $gw_hex = $fields[2];
            $gw_rev = long2ip("0x$gw_hex");
            $gw = implode(".", array_reverse(explode(".", $gw_rev)));
            break;
        }
        return $gw;
        */
    }
}
