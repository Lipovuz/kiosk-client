<?php
namespace App\Db\Models\Kiosk;

use Illuminate\Database\Eloquent\Relations\HasOne;
use Lomobil\Common\DrIsland\Dto\KioskSettingDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\KioskSettingReference;

/**
 * Class KioskSetting
 * @package App\Db\Models\Kiosk
 *
 * @property int $id
 * @property string $kiosk_identity
 * @property int $type
 * @property string $value
 * @property string $name
 * @property string $created_at
 * @property string $updated_at
 *
 * @property-read \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk $kiosk
 */
class KioskSetting extends AbstractModel
{

    /**
     * @var string - Имя таблицы
     */
    protected $table = 'kiosks_settings';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'kiosk_identity', 'type', 'value', 'name',
    ];

    /**
     * @return HasOne
     */
    public function kiosk(): HasOne
    {
        return $this->hasOne(Kiosk::class, 'identity', 'kiosk_identity');
    }

    /**
     * @return KioskSettingDto
     */
    public function getDto(): KioskSettingDto
    {
        $dto = new KioskSettingDto();
        $dto->kioskIdentity = $this->kiosk->identity;
        $dto->type = $this->type;
        $dto->value = $this->value;
        $dto->name = KioskSettingReference::getActiveTitleList()[$this->type];

        return $dto;
    }

    /**
     * @param KioskSettingDto $kioskSettingDto
     * @return KioskSetting
     */
    public static function createFromDto(KioskSettingDto $kioskSettingDto): KioskSetting
    {
        $model = new KioskSetting();
        $model->kiosk_identity = $kioskSettingDto->kioskIdentity;
        $model->type = $kioskSettingDto->type;
        $model->value = $kioskSettingDto->value;
        $model->name = KioskSettingReference::getActiveTitleList()[$kioskSettingDto->type];

        return $model;
    }
}
