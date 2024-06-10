<?php
namespace App\Http\Requests\Source;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class CertainFacesSearchForm
 *
 * @package App\Http\Requests\Source
 */
class CertainFacesSearchForm extends FormRequest
{

    /* @var string|null */
    private ?string $image = null;

    /**
     * Правила валидации
     * @return array
     */
    public function rules(): array
    {
        return [
            'sampleImage' => ['required', 'string'],
            'location' => ['required', 'string'],
            'date' => ['nullable', 'date'],
            'limit' => ['nullable', 'int',  'min:1', 'max:30'],
            'offset' => ['nullable', 'int',  'min:0', 'max:200'],
            'queryNumber' => ['string'],
        ];
    }


    /**
     * @return string
     */
    public function getBinImageStr(): string
    {
        if (!$this->image) {
            $data = explode( ',', $this->get('sampleImage'));
            $this->image = base64_decode($data[1]);
        }
        return $this->image;
    }

    /**
     * @return int
     */
    public function getDate(): int
    {
        return $this->get('date') ? strtotime($this->get('date')) : time();
    }

    /**
     * @return int
     */
    public function getLimit(): int
    {
        return (int) $this->get('limit', 15);
    }

    /**
     * @return int
     */
    public function getOffset(): int
    {
        return (int) $this->get('offset', 0);
    }

    /**
     * @return string
     */
    public function getLocation(): string
    {
        return (string) $this->get('location', 0);
    }

    /**
     * @return string
     */
    public function getQueryNumber(): string
    {
        return (string) $this->get('queryNumber', null);
    }
}