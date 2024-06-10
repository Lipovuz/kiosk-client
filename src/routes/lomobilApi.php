<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API для Киосков Lomobil
| Специфика:
| - тело запроса JSON
| - тело запроса всегда представлено \Lomobil\Common\DrIsland\AbstractMessageDto
| - аутентификация построена на \App\Http\Middleware\LomobilApiAuth
|   СЛЕДОВАТЕЛЬНО ТРЕБУЕТ наличия ТЕЛА запроса, только методы POST/PUT
|
|
|--------------------------------------------------------------------------
*/

Route::prefix('api')->group(function() {


});



