<?php

namespace App\ImageSources\Mail;

use App\Facades\AppImage;
use App\ImageSources\ImageDto;
use App\Services\FileSyncService\FileSyncException;
use App\Services\KioskService;
use PhpImap\Exceptions\ConnectionException;
use PhpImap\Exceptions\InvalidParameterException;
use PhpImap\IncomingMail;
use PhpImap\Mailbox;

/**
 * Сервис для работы с почтой
 */
class MailService
{

    /* @const - Статус при провале */
    private const STATUS_FAIL = 'fail';

    /* @const - Статус при успехе */
    private const STATUS_DONE = 'done';

    /* @const - Статус фото не найдено */
    private const STATUS_NOT_FOUND = 'notfound';

    /* @var string */
    protected string $host;

    /* @var string */
    protected string $user;

    /* @var string */
    protected string $password;

    /* @var string */
    protected string $dirPath;

    /* @var string */
    protected string $status = self::STATUS_DONE;

    /* @var ImageDto[] */
    protected array $imageDtoCollection = [];

    /* @var KioskService */
    protected KioskService $kioskService;

    /**
     * @param KioskService $kioskService
     * @param string $host
     * @param string $user
     * @param string $password
     * @param string $dirPath
     */
    public function __construct(KioskService $kioskService, string $host, string $user, string $password, string $dirPath)
    {
        $this->kioskService = $kioskService;
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->dirPath = $dirPath;
    }

    /**
     * Получения изображений с почты
     *
     * @throws ConnectionException
     * @throws InvalidParameterException
     * @throws FileSyncException
     */
    public function getPhoto(): void
    {
        $mailbox = new Mailbox(
            $this->host, // IMAP папка сервера и почтового ящика
            $this->user, // Имя пользователя для ранее настроенного почтового ящика
            $this->password, // Пароль для ранее настроенного имени пользователя
        );
        try {
            // Получение списка писем
            $mailsIds = $mailbox->searchMailbox();
        } catch(ConnectionException $ex) {
            throw new ConnectionException("IMAP connection failed: $ex");
        }

        // Если $mailsIds пуст, электронные письма не найдены.
        if(!$mailsIds) {
            $this->status = self::STATUS_NOT_FOUND;
        } else {
            rsort($mailsIds);

            $mail = $mailbox->getMail($mailsIds[0]);

            // Сохранить изображения из письма
            $this->saveAttachmentImage($mail);

            // Удаление прочитаного письма
            $mailbox->deleteMail($mail->id);
        }
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

    /**
     * Сохранения изображения с почты
     *
     * @param IncomingMail $mail
     * @return void
     * @throws FileSyncException
     */
    protected function saveAttachmentImage(IncomingMail $mail): void
    {
        $dirPath = str_replace(
            '/',
            DIRECTORY_SEPARATOR,
            $this->dirPath
        );
        // Проверка директории на существование
        $this->checkDirByDirPath($dirPath);
        // Очистить директорию
        $this->clearImages();

        foreach ($mail->getAttachments() as $attachment) {

            $contents = $attachment->getContents();

            $contentType = $attachment->getFileInfo(FILEINFO_MIME);

            if (!strstr($contentType, 'image')) {
                continue;
            }

            $path = $dirPath . DIRECTORY_SEPARATOR . $attachment->name;
            AppImage::make($contents)
                ->save($path);

            $this->setImageDto($path, time());
        }
    }

    /**
     * Установка фото
     *
     * @param string $path
     * @param int $createdAt
     */
    protected function setImageDto(string $path, int $createdAt)
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
     * Очистить директорию с фото
     */
    protected function clearImages(): bool
    {
        try {
            $files = array_diff(scandir($this->dirPath), ['.', '..']);
            foreach ($files as $file) {
                unlink($this->dirPath . DIRECTORY_SEPARATOR . $file);
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
            'status' => $this->status,
        ];
        foreach ($this->imageDtoCollection as $imageDto) {
            $data['images'][] = $imageDto->toArray();
        }

        return $data;
    }
}