<?php

namespace Lomobil\KioskBundle\Service\Utils;


class HostMachine
{
	public function __construct()
	{
	}

    public static function getIpAddr()
    {
        $gw = null;
        // Получите IP-адрес хоста Docker из таблицы маршрутизации
        $table = file("/proc/net/route");
        print_r($table);
        echo PHP_EOL;
        echo '------------------------------';
        echo PHP_EOL;

        foreach ($table as $row) {
            echo PHP_EOL;
            echo '+++++++++++++++++++++++++++++++++++++';
            echo PHP_EOL;
            //Разделить поля из таблицы маршрутизации
            $fields = preg_split("/[\t ]+/", trim($row));

            // Пропустите этот маршрут, если это не шлюз по умолчанию
            if ($fields[1] != "00000000") {
                echo "--->>>--$fields[1]---";
                continue;
            }
            //Преобразование шестнадцатеричного IP-адреса шлюза в точечную нотацию
            $gw_hex = $fields[2];
            echo PHP_EOL;
            echo "-----$fields[2]---";
            $gw_rev = long2ip("0x$gw_hex");
            echo "-----$gw_hex---";
            echo long2ip("0x010013AC");
            $gw = implode(".", array_reverse(explode(".", $gw_rev)));
            //break;
        }
        return $gw;
	}

    public static function exec($command, &$output, &$returnVar)
    {
        $commandPattern = "ssh -i /var/www/.ssh/id_rsa -o StrictHostKeyChecking=no user@%s bash << EOCMD\n%s\nEOCMD";
        return exec(sprintf($commandPattern, self::getIpAddr(), $command), $output, $returnVar);
	}
}

echo PHP_EOL;
echo PHP_EOL;
echo HostMachine::getIpAddr();
echo PHP_EOL;
echo PHP_EOL;