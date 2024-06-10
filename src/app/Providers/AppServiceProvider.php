<?php

namespace App\Providers;

use App\Services\ExecMachine;
use App\Services\FileSyncService\Service as FileSyncService;
use App\Services\KioskService;
use App\Services\Printing\PrintService;
use App\Services\SshHostMachine;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register()
    {
        // Сервис информации текущего киоска
        $this->app->singleton(KioskService::class, function ($app) {
            return new KioskService(
                config('kiosk.devices.webCamera.rotate',0),
                config('kiosk.mail.user'),
            );
        });

        // Сервис печати
        $this->app->singleton(PrintService::class, function ($app) {
            return new PrintService(
                $app->make(KioskService::class),
                $app->make(SshHostMachine::class),
                $app->make(ExecMachine::class),
                config('kiosk.print.localStoragePath'),
                config('kiosk.print.realStoragePath')
            );
        });

        // Сервис синхронизации файлов
        $this->app->singleton(FileSyncService::class, function ($app) {
            return new FileSyncService(
                public_path(),
                config('connectors.core.host')
            );
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
