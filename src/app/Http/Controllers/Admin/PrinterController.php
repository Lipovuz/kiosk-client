<?php
namespace App\Http\Controllers\Admin;

use App\Db\Criteria\PrinterCriteria;
use App\Db\Managers\PrinterManager;
use App\Http\Requests\Printer\UpdateForm;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Controller;
use Illuminate\View\View;

/**
 * Class PrinterController
 * @package App\Http\Controllers\Admin
 */
class PrinterController extends Controller
{

    /* @var PrinterManager */
    protected PrinterManager $manager;

    /**
     * PrinterManager constructor.
     * @param PrinterManager $manager
     */
    public function __construct(PrinterManager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @return Application|Factory|View
     */
    public function index()
    {
        $printers = (new PrinterCriteria())->get();

        return view('admin.printer.index', ['printers' => $printers]);
    }

    /**
     * Редактирование принтера - форма
     * @param $id
     * @return Application|Factory|View
     * @throws NotFound
     */
    public function updateShow($id)
    {
        $printer = $this->manager->getPrinter((int) $id);
        return view('admin.printer.update', [
            'printer' => $printer
        ]);
    }

    /**
     * Редактирование принтера - обработка
     * @param UpdateForm $request
     * @return RedirectResponse
     * @throws NotFound
     */
    public function update($id, UpdateForm $request): RedirectResponse
    {
        $model = $this->manager->getPrinter((int) $id);
        if ($this->manager->update($model, $request)) {
            $message = 'Принтер успешно изменен';
        } else {
            $message = 'Операция закончилась неудачей';
        }
        return redirect()->route('admin.printers');
    }
}
