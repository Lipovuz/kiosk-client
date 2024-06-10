<?php
namespace App\Db\Criteria;

use App\Db\Models\Printer;
use Lomobil\Common\DrIsland\Laravel\Db\AbstractCriteria;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

class PrinterCriteria extends AbstractCriteria
{
    /**
     * @return string
     */
    protected static function getModelClass(): string
    {
        return Printer::class;
    }

    /**
     * @param string $kioskIdentity
     * @return PrinterCriteria
     */
    public function byKioskIdentity(string $kioskIdentity): self
    {
        $this->where(['kiosk_identity' => $kioskIdentity]);
        return $this;
    }

    /**
     * @param ProductReference $productReference
     * @return PrinterCriteria
     */
    public function byProduct(ProductReference $productReference): self
    {
        // todo - метод заглушка, привязки пока нет
        return $this;
    }

    /**
     * @param int $id
     * @return PrinterCriteria
     */
    public function byId(int $id): self
    {
        $this->where(['id' => $id]);
        return $this;
    }

}
