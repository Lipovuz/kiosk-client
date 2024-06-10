<?php
namespace App\Providers;

use App\Db\Models\Brand\Brand;
use App\Db\Models\Kiosk\Kiosk;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     * @var array
     */
    protected $policies = [];

    /**
     * Register any authentication / authorization services.
     * @return void
     */
    public function boot()
    {
        //
    }
}
