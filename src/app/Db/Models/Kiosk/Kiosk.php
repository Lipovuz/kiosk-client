<?php
namespace App\Db\Models\Kiosk;

use App\Db\Models\Brand\Brand;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Dto\KioskDto;
use Lomobil\Common\DrIsland\Reference\Kiosk\LocationTypeReference;
use Lomobil\Common\DrIsland\Reference\Kiosk\StatesReference;

/**
 * Class Kiosk
 *
 * @property int $id
 * @property int $status
 * @property string $identity
 * @property string $secure_key
 * @property string $name
 * @property string $location_description
 * @property int $state_id
 * @property int $location_type_id
 * @property int $default_brand_id
 * @property string $admin_url
 * @property string $synchronized_at
 * @property string $created_at
 * @property string $updated_at
 *
 * @property-read \Illuminate\Database\Eloquent\Collection|KioskProduct[] $products
 * @property-read \Illuminate\Database\Eloquent\Collection|KioskImageSource[] $imageSources
 * @property-read null|Brand $brand
 * @property-read \Illuminate\Database\Eloquent\Collection|KioskSetting[] $setting
 * @property-read \Illuminate\Database\Eloquent\Collection|KioskViewSetting $settingsView
 */
class Kiosk extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'kiosks';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'identity', 'name', 'location_description', 'location_type_id', 'default_brand_id', 'admin_url'
    ];

    /**
     * Значения по умолчанию
     * @var array
     */
    protected $attributes = [
        'state_id' => StatesReference::ON,
    ];

    /**
     * @var array - жадная загрузка
     */
    protected $with = ['products', 'imageSources', 'brand', 'setting', 'settingsView'];

    /**
     * Продукты киоска
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function products()
    {
        return $this->hasMany(KioskProduct::class);
    }

    /**
     * Настройки
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function setting()
    {
        return $this->hasMany(KioskSetting::class, 'kiosk_identity', 'identity');
    }

    /**
     * Настройки вида
     * @return hasMany
     */
    public function settingsView()
    {
        return $this->hasMany(KioskViewSetting::class, 'kiosk_identity', 'identity');
    }

    /**
     * Источники фото киоска
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function imageSources()
    {
        return $this->hasMany(KioskImageSource::class);
    }

    /**
     * Бренд
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function brand()
    {
        return $this->hasOne(Brand::class, 'id', 'default_brand_id');
    }

    /**
     * @return StatesReference|null
     */
    public function getState(): ?StatesReference
    {
        return $this->state_id ? new StatesReference($this->state_id) : null;
    }

    /**
     * @return LocationTypeReference|null
     */
    public function getLocationType(): ?LocationTypeReference
    {
        return $this->location_type_id ? new LocationTypeReference($this->location_type_id) : null;
    }

    /**
     * @return KioskDto
     */
    public function getDto(): KioskDto
    {
        $dto = new KioskDto();
        $dto->identity = $this->identity;
        $dto->name = $this->name;
        $dto->locationDescription = $this->location_description;
        $dto->stateId = $this->state_id;
        $dto->locationTypeId = $this->location_type_id;
        $dto->defaultBrand = $this->default_brand_id ? $this->brand->getDto() : null;
        $dto->adminUrl = $this->admin_url;

        $setting = [];
        foreach ($this->setting as $kioskSetting) {
            $setting[] = $kioskSetting->getDto();
        }
        $dto->setting = $setting;

        $settingsView = [];
        foreach ($this->settingsView as $kioskSettingView) {
            $settingsView[] = $kioskSettingView->getDto();
        }
        $dto->settingsView = $settingsView;

        $products = [];
        foreach ($this->products as $kioskProduct) {
            $products[] = $kioskProduct->getDto();
        }
        $dto->products = $products;

        $imageSources = [];
        foreach ($this->imageSources as $imageSource) {
            $imageSources[] = $imageSource->getDto();
        }
        $dto->imageSources = $imageSources;

        return $dto;
    }


    /**
     * @param KioskDto $kioskDto
     * @return Kiosk
     */
    public static function createFromDto(KioskDto $kioskDto): Kiosk
    {
        $model = new Kiosk();
        $model->identity = $kioskDto->identity;
        $model->name = $kioskDto->name;
        $model->location_description = $kioskDto->locationDescription;
        $model->state_id = $kioskDto->stateId;
        $model->location_type_id = $kioskDto->locationTypeId;
        $model->default_brand_id = $kioskDto->defaultBrand ? $kioskDto->defaultBrand->id : null;
        $model->admin_url = $kioskDto->adminUrl;

        return $model;
    }
}
