<?php
namespace Lomobil\DeviceController\Port;

use Exception;
use Lomobil\DeviceController\Logger;

/**
 * Class SerialPort
 * @package Lomobil\DeviceController\Port
 */
class SerialPort
{
    /**
     * @see https://www.php.net/manual/ru/function.dio-tcsetattr.php
     * @const - скорость передачи для последовательного порта
     */
    public const BAUD_38400 = 38400;
    public const BAUD_19200 = 19200;
    public const BAUD_9600 = 9600;
    public const BAUD_4800 = 4800;
    public const BAUD_2400 = 2400;
    public const BAUD_1800 = 1800;

    /**
     * @see https://www.php.net/manual/ru/function.dio-tcsetattr.php
     * @const - биты данных
     */
    public const DATA_BITS_8 = 8;
    public const DATA_BITS_7 = 7;
    public const DATA_BITS_6 = 6;
    public const DATA_BITS_5 = 5;

    /**
     * @see https://www.php.net/manual/ru/function.dio-tcsetattr.php
     * @const - стоп биты
     */
    public const STOP_BIT_1 = 1;
    public const STOP_BIT_2 = 2;


    /**
     * @see https://www.php.net/manual/ru/function.dio-tcsetattr.php
     * @const - парность
     */
    public const PARITY_0 = 0;
    public const PARITY_1 = 1;
    public const PARITY_2 = 2;

    /**
     * Дескриптор файла порта
     * @var false|resource
     */
    public $fd = false;

    /**
     * Буфер порта
     * @var string
     */
    public string $buffer = '';

    /**
     * задержка между циклами чтения из порта в микросекундах
     * @var int
     */
    private int $loopTimeout;

    /**
     * @var callable[]
     */
    private array $commandHandlers = [];

    /**
     * обработчик выполняемый на каждой итерации
     * @var callable
     */
    private $afterLoopHandler;

    /**
     * @var Logger
     */
    private Logger $logger;

    /**
     * SerialPort constructor.
     * @param string $port
     * @param Logger $logger
     * @param callable[]
     * @param callable $afterLoopHandler
     * @param int $baud
     * @param int $dataBits
     * @param int $stopBit
     * @param int $parity
     * @throws Exception
     */
    public function __construct(
        string $port,
        Logger $logger,
        array $commandHandlers,
        $afterLoopHandler,
        int $baud = self::BAUD_9600,
        int $dataBits = self::DATA_BITS_8,
        int $stopBit = self::STOP_BIT_1,
        int $parity = self::PARITY_0
    ) {
        $this->logger = $logger;
        $this->commandHandlers = $commandHandlers;
        $this->afterLoopHandler = $afterLoopHandler;
        // определяем задержку между циклами чтения из порта в микросекундах
        // количество микросекунд  секунду делим на битрейт (количество битов в секунду)
        $this->loopTimeout = (int) floor(1000000 / $baud);

        // открываем файловой указатель на указанный порт
        $this->fd = dio_open($port, O_RDWR | O_NONBLOCK);
        if ($this->fd === false) {
            throw new Exception('can not open serial port');
        }
        // Устанавливает атрибуты терминала и скорость передачи данных для последовательного порта
        // - скорость передачи
        // - биты данных
        // - стоп бит
        // - парность
        $portOptions = [
            'baud' => $baud,
            'bits' => $dataBits,
            'stop'  => $stopBit,
            'parity' => $parity
        ];
        dio_tcsetattr($this->fd, $portOptions);
        $this->logger->info("Port [$port] open success:", $portOptions);
    }

    public function __destruct()
    {
        if ($this->fd) {
            dio_close($this->fd);
        }
    }

    /**
     * Запись в порт
     * @param string $data
     */
    public function write(string $data) {
        dio_write($this->fd, $data . "\n");
    }

    /**
     * Чтение из порта - внешний интерфейс
     */
    public function read(): void
    {
        $this->readBit();
        // задержка между чтениями, что-бы не "сожрало" проц.
        usleep($this->loopTimeout);
    }

    /**
     * Чтение из порта
     */
    private function readBit(): void
    {
        $str = dio_read($this->fd, 1);
        if ($str) {
            // добавляем в буфер
            $this->buffer .= $str;
            // разбор на строки
            $pcs = explode("\n", $this->buffer);
            // перезаписываем в буфер последнюю строку
            $this->buffer = (string) array_pop($pcs);
            $this->handler($pcs);
        }
    }

    private function handler(array $lines): void
    {
        // перебор строк из буфера
        foreach ($lines as $line) {
            foreach ($this->commandHandlers as $command => $handler) {
                if ($command === $line) {
                    call_user_func($handler);
                }
            }
        }
        // обработчик выполняемый на каждой итерации
        call_user_func($this->afterLoopHandler);
    }
}
