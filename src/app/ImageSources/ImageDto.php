<?php
namespace App\ImageSources;

use Lomobil\Common\DrIsland\AbstractDto;

/**
 * Class ImageDto
 *
 * @property string $path
 * @property string $originalUri
 * @property string $thumbUri
 * @property string $brandId
 * @property string $createAt
 */
class ImageDto extends AbstractDto
{
    /**
     * Полный путь в файловой системе
     * @var string
     */
    protected string $path = '';

    /**
     * Относительный URL к оригинальному изображению
     * @var string
     */
    protected string $originalUri = '';

    /**
     * Относительный URL к превью изображения
     * @var string
     */
    protected string $thumbUri = '';

    /**
     * Идентификатор бренда
     * @var int|null
     */
    protected int $brandId = 0;

    /**
     * Время создания
     * @var int
     */
    protected int $createAt = 0;
}
