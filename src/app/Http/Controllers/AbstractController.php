<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;

abstract class AbstractController extends Controller
{
    use DispatchesJobs, ValidatesRequests;

    /**
     * Метод-конструктор редиректа с сообщением (хелпер)
     * - автоматически добавляет в параметры роута текущую "Локаль" первым параметром
     * @param string $route
     * @param string $message
     * @param array $parameters
     * @return RedirectResponse
     */
    protected function redirect(string $route, string $message = '', $parameters = []): RedirectResponse
    {
        switch (true) {
            case !$parameters:
                $parameters = app()->getLocale();
                break;
            case is_array($parameters):
                $parameters = array_merge([app()->getLocale()], $parameters);
                break;
            default:
                $parameters = [app()->getLocale(), $parameters];
                break;
        }
        $response = redirect()->route($route, $parameters);
        if ($message) {
            $response->withMessage($message);
        }
        return $response;
    }
}
