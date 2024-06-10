<?php
namespace App\Db\Models\Kiosk;

use Lomobil\Common\DrIsland\Dto\FileDto;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractModel;
use Lomobil\Common\DrIsland\Reference\FileReference;

/**
 * Class Files
 *
 * @property int $id
 * @property int $type
 * @property string $name
 * @property int $local_path
 * @property string $created_at
 * @property string $updated_at
 *
 * @package App\Db\Models\
 */
class FilesKiosk extends AbstractModel
{
    /**
     * @var string - Имя таблицы
     */
    protected $table = 'files_kiosk';

    /**
     * Атрибуты, которые можно присвоить массово
     * @var array
     */
    protected $fillable = [
        'type', 'name', 'local_path',
    ];

    /**
     * @return FileReference|null
     */
    public function getType(): ?FileReference
    {
        return $this->type ? new FileReference($this->type) : null;
    }

    /**
     * @return FileDto
     */
    public function getDto(): FileDto
    {
        $dto = new FileDto();
        $dto->type = $this->type;
        $dto->name = $this->name;
        $dto->localPath = $this->local_path;
        return $dto;
    }

    /**
     * @param FileDto $productDto
     * @return FilesKiosk
     */
    public static function createFromDto(FileDto $productDto): FilesKiosk
    {
        $model = new FilesKiosk();
        $model->type = $productDto->type;
        $model->name = $productDto->name;
        $model->local_path = $productDto->localPath;

        return $model;
    }
}
