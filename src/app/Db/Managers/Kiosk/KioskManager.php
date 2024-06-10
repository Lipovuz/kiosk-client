<?php
namespace App\Db\Managers\Kiosk;

use App\Db\Criteria\Kiosk\KioskCriteria;
use App\Db\Models\Kiosk\Kiosk;
use App\Db\Models\Kiosk\KioskImageSource;
use App\Db\Models\Kiosk\KioskProduct;
use App\Http\Requests\Kiosk\CreateForm;
use App\Http\Requests\Kiosk\ProductsUpdateForm;
use App\Http\Requests\Kiosk\UpdateForm;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Lomobil\Common\DrIsland\Dto\KioskDto;
use Lomobil\Common\DrIsland\Reference\ImageSourceReference;

/**
 * Class KioskManager
 */
class KioskManager
{
    /**
     * @var Kiosk|null
     */
    protected ?Kiosk $lastModel = null;

    /**
     * @return Kiosk|null
     */
    public function getLastModel(): ?Kiosk
    {
        return $this->lastModel;
    }

    /**
     * @param int $id
     * @return Kiosk|\Illuminate\Database\Eloquent\Model|object
     * @throws NotFound
     */
    public function getKiosk(int $id): Kiosk
    {
        $model = (new KioskCriteria())->byId($id)->first();
        if (!$model) {
            throw new NotFound('Киоск не найден');
        }
        return $model;
    }

    /**
     * @param CreateForm $createForm
     * @param ProductsUpdateForm $productForm
     * @return bool
     */
    public function defaultCreate(CreateForm $createForm, ProductsUpdateForm $productForm): bool
    {
        DB::beginTransaction();

        if (
            $this->create($createForm) &&
            $this->setProducts($this->lastModel, $productForm) &&
            $this->setImageSources($this->lastModel, [$this->lastModel->getLocationType()->defaultImageSource])
        ) {
            DB::commit();
            return true;
        } else {
            DB::rollBack();
            return false;
        }
    }

    /**
     * @param Kiosk $kiosk
     * @param UpdateForm $updateForm
     * @param ProductsUpdateForm $productForm
     * @return bool
     */
    public function defaultUpdate(Kiosk $kiosk, UpdateForm $updateForm, ProductsUpdateForm $productForm): bool
    {
        DB::beginTransaction();

        if (
            $this->update($kiosk, $updateForm) &&
            $this->setProducts($this->lastModel, $productForm) &&
            $this->setImageSources($this->lastModel, [$this->lastModel->getLocationType()->defaultImageSource])
        ) {
            DB::commit();
            return true;
        } else {
            DB::rollBack();
            return false;
        }
    }

    /**
     * @param CreateForm $createForm
     * @return bool
     */
    public function create(CreateForm $createForm): bool
    {
        $model = new Kiosk();
        if ($createForm->secure_key) {
            $model->secure_key = $createForm->secure_key;
        }
        return $this->update($model, $createForm);
    }

    /**
     * @param Kiosk $model
     * @param UpdateForm $updateForm
     * @return bool
     */
    public function update(Kiosk $model, UpdateForm $updateForm): bool
    {
        $data = $updateForm->validated();
        $this->lastModel = $model;
        $this->lastModel->fill($data);
        return $this->lastModel->save();
    }

    /**
     * Установка продуктов киоска
     * @param Kiosk $kiosk
     * @param ProductsUpdateForm $updateForm
     * @return bool
     */
    public function setProducts(Kiosk $kiosk, ProductsUpdateForm $updateForm): bool
    {
        $productsModels = $updateForm->getProductsModels();
        try {
            DB::transaction(function () use($kiosk, $productsModels) {
                // обновляем существующие источники
                foreach ($kiosk->products as $existProduct) {
                    foreach ($productsModels as $key => $requestProduct) {
                        if ($existProduct->product_id == $requestProduct->product_id) {
                            $existProduct->fill($requestProduct->attributesToArray());
                            $existProduct->save();
                            unset($productsModels[$key]);
                            continue 2;
                        }
                    }
                    $existProduct->delete();
                }
                // добавляем новые источники
                foreach ($productsModels as $requestProduct) {
                    $kiosk->products()->save(
                        new KioskProduct($requestProduct->attributesToArray())
                    );
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kiosk, $updateForm, $exception]);
            return false;
        }
        return true;
    }

    /**
     * Установка Источников изображений
     * @param Kiosk $kiosk
     * @param ImageSourceReference[] $imageSources
     * @return bool
     */
    public function setImageSources(Kiosk $kiosk, array $imageSources = []): bool
    {
        try {
            DB::transaction(function () use($kiosk, $imageSources) {
                // Получаем ID источников
                $imageSourceIds = array_map(function (ImageSourceReference $imageSource){
                    return $imageSource->value;
                }, $imageSources);

                // обновляем существующие источники
                foreach ($kiosk->imageSources as $imageSourceModel) {
                    if (!in_array($imageSourceModel->image_source_id, $imageSourceIds)) {
                        $imageSourceModel->delete();
                    } else {
                        unset($imageSourceIds[array_search($imageSourceModel->image_source_id, $imageSourceIds)]);
                    }
                }

                // добавляем новые источники
                foreach ($imageSourceIds as $imageSourceId) {
                    $kiosk->imageSources()->save(
                        new KioskImageSource(['image_source_id' => $imageSourceId])
                    );
                }
            });
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kiosk, $imageSources, $exception]);
            return false;
        }
        return true;
    }

    /**
     * @param KioskDto $kioskDto
     * @param string $secure_key
     * @return bool
     */
    public function createFromInitialize(KioskDto $kioskDto, string $secure_key): bool
    {
        try {
            $model = Kiosk::createFromDto($kioskDto);
            $model->secure_key = $secure_key;

            return $model->save();
        } catch (\Exception $exception) {
            Log::error($exception->getMessage(), [$kioskDto, 'secure_key' => $secure_key]);
            return false;
        }
    }
}
