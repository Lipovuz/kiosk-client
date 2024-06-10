<?php
namespace App\Http\Middleware;

use App\Db\Models\User;
use Closure;

/**
 * Class CheckBlockedUser
 * Перехват заблокированных пользователей
 *
 * @package App\Http\Middleware
 */
class CheckBlockedUser
{
    /**
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (auth()->check() && auth()->user()->status == User::STATUS_BLOCK) {
            auth()->logout();
            $message = 'Your account has been suspended. Please contact administrator.';
            return redirect()->route('login', app()->getLocale())->withMessage($message);
        }
        return $next($request);
    }
}
