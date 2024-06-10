<?php
namespace App\ProductExecutors\Printing;

use App\Db\Managers\Brand\BrandManager;
use App\Services\Printing\PrintService;

/**
 * Class PrintBrandFullPhoto
 * Продукт: печать полноразмерного фото в  бренд-рамке
 */
class PrintBrandFullPhoto extends AbstractFullPhoto
{
    private PrintService $printService;

    public function __construct(BrandManager $brandManager, PrintService $printService)
    {
        parent::__construct($brandManager);
        $this->printService = $printService;
    }

    /**
     * Отступ непечатной области принтера
     * @return float
     */
    protected function getCanvasExtendVerticalMm(): float
    {
        return 3;
    }

    /**
     * Отступ непечатной области принтера
     * @return float
     */
    protected function getCanvasExtendHorizontalMm(): float
    {
        return 3.5;
    }

    protected function process(): void
    {
        $pathToPrint = $this->printService->prepareImage($this->imageBrandProcess());
        if (!$pathToPrint) {
            throw new \LogicException("Ошибка генерации макета");
        }

        $jobIds = [];
        for ($i = 1; $i <= $this->getOrderItemDto()->productCount; $i++) {
            $jobId = $this->printService->printFile($pathToPrint, $this->getOrderItemDto());
            if ($jobId) {
                $jobIds[] = $jobId;
            }
        }

        if (count($jobIds) != $this->getOrderItemDto()->productCount) {
            throw new \LogicException("Ошибка печати");
        }
    }
}
