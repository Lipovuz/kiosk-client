<?php
namespace App\ProductExecutors\Printing;

use App\Db\Managers\Brand\BrandManager;
use App\Facades\AppImage;
use App\ProductExecutors\AbstractImageProduct;
use Intervention\Image\Image;
use Lomobil\Common\DrIsland\Dto\BrandDto;
use Lomobil\Common\DrIsland\Dto\BrandFrameImageDto;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;
use Lomobil\Common\DrIsland\Reference\Photo\PhotoOrientationReference;
use Lomobil\Common\DrIsland\Reference\Photo\SizeReference;

/**
 * Class AbstractFullPhoto
 * Базовый класс для продуктов-фотографий полного формата
 */
abstract class AbstractFullPhoto extends AbstractImageProduct
{
    /**
     * @var BrandManager
     */
    private BrandManager $brandManager;

    /**
     * AbstractFullPhoto constructor.
     * @param BrandManager $brandManager
     */
    public function __construct(BrandManager $brandManager)
    {
        $this->brandManager = $brandManager;
    }

    /**
     * @param int $brandId
     * @return BrandDto
     * @throws \Facade\FlareClient\Http\Exceptions\NotFound
     */
    protected function getBrandDto(int $brandId): BrandDto
    {
        return $this->brandManager->getBrand($brandId)->getDto();
    }

    /**
     * @return SizeReference
     */
    protected function getSize(): SizeReference
    {
        return $this->getOrderItemDto()->getProduct()->size;
    }

    /**
     * @return float
     */
    protected function getPaddingVerticalMm(): float
    {
        return 0;
    }

    /**
     * @return float
     */
    protected function getPaddingHorizontalMm(): float
    {
        return 0;
    }

    /**
     * @return Image
     */
    protected function imageBrandProcess(): Image
    {
//        $originalImageOrientation = PhotoOrientationReference::defineBySize(
//            $this->getOriginalImage()->width(),
//            $this->getOriginalImage()->height()
//        );

        // поворот если надо
        $this->orientationNormalizeToLandscape($this->getOriginalImage());

        // подгонка под размер
        $this->resizeLandscape($this->getOriginalImage());

        // получаем полотно
        $canvas = $this->getCanvas();

        // вставляем на полотно изображение
        $canvas->insert($this->getOriginalImage(), 'top-left', $this->getLeftRightPadding(), $this->getTopBottomPadding());

        // добавляем рамку бренда, если есть
//        $brandFrameImageDto = $this->getBrandFrameImageDto($this->getOrderItemDto(), $originalImageOrientation);
//        if (!$brandFrameImageDto) {
//            return $canvas;
//        }

//        $brandFrameImage = AppImage::make(public_path($brandFrameImageDto->imageFrameLocalPath));
//        // поворот если надо
//        $this->orientationNormalizeToLandscape($brandFrameImage);
//        $this->setFullSizeFrame($canvas, $brandFrameImage);

        return $canvas;
    }

    /**
     * Подбор рамки Бренда
     * @param OrderItemDto $orderItemDto
     * @param PhotoOrientationReference $orientationReference
     * @return BrandFrameImageDto|null
     * @throws \Facade\FlareClient\Http\Exceptions\NotFound
     */
    protected function getBrandFrameImageDto(OrderItemDto $orderItemDto, PhotoOrientationReference $orientationReference): ?BrandFrameImageDto
    {
        if (
            !$this->getOrderItemDto()->getProduct()->hasBrandFrame ||
            !$this->getOrderItemDto()->brandId ||
            !($brandDto = $this->getBrandDto($this->getOrderItemDto()->brandId))
        ) {
            return null;
        }

        // ищем рамку под размер и ориентацию
        $brandFrameImageDto = $brandDto->getWhereFirstFrame([
            'imageSizeId' => $this->getSize()->value,
            'photoOrientationId' => $orientationReference->value
        ]);
        if ($brandFrameImageDto) {
            return $brandFrameImageDto;
        }

        // ищем  рамку только под размер
        return $brandDto->getWhereFirstFrame([
            'imageSizeId' => $this->getSize()->value
        ]);
    }
}
