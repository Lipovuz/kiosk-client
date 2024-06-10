<?php
return [
    'print' => [
        // хранилище файлов печати - путь внутри контейнера
        'localStoragePath' => storage_path('print'),
        // хранилище файлов печати - путь в реальной системе (вне контейнера)
        'realStoragePath' => env('KIOSK_PRINT_FOLDER', '/app-web/src/storage/print'),
    ],
    'imageSource' => [
        // источник фото - локальная папка с файлами
        'directoryFacesSources' => [
            'relativePath' => '/storage/image_source_faces', // папка с изображениями
            'defaultLimit' => 50,                            // лимит по умолчанию на количество записей
            'imgExtension' => ['jpg', 'png'],                // расширения файлов изображений
        ],
        // источник фото - нейросеть
        'certainFacesSearch' => [
            'rotateCamera' => env('ROTATE_CAMERA', 0), // Поворот камери
            'saveImageFromWebcam' => env('SAVE_IMAGE_FROM_WEBCAM', false), // Сохранить изображение с веб-камеры
            'pathToImagesFromWebcam' => '/storage/webcam_images',
        ],
        'selfie' => [
            'rotateCamera' => env('ROTATE_CAMERA', 0), // Поворот камери
            'pathBySelfie' => 'storage/image_selfie' // Директория с селфи
        ],
        'wifi' => [
            'pathByWifi' => 'storage/image_wifi' // Директория с wifi
        ]
    ],
    'devices' => [
        'webCamera' => [
            'rotate' => env('ROTATE_CAMERA', 0), // Поворот камери
        ],
    ],
    'mail' => [
        'host' => env('GOOGLE_IMAP_HOST'),
        'user' => env('GOOGLE_IMAP_USER'),
        'password' => env('GOOGLE_IMAP_PASSWORD'),
        'dirPath' => 'storage/mail_photo' // Директория с почти
    ]
];
