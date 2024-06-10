<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
*/
Route::get('/', 'Main@index')->name('home');
Route::get('/admin', 'Admin\SettingController@index')
    ->name('admin');
Route::get('/admin/synchronize', 'Admin\SettingController@synchronize')
    ->name('admin.synchronize');
Route::get('/admin/request', 'Admin\InitializeController@request')
    ->name('admin.request');
Route::get('/admin/php-info', 'Admin\SettingController@phpInfo')
    ->name('admin.phpInfo');
Route::post('/admin/send-request', 'Admin\InitializeController@sendRequest')
    ->name('admin.sendRequest');

/* Принтера */
Route::get('/admin/printers', 'Admin\PrinterController@index')
    ->name('admin.printers');
// редактирование
Route::get('/admin/printers/update/{id}', 'Admin\PrinterController@updateShow')
    ->name('admin.printers.update.get')
    ->where('id', '[0-9]+');
Route::post('/admin/printers/update/{id}', 'Admin\PrinterController@update')
    ->name('admin.printers.update.post')
    ->where('id', '[0-9]+');