<?php
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::prefix('api/client')->group(function() {


    Route::get('/', 'Api\Client\KioskController@getInfo')
        ->name('api.client.info');

    // Переход в спящий режим - сброс
    Route::post('/state/stand-by', 'Api\Client\KioskController@onStandBy')
        ->name('api.client.onStandBy');

    /**
     * источники изображений
     */
    // Изображения из локальной папке
    Route::get('/source/image-directory-faces', 'Api\Client\Source\DirectoryFacesController@get')
        ->name('api.client.source.directoryFaces.get');

    // Поиск дат для фото
    Route::post('/source/get-dates', 'Api\Client\Source\CertainFacesSearchController@getDates')
        ->name('api.client.source.certainFacesSearch.getDates');

    // Поиск изображения по образцу
    Route::post('/source/certain-faces-search', 'Api\Client\Source\CertainFacesSearchController@request')
        ->name('api.client.source.certainFacesSearch.request');

    // Загрузка изображений через сайт
    Route::post('/source/web-site', 'Api\Client\Source\WebSiteController@request')
        ->name('api.client.source.webSite.request');

    // Получить изображение из почте
    Route::get('/source/get-image-from-mail', 'Api\Client\Source\MailController@request')
        ->name('api.client.source.getImageFromMail.request');

    // Получить селфи
    Route::post('/source/selfie', 'Api\Client\Source\SelfieController@request')
        ->name('api.client.source.saveSelfie.request');

    // Сохранение фото
    Route::post('/source/save-images', 'Api\Client\Source\PrintViaWiFiController@saveImages')
        ->name('api.client.source.wifi.saveImages');

    // Сохранение фото через wifi
    Route::get('/source/search-images', 'Api\Client\Source\PrintViaWiFiController@searchImages')
        ->name('api.client.source.wifi.searchImages');

    // Заказы - корзина, сохранить и подсчитать стоимость
    Route::post('/order', 'Api\Client\OrderController@create')
        ->name('api.client.order.create');

    // Заказы - корзина, выполнить указанный заказ
    Route::get('/order/{orderId}/execute', 'Api\Client\OrderController@execute')
        ->name('api.client.order.execute')
        ->where('id', '[0-9]+');

    // Создание чека
    Route::get('/order/{orderId}/invoice', 'Api\Client\OrderController@invoice')
        ->name('api.client.order.invoice')
        ->where('id', '[0-9]+');
});

/**
 * Точки входа брокера
 */
Route::prefix('api/broker')->group(function() {
    // обработка команд из сервиса оплаты картой
    Route::post('/acquiring', 'Api\Broker\AcquiringController@handleCommand')
        ->name('api.broker.acquiring.input');
});


