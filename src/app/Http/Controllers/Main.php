<?php
namespace App\Http\Controllers;

/**
 * Class Main
 * @package App\Http\Controllers
 */
class Main extends AbstractController
{
    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index()
    {
        return view('main/index');
    }
}
