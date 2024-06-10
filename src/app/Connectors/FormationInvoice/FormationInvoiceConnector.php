<?php
namespace App\Connectors\FormationInvoice;

use App\Connectors\FormationInvoice\Dto\FormationInvoiceDto;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Connectors\AbstractConnector;

/**
 * Конектор для работы с ИС «Чеки и ККТ» (Ferma с Checkonline)
 * Class FormationInvoiceConnector
 * @package App\Connectors\FormationInvoice
 */
class FormationInvoiceConnector extends AbstractConnector
{

    /* @const - наименование канала лога (запрос/ответ)*/
    public const LOG_CHANNEL = 'formation_invoice';

    /* @const - Код налога, без налога */
    public const TAX_ID_NO_TAX = 4;

    /* @const - Тип налогообложения, упрощенная система налогообложения (доход) */
    public const TAX_MODE_NO_TAX_SIMPLIFIED_TAXATION_SYSTEM = 1;

    /* @const - Тип чека, Приход */
    public const DOCUMENT_TYPE_COMING = 0;

    /* @const - Должен иметь значение auto */
    public const DEVICE_AUTO = 'auto';

    /** URI для создание чеков с использованием конвертера «Checkonline» */
    protected const URI_CREATE_CHECK = '/kkt/cloud/sync/receipt';

    /* @var array */
    protected array $response;
    /**
     * Путь к сертефикату
     * @var string
     */
    private string $sslCertPath;

    /**
     * Путь к ключу сертификата
     * @var string
     */
    private string $sslKeyPath;

    /**
     * FormationInvoiceConnector constructor.
     * @param string $host - хост сервиса
     * @param string $sslCertPath - путь к сертефикату
     * @param string $sslKeyPath - путь к ключу сертефиката
     */
    public function __construct(string $host, string $sslCertPath, string $sslKeyPath)
    {
        parent::__construct($host);

        $this->sslCertPath = $sslCertPath;
        $this->sslKeyPath = $sslKeyPath;
    }

    /**
     * Метод создания чека
     * @param FormationInvoiceDto $formationInvoiceDto
     * @return array|null
     * @throws \Exception
     */
    public function formation(FormationInvoiceDto $formationInvoiceDto): ?array
    {
        $curl = curl_init($this->host . self::URI_CREATE_CHECK);

        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_SSLCERT, $this->sslCertPath);
        curl_setopt($curl, CURLOPT_SSLKEY, $this->sslKeyPath);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($this->defineRequestOnDto($formationInvoiceDto)));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $output = curl_exec($curl);

        if ($output === false) {
            throw new \Exception("CURL Error: " . curl_error($curl));
        }

        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if ($statusCode != 200) {
            throw new \Exception("Удаленный сервис чеков ответил статусом $statusCode. Response:" . PHP_EOL . $output);
        }

        Log::channel(self::LOG_CHANNEL)->error("Удаленный сервис чеков ответил статусом $statusCode", ['request' => json_encode($this->defineRequestOnDto($formationInvoiceDto)), 'response' => $output]);

        $response = json_decode($output, true);

        return $response ?: null;
    }

    /**
     * Подготовка данных для отправки
     * @param FormationInvoiceDto $formationInvoiceDto
     * @return array
     */
    private function defineRequestOnDto(FormationInvoiceDto $formationInvoiceDto): array
    {
        $result = $formationInvoiceDto->toArray(['Lines']);

        foreach ($formationInvoiceDto->Lines as $value) {
            $result['Lines'][] = $value->toArray();
        }

        return $result;
    }
}
