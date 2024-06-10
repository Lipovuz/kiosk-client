<?php

namespace App\Http\Requests\Source;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class ImagesSaveForm
 *
 * @package App\Http\Requests\Source
 *
 * @property array $images
 */
class ImagesSaveForm extends FormRequest
{

    /**
     * Правила валидации
     * @return array
     */
    public function rules(): array
    {
        return [
            'images' => ['required', 'array'],
        ];
    }
}
