<?php
namespace App\ProductExecutors\Email;

use App\ProductExecutors\Printing\AbstractFullPhoto;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

/**
 * Class EmailBrandFullPhoto
 * Продукт: отправка на Email полноразмерного фото в  бренд-рамке
 */
class EmailBrandFullPhoto extends AbstractFullPhoto
{
    public const LOG_ERROR_CHANNEL = 'email_error';

    /**
     * Для email доп. отступов не нужно
     * @return float
     */
    protected function getCanvasExtendVerticalMm(): float
    {
        return 0;
    }

    /**
     * Для email доп. отступов не нужно
     * @return float
     */
    protected function getCanvasExtendHorizontalMm(): float
    {
        return 0;
    }

    protected function process(): void
    {
        try {
            Mail::to($this->getOrderItemDto()->email)
                ->send(
                    new EmailBrandFullPhotoMessage($this->imageBrandProcess(), $this->getOrderItemDto()->orderId)
                );
        } catch (\Exception $exception) {
            Log::channel(self::LOG_ERROR_CHANNEL)->error($exception->getMessage(), ['exception' => $exception]);
            throw new \LogicException("Ошибка отправки Email");
        }
    }
}
