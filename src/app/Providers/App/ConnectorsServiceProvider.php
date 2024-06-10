<?php
namespace App\Providers\App;

use App\Connectors\CertainFacesSearch\CertainFacesSearchConnector;
use App\Connectors\CertainFacesSearch\NewCertainFacesSearchConnector;
use App\Connectors\FormationInvoice\Dto\FormationInvoiceMobikaConnector;
use App\Connectors\FormationInvoice\FormationInvoiceConnector;
use App\Db\Managers\File\FileManager;
use App\Services\KioskService;
use Illuminate\Support\ServiceProvider;
use Lomobil\Common\DrIsland\Connectors\Core\CoreKioskConnector;

/**
 * Class ConnectorsServiceProvider
 * Провайдер сервисов-Коннекторов внешних сервисов
 */
class ConnectorsServiceProvider extends ServiceProvider
{

    /**
     * @throws \Illuminate\Contracts\Container\BindingResolutionException
     */
    public function register()
    {
        /**
         * @var KioskService $kiosk
         */
        $kiosk = $this->app->make(KioskService::class);

        // Коннектор ядра
        $this->app->singleton(CoreKioskConnector::class, function ($app) use($kiosk) {
            return new CoreKioskConnector(
                config('connectors.core.host'),
                $kiosk->getSecureKey(),
                $kiosk->getIdentity()
            );
        });
        // Коннектор сервиса поиска фото (нейросеть)
        $this->app->singleton(CertainFacesSearchConnector::class, function ($app) use($kiosk) {
            return new CertainFacesSearchConnector(
                (string) config('connectors.certainFacesSearch.host'),
                (string) config('connectors.certainFacesSearch.token'),
                (string) config('connectors.certainFacesSearch.relativePath'),
                (float) config('connectors.certainFacesSearch.minSimilarityDistance'),
                (int) config('connectors.certainFacesSearch.maxDownloadThreads')
            );
        });
        // Коннектор сервиса поиска фото (нейросеть)
        $this->app->singleton(NewCertainFacesSearchConnector::class, function ($app) use($kiosk) {
            return new NewCertainFacesSearchConnector(
                (string) config('connectors.certainFacesSearch.host'),
                (string) config('connectors.certainFacesSearch.token'),
                (string) config('connectors.certainFacesSearch.relativePath'),
                $app->make(FileManager::class)
            );
        });
        // Коннектор сервиса формирования чеков
        $this->app->singleton(FormationInvoiceConnector::class, function () {
            return new FormationInvoiceConnector(
                (string) config('connectors.formationInvoice.host'),
                (string) config('connectors.formationInvoice.ofd.sslCertPath'),
                (string) config('connectors.formationInvoice.ofd.sslKeyPath'),
            );
        });
        // Коннектор сервиса формирования чеков (Mobika)
        $this->app->singleton(FormationInvoiceMobikaConnector::class, function () {
            return new FormationInvoiceMobikaConnector(
                (string) config('connectors.formationInvoice.host'),
                (string) config('connectors.formationInvoice.mobika.groupId'),
                (string) config('connectors.formationInvoice.mobika.groupKey'),
                (string) config('connectors.formationInvoice.mobika.receiptType'),
                (string) config('connectors.formationInvoice.mobika.taxSystem'),
                (string) config('connectors.formationInvoice.mobika.taxType'),
            );
        });
    }
}
