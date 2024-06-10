<?php

namespace App\Http\Controllers\Api\Client\Source;

use App\Http\Controllers\AbstractApiController;
use App\Services\FileSyncService\FileSyncException;
use App\ImageSources\Mail\MailService;
use PhpImap\Exceptions\ConnectionException;
use PhpImap\Exceptions\InvalidParameterException;

/**
 * Загрузка по e-mail
 *
 * Class MailController
 */
class MailController extends AbstractApiController
{

    /**
     * Получения изображений с почты
     *
     * @throws InvalidParameterException
     * @throws ConnectionException
     * @throws FileSyncException
     */
    public function request(MailService $mailService): array
    {
        sleep(15);
        $mailService->getPhoto();

        return $mailService->jsonSerialize();
    }
}
