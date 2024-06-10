<?php
namespace App\Db\Managers;

use App\Db\Criteria\PrinterCriteria;
use App\Db\Models\Printer;
use App\Http\Requests\Printer\UpdateForm;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Database\Eloquent\Model;

/**
 * Class PrinterManager
 */
class PrinterManager
{
    /**
     * @var Printer|null
     */
    protected ?Printer $lastModel = null;

    /**
     * @return Printer|null
     */
    public function getLastModel(): ?Printer
    {
        return $this->lastModel;
    }

    /**
     * @param int $id
     * @return Printer|Model|object
     * @throws NotFound
     */
    public function getPrinter(int $id): Printer
    {
        $model = (new PrinterCriteria())->byId($id)->first();
        if (!$model) {
            throw new NotFound('Принтер не найден');
        }
        return $model;
    }

    /**
     * @param Printer $model
     * @param UpdateForm $updateForm
     * @return bool
     */
    public function update(Printer $model, UpdateForm $updateForm): bool
    {
        $data = $updateForm->validated();
        $this->lastModel = $model;
        $this->lastModel->fill($data);
        return $this->lastModel->save();
    }
}
