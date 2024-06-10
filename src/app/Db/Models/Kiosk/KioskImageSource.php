<?php
namespace App\Db\Models\Kiosk;

use Lomobil\Common\DrIsland\Dto\KioskImageSourceDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\ImageSourceReference;

/**
 * Class KioskImageSource
 *
 * @property int $id
 * @property int $kiosk_id
 * @property int $image_source_id
 * @property string $created_at
 * @property string $updated_at
 *
 * @property-read \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk $kiosk
 */
class KioskImageSource extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'kiosk_image_sources';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'image_source_id',
    ];

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo|Kiosk
     */
    public function kiosk()
    {
        return $this->belongsTo(Kiosk::class);
    }

    /**
     * @return ImageSourceReference|null
     */
    public function getImageSource(): ?ImageSourceReference
    {
        return $this->image_source_id ? new ImageSourceReference($this->image_source_id) : null;
    }

    /**
     * @return KioskImageSourceDto|null
     */
    public function getDto(): ?KioskImageSourceDto
    {
        $dto = new KioskImageSourceDto();
        $dto->kioskIdentity = $this->kiosk->identity;
        $dto->imageSourceId = $this->image_source_id;
        return $dto;
    }

    /**
     * @param KioskImageSourceDto $productDto
     * @return KioskImageSource
     */
    public static function createFromDto(KioskImageSourceDto $productDto): KioskImageSource
    {
        $model = new KioskImageSource();
        $model->image_source_id = $productDto->imageSourceId;
        return $model;
    }
}
