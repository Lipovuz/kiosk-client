<?php
namespace App\Http\Requests\Kiosk;

use Illuminate\Validation\Rule;
use Lomobil\Common\DrIsland\Dto\KioskDto;
use Lomobil\Common\DrIsland\Reference\Kiosk\LocationTypeReference;
use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CreateForm
 * @property string $identity
 * @property string $name
 * @property string $location_description
 * @property int $location_type_id
 */
class CreateForm extends FormRequest
{
    /**
     * Правила валидации
     * @return array
     */
    public function rules(): array
    {
        return [
            'identity' => [
                'required',
                'string',
                'max:100',
                'unique:kiosks,identity',
                // обращаемся к коннектору ядра, проверяем уникальность идентификатора
                function ($attribute, $value, $fail) {
                    /*
                    if ($value === 'foo') {
                        $fail('The '.$attribute.' is invalid.');
                    }
                    */
                },
            ],
            'name' => ['required', 'string', 'max:100'],
            'location_description' => ['string', 'max:255'],
            'location_type_id' => [
                'required',
                'int',
                // значение из справочника
                Rule::in(array_keys(LocationTypeReference::getActiveTitleList())),
            ],
        ];
    }

    /**
     * Кастомизация сообщений об ошибках
     * @return array
     */
    public function messages()
    {
        return [];
    }

    /**
     * Название атрибутов
     * @return array
     */
    public function attributes()
    {
        return [
            'identity' => trans('Идентификатор киоска'),
            'name' => trans('Наименование'),
            'location_description' => trans('Местоположение'),
            'location_type_id' => trans('Тип размещения'),
            'default_brand_id' => trans('Бренд по умолчанию'),
        ];
    }

    /**
     * @return KioskDto
     */
    public function getKioskDto(): KioskDto
    {
        $kioskDto = new KioskDto();

        $kioskDto->identity = $this->get('identity');
        $kioskDto->name = $this->get('name');
        $kioskDto->locationDescription = $this->get('location_description');
        $kioskDto->locationTypeId = (int)$this->get('location_type_id');

        return $kioskDto;
    }
}
