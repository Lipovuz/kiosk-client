<?php
namespace App\Providers\App;

use App\Connectors\CertainFacesSearch\NewCertainFacesSearchConnector;
use App\Db\Managers\Brand\BrandManager;
use App\ImageSources\CertainFacesSearch\SourcesService;
use App\ImageSources\ImageDirectoryFaces\SourcesService as ImageDirectoryFacesSources;
use App\ImageSources\Selfie\SourcesService as Selfie;
use App\Services\KioskService;
use App\ImageSources\Mail\MailService;
use Illuminate\Support\ServiceProvider;

/**
 * Class ImageSourceProvider
 */
class ImageSourceProvider extends ServiceProvider
{
    /**
     * @return void
     */
    public function register()
    {
        // Источник изображения - локальная папка с файлами с фиксированным брендом
        $this->app->singleton(ImageDirectoryFacesSources::class, function ($app) {
            return new ImageDirectoryFacesSources(
                $app->make(KioskService::class),
                config('kiosk.imageSource.directoryFacesSources.relativePath'),
                config('kiosk.imageSource.directoryFacesSources.defaultLimit'),
                config('kiosk.imageSource.directoryFacesSources.imgExtension')
            );
        });

        // Источник изображения - фото с внешнего сервиса найденого по образцу
        $this->app->singleton(SourcesService::class, function ($app) {
            return new SourcesService(
                $app->make(NewCertainFacesSearchConnector::class),
                $app->make(BrandManager::class),
                (int) config('kiosk.imageSource.certainFacesSearch.rotateCamera'),
                (int) config('kiosk.imageSource.certainFacesSearch.saveImageFromWebcam'),
                config('kiosk.imageSource.certainFacesSearch.pathToImagesFromWebcam'),
            );
        });

        // Селфи
        $this->app->singleton(Selfie::class, function ($app) {
            return new Selfie(
                $app->make(KioskService::class),
                config('kiosk.imageSource.selfie.pathBySelfie'),
                config('kiosk.imageSource.wifi.pathByWifi'),
                (int) config('kiosk.imageSource.selfie.rotateCamera'),
            );
        });

        // Почта
        $this->app->singleton(MailService::class, function ($app) {
            return new MailService(
                $app->make(KioskService::class),
                config('kiosk.mail.host'),
                config('kiosk.mail.user'),
                config('kiosk.mail.password'),
                config('kiosk.mail.dirPath'),
            );
        });
    }
}
