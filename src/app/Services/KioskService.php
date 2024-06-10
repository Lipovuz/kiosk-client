<?php
namespace App\Services;

use App\Db\Criteria\Kiosk\FileKioskCriteria;
use App\Db\Criteria\Kiosk\KioskCriteria;
use App\Db\Models\Kiosk\Kiosk;
use App\Services\Balance\BalanceService;
use Lomobil\Common\DrIsland\Dto\KioskDto;
use Lomobil\Common\DrIsland\Reference\Accounting\BalanceTypeReference;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\ImageSourceReference;
use Lomobil\Common\DrIsland\Reference\KioskSettingReference;
use Lomobil\Common\DrIsland\Reference\KioskViewSettingReference;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class KioskService
 * Сервис предоставляет информацию по текущему киоску
 * - только чтение
 */
class KioskService
{

    /* @var BalanceService|null */
    private ?BalanceService $balanceService = null;

    /* @var null|KioskDto */
    protected ?KioskDto $kioskDto = null;

    /* @var Kiosk|null */
    protected ?Kiosk $kioskModel = null;

    /* @var bool */
    protected ?bool $isExist = null;

    /* @var int */
    private int $cameraRotate;

    /* @var string */
    private string $mail;

    /**
     * KioskService constructor.
     * @param int $cameraRotate
     * @param string $mail
     */
    public function __construct(int $cameraRotate, string $mail)
    {
        $this->cameraRotate = $cameraRotate;
        $this->mail = $mail;
    }

    /**
     * Проверка  - киоск установлен
     *
     * @return bool
     */
    public function isExist(): bool
    {
        $this->initialize();
        return $this->isExist;
    }

    /**
     * Проверка  - киоск установлен
     */
    public function exist(): void
    {
        if (!$this->isExist()) {
            throw new \LogicException("Kiosk not set");
        }
    }

    /**
     * @return ?KioskDto
     */
    public function getDto(): ?KioskDto
    {
        $this->initialize();
        return $this->kioskDto;
    }

    /**
     * @return string
     */
    public function getSecureKey(): string
    {
        return $this->getModel() ? $this->getModel()->secure_key : '';
    }

    /**
     * @return string
     */
    public function getIdentity(): string
    {
        return $this->getModel() ? $this->getModel()->identity : '';
    }

    /**
     * @return int
     */
    public function getDefaultBrandId(): int
    {
        return (int) ($this->getModel() ? $this->getModel()->default_brand_id : 0);
    }

    /**
     * Проверка доступности источника изображений
     *
     * @param int $imageSourceId
     * @return bool
     */
    public function hasImageSources(int $imageSourceId): bool
    {
        $this->exist();
        foreach ($this->kioskDto->imageSources as $imageSourceDto) {
            if ($imageSourceDto->imageSourceId == $imageSourceId) {
                return true;
            }
        }
        return false;
    }

    /**
     * Описание киоска
     *
     * @return array
     */
    public function jsonSerialize(): array
    {
        $this->exist();
        $info = $this->kioskDto->toArray(['locationDescription', 'stateId', 'defaultBrand', 'products', 'imageSources', 'nameInstallationInvoice', 'setting', 'settingsView','adminUrl']);
        $info['downloadViaTheSite'] = $this->kioskDto->adminUrl . DIRECTORY_SEPARATOR . 'kiosk' . DIRECTORY_SEPARATOR . $this->kioskDto->identity;
        $info['downloadViaMail'] = $this->mail;
        $info['defaultBrand'] = $this->kioskDto->defaultBrand
            ? $this->kioskDto->defaultBrand->toArray(['id', 'frameImages'])
            : null;

        foreach ($this->kioskDto->setting as $settingDto) {
            $reference = (new KioskSettingReference($settingDto->type));
            $info['setting'][$reference->column] = $settingDto->value;
        }

        foreach ($this->kioskDto->settingsView as $settingViewDto) {
            $reference = (new KioskViewSettingReference($settingViewDto->type));
            $info['settingView'][$reference->column] = $settingViewDto->value;
        }

        // текущий баланс, для дефолтной валюты (Рубли)
        $info['defaultBalance'] = $this->defaultBalanceJsonSerialize();
        $info['imageSources'] = [];
        foreach ($this->kioskDto->imageSources as $imageSourceDto) {
            switch ($imageSourceDto->imageSourceId) {
                case ImageSourceReference::IMAGE_DIRECTORY_FACES:
                    $info['imageSources'][] = '/api/client/source/image-directory-faces';
                    break;
                case ImageSourceReference::CERTAIN_FACES_SEARCH:
                    $info['imageSources'][] = '/api/client/source/certain-faces-search';
                    break;
            }
        }

        foreach ($this->kioskDto->products as $kioskProductDto) {
            $product = $kioskProductDto->toArray(['kioskIdentity']);
            $product['name'] = (new ProductReference($kioskProductDto->productId))->clientTitle;
            $info['products'][] = $product;
        }
        $info['devices']['webCamera']['rotate'] = $this->cameraRotate;
        $info['video'] = (new FileKioskCriteria())->select('local_path')->get();
        return $info;
    }

    /**
     * @return Kiosk|null
     */
    public function getModel(): ?Kiosk
    {
        $this->initialize();
        return $this->kioskModel;
    }

    /**
     * Текущий баланс, для дефолтной валюты (Рубли)
     *
     * @return array
     */
    public function defaultBalanceJsonSerialize(): array
    {
        $this->exist();
        $currentBalance = $this->getBalanceService()->getBalanceModel(
            BalanceTypeReference::CURRENT,
            $this->getDefaultCurrency()->value
        );
        return [
            'amountPenny' => $currentBalance->amount_penny,
            'currencyId' => $currentBalance->getCurrency()->value,
        ];
    }

    /**
     * Валюта киоска по дефолту
     *
     * @return CurrencyReference
     */
    public function getDefaultCurrency(): CurrencyReference
    {
        // заглушка
        static $defaultCurrency;
        if (!$defaultCurrency) {
            $defaultCurrency = new CurrencyReference(CurrencyReference::RUB);
        }
        return $defaultCurrency;
    }

    /**
     * @return BalanceService
     */
    protected function getBalanceService(): BalanceService
    {
        if ($this->balanceService === null) {
            $this->balanceService = resolve(BalanceService::class);
        }
        return $this->balanceService;
    }

    protected function initialize(): void
    {
        if ($this->isExist !== null) {
            return;
        }
        $this->kioskModel = (new KioskCriteria())->first() ?: null;
        if ($this->kioskModel) {
            $this->kioskDto = $this->kioskModel->getDto();
            $this->isExist = true;
        } else {
            $this->isExist = false;
        }
    }
}
