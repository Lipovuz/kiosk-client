<?php
namespace App\Db\Criteria\Brand;

use App\Db\Models\Brand\Brand;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;

/**
 * Class BrandCriteria
 */
class BrandCriteria extends AbstractCriteria
{
    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return Brand::class;
    }

    /**
     * @param int $id
     * @return BrandCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

    /**
     * @param string $identifier
     * @return $this
     */
    public function byIdentifier(string $identifier): self
    {
        $this->where(['identifier' => $identifier]);
        return $this;
    }

    /**
     * Включить в выборку "мягко" удаленные записи
     * @return BrandCriteria
     */
    public function includeSoftDelete(): self
    {
        $this->withTrashed();
        return $this;
    }

    /**
     * @param array|string|string[] $columns
     * @return Brand|object|null
     */
    public function first($columns = ['*'])
    {
        return parent::first($columns);
    }
}
