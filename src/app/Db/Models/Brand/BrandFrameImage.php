<?php
namespace App\Db\Models\Brand;

use Illuminate\Support\Carbon;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Dto\BrandFrameImageDto;
use Lomobil\Common\DrIsland\Reference\Photo\PhotoOrientationReference;
use Lomobil\Common\DrIsland\Reference\Photo\SizeReference;

/**
 * Class BrandFrameImage
 *
 * @property int $id
 * @property int $brand_id
 * @property string $local_path
 * @property int $image_size_id
 * @property int $photo_orientation_id
 * @property Carbon $created_at
 * @property Carbon $updated_at
 */
class BrandFrameImage extends AbstractModel
{

    /**
     * @var string - Имя таблицы
     */
    protected $table = 'brand_frame_images';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'brand_id', 'local_path', 'image_size_id', 'photo_orientation_id'
    ];

    /**
     * Значения по умолчанию
     * @var array
     */
    protected $attributes = [
        'photo_orientation_id' => PhotoOrientationReference::LANDSCAPE,
    ];

    /**
     * @return SizeReference|null
     */
    public function getImageSize(): ?SizeReference
    {
        return $this->image_size_id ? new SizeReference($this->image_size_id) : null;
    }

    /**
     * @return PhotoOrientationReference|null
     */
    public function getPhotoOrientation(): ?PhotoOrientationReference
    {
        return $this->photo_orientation_id ? new PhotoOrientationReference($this->photo_orientation_id) : null;
    }

    /**
     * @return BrandFrameImageDto
     */
    public function getDto(): BrandFrameImageDto
    {
        $dto = new BrandFrameImageDto();
        $dto->brandId = $this->brand_id;
        $dto->imageFrameLocalPath = $this->local_path;
        $dto->imageSizeId = $this->image_size_id;
        $dto->photoOrientationId = $this->photo_orientation_id;
        return $dto;
    }

    /**
     * @param BrandFrameImageDto $brandFrameImageDto
     * @return BrandFrameImage
     */
    public static function createFromDto(BrandFrameImageDto $brandFrameImageDto): BrandFrameImage
    {
        $model = new BrandFrameImage();
        $model->brand_id = $brandFrameImageDto->brandId;
        $model->local_path = $brandFrameImageDto->imageFrameLocalPath;
        $model->image_size_id = $brandFrameImageDto->imageSizeId;
        $model->photo_orientation_id = $brandFrameImageDto->photoOrientationId;

        return $model;
    }
}
