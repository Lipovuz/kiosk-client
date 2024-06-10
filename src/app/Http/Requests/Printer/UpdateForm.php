<?php
namespace App\Http\Requests\Printer;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class UpdateForm
 * @package App\Http\Requests\Printer
 */
class UpdateForm extends FormRequest
{

    /**
     * Правила валидации
     * @return array
     */
    public function rules()
    {
        return [
            'cups_name' => [
                'required',
                'string',
                'max:255'
            ],
            'is_real_print' => [
                'boolean',
                'max:1'
            ],
        ];
    }
}
