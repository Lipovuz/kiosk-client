<?php
/*
|--------------------------------------------------------------------------
| Настройки для коннекторов внешних сервисов
|--------------------------------------------------------------------------
|
*/

return [
    // коннектор ядра (админки)
    'core' => [
        'host' => env('CONNECTOR_CORE_HOST', '176.99.9.150'),
    ],
    // коннектор сервиса поиска фото по образцу (Нейросеть)
    'certainFacesSearch' => [
        'host' => env('CONNECTOR_CERTAIN_FACES_SEARCH_HOST', ''),
        'token' => env('CONNECTOR_CERTAIN_FACES_SEARCH_TOKEN', ''),
        'relativePath' => 'storage/image_source_certain_faces_search',
        'minSimilarityDistance' => 0.2,
        'maxDownloadThreads' => 5,
    ],
    'formationInvoice' => [
        'host' => env('CONNECTOR_FORMATION_CHECK_HOST', ''),
        'ofd' => [
            'sslCertPath' => env('CONNECTOR_FORMATION_SSL_CERT_PATH', ''),
            'sslKeyPath' => env('CONNECTOR_FORMATION_SSL_KEY_PATH', ''),
        ],
        'mobika' => [
            'receiptType' => env('CONNECTOR_FORMATION_CHECK_RECEIPT_TYPE', ''),
            'taxSystem' => env('CONNECTOR_FORMATION_CHECK_TAX_SYSTEM', ''),
            'taxType' => env('CONNECTOR_FORMATION_CHECK_TAX_TYPE', ''),
            'groupId' => env('CONNECTOR_FORMATION_CHECK_GROUP_ID', ''),
            'groupKey' => env('CONNECTOR_FORMATION_CHECK_GROUP_KEY', ''),
        ]
    ],
];
