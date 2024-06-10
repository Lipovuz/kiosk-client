<?php
namespace App\ProductExecutors;

use App\Facades\AppImage;
use Intervention\Image\Image;
use LogicException;
use Lomobil\Common\DrIsland\Reference\Photo\SizeReference;

abstract class AbstractImageProduct extends AbstractProduct
{
    use ImageOperationTrait;

    /**
     * @const прозрачный цвет (фон)
     */
    public const TRANSPARENT_COLOR = [255, 255, 255, 0];

    /**
     * @const поле содержащие путь к изображению OrderItemDto->specificDetails
     */
    public const SPECIFIC_DETAILS_FIELD = 'image_path';

    /**
     * Оригинальное изображение (фото)
     * @var Image|null
     */
    private ?Image $originalImage = null;

    /**
     * @var int|null
     */
    private ?int $canvasWidth = null;

    /**
     * @var int|null
     */
    private ?int $canvasHeight = null;

    /**
     * @var int|null
     */
    private ?int $leftRightPadding = null;

    /**
     * @var int|null
     */
    private ?int $topBottomPadding = null;


    public function getOriginalImage(): ?Image
    {
        if (!$this->originalImage) {
            $specificDetails = $this->getOrderItemDto()->specificDetails;
            if (isset($specificDetails[self::SPECIFIC_DETAILS_FIELD])) {
                $imagePath = $specificDetails[self::SPECIFIC_DETAILS_FIELD];
                $this->originalImage = AppImage::make($imagePath);
                // нормализация ориентации согласно Exif аттрибутов
                $this->originalImage->orientate();
            } else {
                throw new LogicException("Оригинальное изображение не определенно: " . self::SPECIFIC_DETAILS_FIELD);
            }
        }
        return $this->originalImage;
    }

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

    /**
     * Вертикальное увеличение базового макета (полотна)
     * - при подготовке макета к печати - разница между областью печати (по вертикали)  и длиной носителя
     * @return float
     */
    abstract protected function getCanvasExtendVerticalMm(): float;

    /**
     * Горизонтальное увеличение базового макета (полотна)
     * - при подготовке макета к печати - разница между областью печати (по горизонтали)  и длиной носителя
     * @return float
     */
    abstract protected function getCanvasExtendHorizontalMm(): float;

    /**
     * @return Image
     */
    protected function getCanvas(): Image
    {
        return AppImage::canvas($this->getCanvasWidth(), $this->getCanvasHeight(), self::TRANSPARENT_COLOR);
    }

    protected function getCanvasWidth(): int
    {
        return is_null($this->canvasWidth) ? $this->calcCanvas() + $this->canvasWidth : $this->canvasWidth;
    }

    protected function getCanvasHeight(): int
    {
        return is_null($this->canvasHeight) ? $this->calcCanvas() + $this->canvasHeight : $this->canvasHeight;
    }

    protected function getLeftRightPadding(): int
    {
        return is_null($this->leftRightPadding) ? $this->calcCanvas() + $this->leftRightPadding : $this->leftRightPadding;
    }

    protected function getTopBottomPadding(): int
    {
        return is_null($this->topBottomPadding) ? $this->calcCanvas() + $this->topBottomPadding : $this->topBottomPadding;
    }

    /**
     * подсчет значений
     */
    private function calcCanvas(): int
    {
        // размер полотна изображения
        $this->canvasWidth =
            $this->getSize()->landscapeWidthPx +
            $this->getSize()->getPixelWidthFromMm($this->getCanvasExtendHorizontalMm());

        $this->canvasHeight =
            $this->getSize()->landscapeHeightPx +
            $this->getSize()->getPixelWidthFromMm($this->getCanvasExtendVerticalMm());

        // отступы для размещения фото на полотне
        $this->leftRightPadding = $this->getSize()->getPixelWidthFromMm(
            $this->getPaddingHorizontalMm() + $this->getCanvasExtendHorizontalMm() / 2
        );

        $this->topBottomPadding = $this->getSize()->getPixelHeightFromMm(
            $this->getPaddingVerticalMm() + $this->getCanvasExtendVerticalMm() / 2
        );
        return 0;
    }
}
