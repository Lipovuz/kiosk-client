<?php


namespace App\Http\Controllers\Admin;


use App\Http\Requests\Kiosk\CreateForm;
use App\Services\Kiosk\InitializeService;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Routing\Controller;
use Illuminate\View\View;
use Lomobil\Common\DrIsland\Reference\Accounting\CurrencyReference;
use Lomobil\Common\DrIsland\Reference\Kiosk\LocationTypeReference;
use Lomobil\Common\DrIsland\Reference\Product\ProductReference;

/**
 * Class InitializeController
 * @package App\Http\Controllers\Admin
 */
class InitializeController extends Controller
{

    /**
     * @return Application|Factory|View
     */
    public function request()
    {
        return view('admin.create.connection-request', [
            'locationTypes' => LocationTypeReference::getActiveTitleList(),
            'products'  => ProductReference::getActiveTitleList(),
            'currencies'  => CurrencyReference::getActiveTitleList()
        ]);
    }

    public function sendRequest(CreateForm $createForm, InitializeService $initializeService)
    {
        $initializeService->sendRequest($createForm->getKioskDto());

        return redirect('admin');
    }
}