<?php
namespace App\Connectors\CertainFacesSearch;

use App\ImageSources\ImageDto;
use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class CertainFacesSearchImageDto
 * - переопределяем базовый, добавляем поля:
 *
 * @property float $similarityDistance
 * @property string $remoteOriginalUrl
 * @property string $remoteThumbUrl
 * @property string $exifArtist
 * @property string $exifCopyright
 */
class CertainFacesSearchImageDto extends ImageDto
{
    /**
     * Сходство (релевантность 0 <= $similarityDistance <= 1 )
     * @var float
     */
    protected float $similarityDistance = 0;

    /**
     * URL оригинального изображений на удаленном сервисе
     * @var string
     */
    protected string $remoteOriginalUrl = '';

    /**
     * URL превью изображений на удаленном сервисе
     * @var string
     */
    protected string $remoteThumbUrl = '';

    /**
     * EXIF поле изображения, должно содержать Идентификатор Камеры
     * @var string
     */
    protected string $exifArtist = '';

    /**
     * EXIF поле изображения, должно содержать Идентификатор Бренда
     * @var string
     */
    protected string $exifCopyright = '';

    /**
     * @return AbstractDto|ImageDto
     */
    public function getImageDto(): AbstractDto
    {
        return ImageDto::create(['dtoClass' => ImageDto::class, 'data' => $this->toArray()]);
    }
}
