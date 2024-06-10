<?php
namespace App\Http\Requests\Source;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class DatesSearchForm
 *
 * @package App\Http\Requests\Source
 */
class DatesSearchForm extends FormRequest
{

    /**
     * Правила валидации
     * @return array
     */
    public function rules(): array
    {
        return [
            'location' => ['required', 'string'],
        ];
    }


    /**
     * @return string
     */
    public function getLocation(): string
    {
        return (string) $this->get('location', 0);
    }
}