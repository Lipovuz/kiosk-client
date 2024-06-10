<?php
namespace App\ProductExecutors;

trait ImageHelperTrait
{
    /**
     * Определение по какой стороне подгонять размер
     * - что бы при подрезке максимально вписать изображение ($width, $height)
     * - в заданные размеры ($targetWidth, $targetHeight)
     * @param $targetWidth
     * @param $targetHeight
     * @param $width
     * @param $height
     * @return bool
     */
    protected function hasResizeToWidth($targetWidth, $targetHeight, $width, $height): bool
    {
        $targetAspectRatio = $targetWidth / $targetHeight;
        $aspectRatio = $width / $height;
        return $targetAspectRatio < $aspectRatio;
    }
}
