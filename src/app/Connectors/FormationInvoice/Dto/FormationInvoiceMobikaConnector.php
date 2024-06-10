<?php
namespace App\Connectors\FormationInvoice\Dto;

use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Connectors\AbstractConnector;

/**
 * Конектор для работы с ИС «Mobika»
 * Class FormationInvoiceMobikaConnector
 * @package App\Connectors\FormationInvoice
 */
class FormationInvoiceMobikaConnector extends AbstractConnector
{

    /* @const - наименование канала лога (запрос/ответ)*/
    public const LOG_CHANNEL = 'formation_invoice';

    /** URI для создание чеков*/
    protected const URL_INVOICE_REGISTRATION = '/v1/registration';

    /**
     * Тип чека
     * @var int
     */
    public int $receiptType = 0;

    /**
     * Код системы налогообложения
     * @var int
     */
    public int $taxSystem = 0;

    /**
     * Код налоговой ставки
     * @var int
     */
    public int $taxType = 0;

    /**
     * Идентификатор группы касс
     * @var string
     */
    private string $groupId;

    /**
     * Ключ группы касс
     * @var string
     */
    private string $groupKey;

    /** Налоговые ставки */
    private array $taxSystemName = [
        1 => 'Ставка НДС 20%',
        2 => 'Ставка НДС 10%',
        3 => 'Ставка НДС расчётная 20/120',
        4 => 'Ставка НДС расчётная 10/110',
        5 => 'Ставка НДС 0%',
        6 => 'НДС не облагается',
    ];
    /**
     * FormationInvoiceMobikaConnector constructor.
     * @param string $host - хост сервиса
     * @param string $groupId - идентификатор группы касс
     * @param string $groupKey - ключ группы касс
     * @param int $receiptType - тип чека
     * @param int $taxSystem - код системы налогообложения
     * @param int $taxType - код налоговой ставки
     */
    public function __construct(
        string $host,
        string $groupId,
        string $groupKey,
        int $receiptType,
        int $taxSystem,
        int $taxType
    )
    {
        parent::__construct($host);

        $this->groupId = $groupId;
        $this->groupKey = $groupKey;
        $this->receiptType = $receiptType;
        $this->taxSystem = $taxSystem;
        $this->taxType = $taxType;
    }

    /**
     * Метод создания чека
     * @param FormationInvoiceMobikaDto $formationInvoiceMobikaDto
     * @return array|null
     * @throws \Exception
     */
    public function formation(FormationInvoiceMobikaDto $formationInvoiceMobikaDto): ?array
    {
        $curl = curl_init($this->host . self::URL_INVOICE_REGISTRATION);

        curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
        curl_setopt($curl, CURLOPT_CUSTOMREQUEST, 'POST');
        curl_setopt($curl, CURLOPT_USERPWD, "$this->groupId:$this->groupKey");
        curl_setopt(
            $curl,
            CURLOPT_POSTFIELDS,
            json_encode($this->defineRequestOnDto($formationInvoiceMobikaDto)));
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

        $output = curl_exec($curl);

        if ($output === false) {
            throw new \Exception("CURL Error: " . curl_error($curl));
        }

        $statusCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if ($statusCode != 200) {
            throw new \Exception("Удаленный сервис чеков ответил статусом $statusCode. Response:" . PHP_EOL . $output);
        }

        Log::channel(self::LOG_CHANNEL)->error(
            "Удаленный сервис чеков ответил статусом $statusCode",
            [
                'request' => json_encode($this->defineRequestOnDto($formationInvoiceMobikaDto)),
                'response' => $output
            ]
        );

        $response = json_decode($output, true);

        if ($response) {
            return $this->responseProcessing($response);
        }
        return null;
    }

    /**
     * Подготовка данных для отправки
     * @param FormationInvoiceMobikaDto $formationInvoiceMobikaDto
     * @return array
     */
    private function defineRequestOnDto(FormationInvoiceMobikaDto $formationInvoiceMobikaDto): array
    {
        $formationInvoiceMobikaDto->groupId = $this->groupId;
        $formationInvoiceMobikaArray = $formationInvoiceMobikaDto->toArray(['receipt']);
        $formationInvoiceReceiptMobikaArray = $formationInvoiceMobikaDto->receipt->toArray(['products']);
        $formationInvoiceMobikaArray['receipt'] = $formationInvoiceReceiptMobikaArray;
        foreach ($formationInvoiceMobikaDto->receipt->products as $product) {
            $formationInvoiceReceiptMobikaArray['products'][] = $product->toArray();
        }
        $formationInvoiceMobikaArray['receipt'] = $formationInvoiceReceiptMobikaArray;

        return $formationInvoiceMobikaArray;
    }

    /**
     * Подготовка данных для отправки на фронт
     * @param array $response
     * @return array
     */
    private function responseProcessing(array $response): array
    {
        if ($response['registrationInfo']) {
            $taxTypeName = $this->taxSystemName[$this->taxType];
            $response['registrationInfo']['taxTypeName'] = $taxTypeName;
        }

        return $response;
    }
}
