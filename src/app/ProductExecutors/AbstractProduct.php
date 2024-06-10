<?php
namespace App\ProductExecutors;

use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Dto\OrderItemDto;

abstract class AbstractProduct
{
    private ?OrderItemDto $orderItemDto = null;

    abstract protected function process(): void;

    public function execute(OrderItemDto $orderItemDto): bool
    {
        $this->orderItemDto = $orderItemDto;
        try {
            $this->process();
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), ['exception' => $exception]);
            $this->orderItemDto->isSuccess = false;
            $this->orderItemDto->error = $exception->getMessage();
            return false;
        }
        $this->orderItemDto->isSuccess = true;
        return true;
    }

    public function getOrderItemDto(): ?OrderItemDto
    {
        return $this->orderItemDto;
    }
}
