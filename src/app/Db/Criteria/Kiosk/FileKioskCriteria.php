<?php
namespace App\Db\Criteria\Kiosk;

use App\Db\Models\Kiosk\FilesKiosk;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;

/**
 * Class FileCriteria
 * @package App\Db\Criteria\Kiosk
 */
class FileKioskCriteria extends AbstractCriteria
{

    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return FilesKiosk::class;
    }

    /**
     * @param int $id
     * @return FileKioskCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

    /**
     * @param int $type
     * @return FileKioskCriteria
     */
    public function byType(int $type): self
    {
        $this->where(['type' => $type]);
        return $this;
    }
}