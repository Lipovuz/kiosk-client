<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'accepted' => '":attribute" должен быть принят.',
    'active_url' => '":attribute"  не является действительным URL.',
    'after' => '":attribute" должен быть датой после :date.',
    'after_or_equal' => '":attribute" должен быть датой после или равен :date.',
    'alpha' => '":attribute" может содержать только буквы.',
    'alpha_dash' => '":attribute" может содержать только буквы, цифры, тире и подчеркивания.',
    'alpha_num' => '":attribute" может содержать только буквы и цифры.',
    'array' => '":attribute" должен быть массивом.',
    'before' => '":attribute" должен быть датой до :date.',
    'before_or_equal' => '":attribute" должен быть датой до или равен дате :date.',
    'between' => [
        'numeric' => '":attribute" должен быть между :min и :max.',
        'file' => 'Размер файла ":attribute" должен быть между :min и :max килобайт.',
        'string' => 'Длина строки ":attribute"  должна быть между :min и :max символами.',
        'array' => 'Список ":attribute" должен иметь от :min до :max элементов.',
    ],
    'boolean' => 'Поле ":attribute" должно быть истинным или ложным.',
    'confirmed' => '":attribute" поле не совпадает.',
    'date' => '":attribute" не является допустимой датой.',
    'date_equals' => '":attribute" должен быть датой, равной :date.',
    'date_format' => '":attribute" не соответствует формату :format.',
    'different' => 'Поля ":attribute" и ":other" должны иметь разные значения.',
    'digits' => '":attribute" должен состоять из :digits цифр.',
    'digits_between' => '":attribute" должен быть между :min и :max digits.',
    'dimensions' => '":attribute" имеет недопустимые размеры изображения.',
    'distinct' => 'Поле :attribute имеет повторяющееся значение.',
    'email' => '":attribute" должен быть действительным адресом электронной почты.',
    'ends_with' => '":attribute" должен заканчиваться одним из следующих символов: :values.',
    'exists' => 'Выбранный: ":attribute" недействителен.',
    'file' => '":attribute" должен быть файлом.',
    'filled' => '":attribute" должно иметь значение.',
    'gt' => [
        'numeric' => '":attribute" должен быть больше чем :value.',
        'file' => '":attribute" должен быть больше чем :value (килобайт).',
        'string' => '":attribute" должен быть длинее :value символов.',
        'array' => '":attribute" должен иметь более :value элементов.',
    ],
    'gte' => [
        'numeric' => '":attribute" должен быть больше или равно чем :value.',
        'file' => '":attribute" должен иметь размер не менее :value (килобайт).',
        'string' => '":attribute" должен быть не менее :value символов.',
        'array' => '":attribute" должен иметь не менее :value элементов.',
    ],
    'image' => '":attribute" должен быть изображением.',
    'in' => 'Выбранный ":attribute" недействителен.',
    'in_array' => 'Поле ":attribute" не существует в :other.',
    'integer' => '":attribute" должен быть целым числом.',
    'ip' => '":attribute" должен быть действительным IP-адресом.',
    'ipv4' => '":attribute" должен быть действительным адресом IPv4.',
    'ipv6' => '":attribute" должен быть действительным адресом IPv6.',
    'json' => '":attribute" должен быть допустимой строкой JSON.',
    'lt' => [
        'numeric' => '":attribute" должен быть меньше чем :value.',
        'file' => '":attribute" должен быть меньше чем :value (килобайт).',
        'string' => '":attribute" должен быть короче :value символов.',
        'array' => '":attribute" должен иметь менее :value элементов.',
    ],
    'lte' => [
        'numeric' => '":attribute" должен быть не более :value.',
        'file' => '":attribute" должен быть не более :value (килобайт).',
        'string' => '":attribute" должен быть не более :value символов.',
        'array' => '":attribute" должен иметь не более :value элементов.',
    ],
    'max' => [
        'numeric' => '":attribute" не может быть больше, чем :max.',
        'file' => '":attribute" не может быть больше, чем :max (килобайт).',
        'string' => '":attribute" не может быть длинее, чем :max символов.',
        'array' => '":attribute" может содержать не более :max элементов.',
    ],
    'mimes' => '":attribute" должен быть файлом типа: :values.',
    'mimetypes' => '":attribute" должен быть файлом типа: :values.',
    'min' => [
        'numeric' => '":attribute" должен быть не менее :min.',
        'file' => '":attribute" должен быть не менее :min (килобайт).',
        'string' => '":attribute" должен содержать не менее :min символов.',
        'array' => '":attribute" должен содержать как минимум :min элементов.',
    ],
    'not_in' => 'Выбраное значение ":attribute" не действительное.',
    'not_regex' => 'Поле ":attribute" имеет неверный формат.',
    'numeric' => '":attribute" должен быть числом.',
    'password' => 'Пароль неверный.',
    'present' => 'Поле ":attribute" должно присутствовать.',
    'regex' => 'Поле ":attribute" имеет неверный формат.',
    'required' => 'Поле ":attribute" обязательно к заполнению',
    'required_if' => 'Поле ":attribute" обязательное, когда :other = :value.',
    'required_unless' => 'Поле ":attribute" является обязательным, если :other = :values.',
    'required_with' => 'Поле ":attribute" обязательное, если присутствует :values.',
    'required_with_all' => 'Поле ":attribute" обязательное, когда присутствует :values.',
    'required_without' => 'Поле ":attribute" обязательное, если :values отсутствуют.',
    'required_without_all' => 'Поле ":attribute" обязательное, если нет ни одного из :values.',
    'same' => 'Поля ":attribute" и ":other" должны совпадать.',
    'size' => [
        'numeric' => 'Поле ":attribute" должно быть :size.',
        'file' => 'Поле ":attribute" должно иметь размер :size (килобайт).',
        'string' => 'Поле ":attribute" должно иметь размер :size символов.',
        'array' => 'Поле ":attribute" должно соджержать :size элементов.',
    ],
    'starts_with' => 'Поле ":attribute" должно начинаться с одного из следующих символов: :values.',
    'string' => 'Поле ":attribute" должно быть строкой.',
    'timezone' => 'Поле ":attribute" должно быть действительной зоной времени.',
    'unique' => 'Значение ":attribute" уже занято.',
    'uploaded' => 'Не удалось загрузить файл ":attribute".',
    'url' => 'Неверный формат ":attribute".',
    'uuid' => 'Поле ":attribute" должно быть действительным UUID.',

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'attribute-name' => [
            'rule-name' => 'custom-message',
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [],

];
