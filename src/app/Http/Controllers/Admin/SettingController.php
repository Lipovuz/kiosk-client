<?php
namespace App\Http\Controllers\Admin;

use App\Db\Criteria\Kiosk\KioskCriteria;
use App\Services\Kiosk\UpdateKioskService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\Routing\Redirector;
use Illuminate\View\View;

/**
 * Class SettingController
 * @package App\Http\Controllers\Admin
 */
class SettingController extends Controller
{

    /**
     * @return Application|Factory|RedirectResponse|Redirector|View
     */
    public function index()
    {
        $kiosk = (new KioskCriteria())->first();

        if (!$kiosk) {
            return redirect('admin/request');
        }

        return view('admin.index', ['kiosk' => $kiosk]);
    }

    /**
     * @return Application|Factory|RedirectResponse|Redirector|View
     */
    public function phpInfo()
    {
        return view('admin.php-info');
    }

    /**
     * @param UpdateKioskService $service
     * @return Application|RedirectResponse|Redirector
     */
    public function synchronize(UpdateKioskService $service)
    {
        $service->updateKiosk();

        return redirect('admin');
    }
}