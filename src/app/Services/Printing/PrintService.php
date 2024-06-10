<?php
namespace App\Services\Printing;

use App\Db\Criteria\PrinterCriteria;
use App\Db\Models\Printer;
use App\Services\ExecMachine;
use App\Services\KioskService;
use App\Services\SshHostMachine;
use Illuminate\Support\Facades\Log;
use Intervention\Image\Image;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class PrintService
 * Основной сервис печати
 */
class PrintService
{
    public const LOG_CHANNEL = 'print';
    public const LOG_ERROR_CHANNEL = 'print_error';

    /**
     * @var KioskService
     */
    protected KioskService $kioskService;

    /**
     * @var SshHostMachine
     */
    protected SshHostMachine $sshHostMachine;
    /**
     * @var ExecMachine
     */
    protected ExecMachine $execMachine;

    /**
     * @var string
     */
    protected string $localStoragePath;

    /**
     * @var string
     */
    protected string $realStoragePath;

    /**
     * Кеш моделей принтеров
     * @var Printer[]
     */
    protected array $printerModels = [];

    /**
     * @param KioskService $kioskService
     * @param SshHostMachine $sshHostMachine
     * @param string $localStoragePath
     * @param string $realStoragePath
     * @param ExecMachine $execMachine
     */
    public function __construct(KioskService $kioskService, SshHostMachine $sshHostMachine, ExecMachine $execMachine, string $localStoragePath, string $realStoragePath)
    {
        $this->kioskService = $kioskService;
        $this->sshHostMachine = $sshHostMachine;
        $this->execMachine = $execMachine;
        $this->localStoragePath = $localStoragePath;
        $this->realStoragePath = $realStoragePath;
        if (!file_exists($localStoragePath) || !is_writable($localStoragePath)) {
            throw new \InvalidArgumentException("Хранилище файлов для печати не доступно <$localStoragePath>");
        }
    }

    /**
     * Предподговка изображения
     * - сохраняем файл в папку печати
     * @param Image $image
     * @return string|null
     */
    public function prepareImage(Image $image): ?string
    {
        $this->kioskService->exist(); // нет киоска - сервис недоступен
        try {
            $fileName = date('Y-m-d_H_i') . md5(time()) . '.png';
            $path = $this->localStoragePath . DIRECTORY_SEPARATOR . $fileName;
            $image->save($path);
        } catch (\Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error(
                "Ошибка сохранение подготовленного изображения: {$exception->getMessage()}",
                ['exception' => $exception]
            );
            return null;
        }
        return $path;
    }

    /**
     * Получаем реальный путь к файлу в ОС из пути внутри контейнера
     * @param string $localPath
     * @return string
     */
    public function getRealPathByLocal(string $localPath): string
    {
        return str_replace($this->localStoragePath, $this->realStoragePath, $localPath);
    }

    /**
     * Отправка на печать файла (изображения)
     * @param string $filePath
     * @param OrderItemDto $orderItemDto
     * @return int|null
     */
    public function printFile(string $filePath, OrderItemDto $orderItemDto): ?int
    {
        $printer = $this->getPrinter($orderItemDto->getProduct());
        $command = (new CupsCommand())->printCommand($printer, $filePath);

        $resultCode = null;

        if ($printer->is_real_print) {
            $resultStr = $this->execMachine->exec($command, $resultCode);
        } else {
            // включена имитация печати,
            // вместо реального выполнения, возвращаем предполагаемую строку возврата
            $resultStr = 'request id is printer-34 (1 file(s))';
        }

        $jobId = null;  // идентификатор задания печати CUPS
        if ($resultStr == "lp: The printer or class does not exist.") {
            Log::channel(self::LOG_ERROR_CHANNEL)->error(
                "Принтер не найден",
                ['resultStr' => $resultStr, 'command' => $command]
            );
            return null;
        }
        if (preg_match("/[\w\s]+\\-([0-9]+)/", $resultStr, $matches)) {
            $jobId = (int) $matches[1];
        }
        if (!$jobId || ($jobId < 1))  {
            Log::channel(self::LOG_ERROR_CHANNEL)->error(
                "Ошибка печати",
                ['resultStr' => $resultStr, 'resultCode' => $resultCode, 'command' => $command]
            );
            return null;
        }
        // успех
        Log::channel(self::LOG_CHANNEL)->info(
            "Печать: $command",
            ['resultStr' => $resultStr]
        );
        return $jobId;
    }

    /**
     * Получаем принтер для продукта
     * @param ProductReference|null $productReference
     * @return Printer
     */
    public function getPrinter(?ProductReference $productReference = null): Printer
    {
        $this->kioskService->exist(); // нет киоска - сервис недоступен

        $productId = $productReference ? $productReference->value : 0;
        if (isset($this->printerModels[$productId])) {
            return $this->printerModels[$productId];
        }

        $printer = (new PrinterCriteria())->byKioskIdentity($this->kioskService->getIdentity());
        if ($productReference) {
            $printer->byProduct($productReference);
        }
        $printer = $printer->first();

        // если нет - создаем
        if (!$printer) {
            $printer = Printer::createDefaultRx1($this->kioskService->getDto());
            $printer->save();
        }
        $this->printerModels[$productId] = $printer;
        return $printer;
    }
}
