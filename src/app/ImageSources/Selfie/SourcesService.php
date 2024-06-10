<?php

namespace App\ImageSources\Selfie;

use App\Facades\AppImage;
use App\ImageSources\ImageDto;
use App\Services\FileSyncService\FileSyncException;
use App\Services\KioskService;

/**
 * Изображения через wi-fi и сайт
 *
 * Class SourcesService
 */
class SourcesService
{

    /* @var KioskService */
    protected KioskService $kioskService;

    /**
     * Градус поворота фото
     * @var int
     */
    protected int $rotateImage;

    /**
     * путь к директории с селфи
     * @var string
     */
    public string $pathBySelfie;

    /**
     * путь к директории с фото через wifi
     * @var string
     */
    public string $pathByWiFi;

    /* @var ImageDto[] */
    private array $imageDtoCollection = [];

    /**
     * SourcesService constructor.
     * @param KioskService $kioskService
     * @param string $pathBySelfie
     * @param string $pathByWiFi
     * @param int $rotateImage
     */
    public function __construct(KioskService $kioskService, string $pathBySelfie, string $pathByWiFi, int $rotateImage)
    {
        $this->kioskService = $kioskService;
        $this->pathBySelfie = $pathBySelfie;
        $this->pathByWiFi = $pathByWiFi;
        $this->rotateImage = $rotateImage;
    }

    /**
     * Сканирование папки изображений
     */
    public function scanImages(string $path): bool
    {
        try {
            if (file_exists($path)) {
                // итератор файловой системы
                $iterator = new \RecursiveIteratorIterator(
                    new \RecursiveDirectoryIterator($path),
                    \RecursiveIteratorIterator::SELF_FIRST
                );

                foreach ($iterator as $file) {
                    /* @var \SplFileInfo $file */
                    // файл + доступен к чтению
                    if (!$file->isFile() || !$file->isReadable()) {
                        continue;
                    }

                    $this->setImageDto($file->getPathname(), time());
                }
            }
            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Установка фото
     *
     * @param string $path
     * @param int $createdAt
     */
    public function setImageDto(string $path, int $createdAt)
    {
        $imageDto = new ImageDto();
        $imageDto->path = realpath($path);
        $imageDto->thumbUri = $path;
        $imageDto->originalUri = $path;
        $imageDto->brandId = $this->kioskService->getDefaultBrandId();
        $imageDto->createAt = $createdAt;

        $this->imageDtoCollection[]=$imageDto;
    }

    /**
     * Сохранение селфи
     *
     * @param array $images
     * @param $pathDir
     * @return bool
     */
    public function saveSelfie(array $images, $pathDir): bool
    {
        $i = 1;

        $dirPath = str_replace(
            '/',
            DIRECTORY_SEPARATOR,
            $pathDir
        );
        try {
            $this->checkDirByDirPath($dirPath);

            foreach ($images as $originImage) {
                $time = time();
                $path = $dirPath . DIRECTORY_SEPARATOR . date("Y-m-d_H:i:s", $time) . '_' . $i . '.jpg';
                $data = explode( ',', $originImage);
                AppImage::make(base64_decode($data[1]))
                    ->rotate($this->rotateImage)
                    ->save($path);

                $i++;

                $this->setImageDto($path, $time);
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Сохранение фото
     *
     * @param array $images
     * @param $pathDir
     * @return bool
     */
    public function saveImage(array $images, $pathDir): bool
    {
        $i = 1;

        $dirPath = str_replace(
            '/',
            DIRECTORY_SEPARATOR,
            $pathDir
        );
        try {
            $this->checkDirByDirPath($dirPath);

            foreach ($images as $originImage) {
                $time = time();
                $path = $dirPath . DIRECTORY_SEPARATOR . date("Y-m-d_H:i:s", $time) . '_' . $i . '.jpg';

                AppImage::make($this->base64decode($originImage))
                    ->save($path);

                $i++;
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Расшифровка
     *
     * @param string $base64
     * @return false|string
     */
    protected function base64decode(string $base64)
    {
        $data = explode( ',', $base64);
        return base64_decode($data[1]);
    }

    /**
     * Очистить директорию с фото
     */
    public function clearImagesViaWiFi(): bool
    {
        try {
            $files = array_diff(scandir($this->pathByWiFi), ['.', '..']);
            foreach ($files as $file) {
                unlink($this->pathByWiFi . DIRECTORY_SEPARATOR . $file);
            }

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Подготовка данных для выдачи
     *
     * @return array
     */
    public function jsonSerialize(): array
    {
        $data = [
            'images' => [],
            'total' => count($this->imageDtoCollection),
        ];
        foreach ($this->imageDtoCollection as $imageDto) {
            $data['images'][] = $imageDto->toArray();
        }

        return $data;
    }

    /**
     * Актуализация каталога
     * - создание если нет
     * - проверка прав
     * ..
     * @param string $dirPath
     * @throws FileSyncException
     */
    protected function checkDirByDirPath(string $dirPath): void
    {
        if (file_exists($dirPath)) {
            if (!is_writable($dirPath)) {
                throw new FileSyncException("<$dirPath> не доступен для записи");
            }
            return;
        }
        if (!mkdir($dirPath , 0777 , true)) {
            throw new FileSyncException("<$dirPath> не удалось создать");
        }
    }
}