<?php
namespace App\ProductExecutors;

use Intervention\Image\Image;
use Lomobil\Common\DrIsland\Reference\Photo\SizeReference;

/**
 * Trait ImageProductTrait
 *
 * Трейт продуктов изображения
 */
trait ImageOperationTrait
{
    use ImageHelperTrait;

    /**
     * @return SizeReference
     */
    abstract protected function getSize(): SizeReference;

    /**
     * Вертикальный отступ изображения в рамках базового макета (полотна)
     * @return float
     */
    abstract protected function getPaddingVerticalMm(): float;

    /**
     * Горизонтальный отступ изображения в рамках базового макета (полотна)
     * @return float
     */
    abstract protected function getPaddingHorizontalMm(): float;

    protected function isLandscape(Image $image): bool
    {
        return $image->height() < $image->width();
    }

    protected function isPortrait(Image $image): bool
    {
        return $image->height() >= $image->width();
    }


    protected function orientationNormalizeToLandscape(Image $image): void
    {
        if ($image->height() > $image->width()) {
            $image->rotate(90);
        }
    }

    protected function orientationNormalizeToPortrait(Image $image): void
    {
        if ($image->height() < $image->width()) {
            $image->rotate(90);
        }
    }

    /**
     * Подгонка до нужного размера при ландшафтной ориентации
     * @param Image $image
     */
    protected function resizeLandscape(Image $image): void
    {
        // применяем инвертированную логику, - подрезаем что бы фотография вписалась в заданный размер
        if (
        $this->hasResizeToWidth(
            $this->getSize()->landscapeWidthPx,
            $this->getSize()->landscapeHeightPx,
            $image->width(),
            $image->height()
        )
        ) {
            $image->heighten($this->getSize()->landscapeHeightPx);
        } else {
            $image->widen($this->getSize()->landscapeWidthPx);
        }
        $image->crop($this->getSize()->landscapeWidthPx, $this->getSize()->landscapeHeightPx);
    }

    /**
     * @param Image $canvas
     * @param mixed $frameImage
     */
    protected function setFullSizeFrame(Image $canvas, $frameImage): void
    {
        $canvas->insert(
            $frameImage,
            'top-left',
            $this->getLeftRightPadding(),
            $this->getTopBottomPadding()
        );
    }
}