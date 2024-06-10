<?php
namespace App\Db\Models\Brand;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Dto\BrandDto;

/**
 * Class Brand
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string $identifier - Символьный идентификатор бренда
 * @property Carbon $created_at
 * @property Carbon $updated_at
 *
 * @property-read Collection|BrandFrameImage[] $frameImages
 */
class Brand extends AbstractModel
{

    /**
     * @var string - Имя таблицы
     */
    protected $table = 'brands';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'identifier'
    ];

    /**
     * @var array - жадная загрузка
     */
    protected $with = ['frameImages'];

    /**
     * Отношение для рамок фото
     * @return HasMany
     */
    public function frameImages()
    {
        return $this->hasMany(BrandFrameImage::class);
    }

    /**
     * @return BrandDto
     */
    public function getDto(): BrandDto
    {
        $dto = new BrandDto();
        $dto->id = $this->id;
        $dto->name = (string) $this->name;
        $dto->description = (string) $this->description;
        $dto->identifier = (string) $this->identifier;
        $frameImages = [];
        foreach ($this->frameImages as $frameImage) {
            $frameImages[] = $frameImage->getDto();
        }
        $dto->frameImages = $frameImages;
        return $dto;
    }

    /**
     * @param BrandDto $brandDto
     * @return Brand
     */
    public static function createFromDto(BrandDto $brandDto): Brand
    {
        $model = new Brand();
        $model->id = $brandDto->id;
        $model->name = $brandDto->name;
        $model->description = $brandDto->description;
        $model->identifier = $brandDto->identifier;

        return $model;
    }
}
