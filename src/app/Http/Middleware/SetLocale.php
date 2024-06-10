<?php
namespace App\Http\Middleware;

/**
 * Class SetLocale
 * @package App\Http\Middleware
 */
class SetLocale
{
    public function handle(\Illuminate\Http\Request $request, \Closure $next)
    {
        app()->setLocale($request->segment(1));
        return $next($request);
    }
}
