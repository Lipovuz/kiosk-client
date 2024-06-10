<?php
namespace App\Db\Managers\File;

use App\Db\Criteria\Kiosk\FileKioskCriteria;
use App\Db\Models\Kiosk\FilesKiosk;
use App\Services\FileSyncService\Service as FileSyncService;
use Facade\FlareClient\Http\Exceptions\NotFound;
use Illuminate\Database\Eloquent\Model;

/**
 * Class FileManager
 * @package App\Db\Managers\File
 */
class FileManager
{

    /**
     * @var FileSyncService
     */
    private FileSyncService $fileSyncService;

    /**
     * @param FileSyncService $fileSyncService
     */
    public function __construct(FileSyncService $fileSyncService)
    {
        $this->fileSyncService = $fileSyncService;
    }

    /**
     * Поиск файла
     * @param $id
     * @return FileKioskCriteria|Model|object
     * @throws NotFound
     */
    public function getFile($id) : FilesKiosk
    {
        $model = (new FileKioskCriteria())->byId($id)->first();
        if (!$model) {
            throw new NotFound('Файл не найден');
        }
        return $model;
    }

    /**
     * Удаление файла
     * @param FilesKiosk $files
     * @return bool
     */
    public function removeFile(FilesKiosk $files): bool
    {
        try {
            unlink(public_path($files->local_path));
            return $files->delete();

        } catch (\Exception $exception) {
            return false;
        }
    }

    /**
     * @param $local_path
     * @return bool
     * @throws \App\Services\FileSyncService\FileSyncException
     */
    public function saveFile($local_path): bool
    {
        $this->fileSyncService->syncFile($local_path);

        return true;
    }
}
