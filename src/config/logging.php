<?php

use Monolog\Handler\NullHandler;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\SyslogUdpHandler;

return [

    /*
    |--------------------------------------------------------------------------
    | Default Log Channel
    |--------------------------------------------------------------------------
    |
    | This option defines the default log channel that gets used when writing
    | messages to the logs. The name specified in this option should match
    | one of the channels defined in the "channels" configuration array.
    |
    */

    'default' => env('LOG_CHANNEL', 'stack'),

    /*
    |--------------------------------------------------------------------------
    | Log Channels
    |--------------------------------------------------------------------------
    |
    | Here you may configure the log channels for your application. Out of
    | the box, Laravel uses the Monolog PHP logging library. This gives
    | you a variety of powerful log handlers / formatters to utilize.
    |
    | Available Drivers: "single", "daily", "slack", "syslog",
    |                    "errorlog", "monolog",
    |                    "custom", "stack"
    |
    */

    'channels' => [
        'stack' => [
            'driver' => 'stack',
            'channels' => ['single'],
            'ignore_exceptions' => false,
        ],

        'single' => [
            'driver' => 'single',
            'path' => storage_path('logs/laravel.log'),
            'level' => 'debug',
        ],

        // каналы логов печати
        \App\Services\Printing\PrintService::LOG_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/print.log'),
            'level' => 'debug',
        ],
        \App\Services\Printing\PrintService::LOG_ERROR_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/print_error.log'),
            'level' => 'debug',
        ],
        // канал лога обновления киоска
        \App\Services\Kiosk\UpdateKioskService::LOG_ERROR_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/update_kiosk_error.log'),
            'level' => 'debug',
        ],
        // канал лога отправки Email
        \App\ProductExecutors\Email\EmailBrandFullPhoto::LOG_ERROR_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/email_error.log'),
            'level' => 'debug',
        ],
        // канал лога сервиса "нейропоиска"
        \App\ImageSources\CertainFacesSearch\SourcesService::LOG_ERROR_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/certain_faces_search_error.log'),
            'level' => 'debug',
        ],
        // канал лога сервиса "чеки и ККТ"
        \App\Services\Invoice\FormationInvoiceService::LOG_ERROR_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/formation_invoice_error.log'),
            'level' => 'debug',
        ],
        // каналы логов оплаты
        App\Connectors\Acquiring\AcquiringBridge::LOG_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/acquiring.log'),
            'level' => 'debug',
        ],
        App\Connectors\Acquiring\AcquiringBridge::LOG_CHANNEL_ERROR => [
            'driver' => 'single',
            'path' => storage_path('app_logs/acquiring_error.log'),
            'level' => 'debug',
        ],
        \App\Connectors\FormationInvoice\FormationInvoiceConnector::LOG_CHANNEL => [
            'driver' => 'single',
            'path' => storage_path('app_logs/formation_invoice.log'),
            'level' => 'debug',
        ],

        'daily' => [
            'driver' => 'daily',
            'path' => storage_path('logs/laravel.log'),
            'level' => 'debug',
            'days' => 14,
        ],

        'slack' => [
            'driver' => 'slack',
            'url' => env('LOG_SLACK_WEBHOOK_URL'),
            'username' => 'Laravel Log',
            'emoji' => ':boom:',
            'level' => 'critical',
        ],

        'papertrail' => [
            'driver' => 'monolog',
            'level' => 'debug',
            'handler' => SyslogUdpHandler::class,
            'handler_with' => [
                'host' => env('PAPERTRAIL_URL'),
                'port' => env('PAPERTRAIL_PORT'),
            ],
        ],

        'stderr' => [
            'driver' => 'monolog',
            'handler' => StreamHandler::class,
            'formatter' => env('LOG_STDERR_FORMATTER'),
            'with' => [
                'stream' => 'php://stderr',
            ],
        ],

        'syslog' => [
            'driver' => 'syslog',
            'level' => 'debug',
        ],

        'errorlog' => [
            'driver' => 'errorlog',
            'level' => 'debug',
        ],

        'null' => [
            'driver' => 'monolog',
            'handler' => NullHandler::class,
        ],

        'emergency' => [
            'path' => storage_path('logs/laravel.log'),
        ],
    ],

];
