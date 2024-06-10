<?php
namespace App\Connectors\Acquiring\CommandMessage;

/**
 * Class UploadCommand
 *
 * upload – служебная команда для сверки итогов (синхронизации продаж за
 *          банковский день между терминалом и процессингом). Работает в системах PAX
 *          (Inpas), Asseco и Сбербанк. Должна вызываться раз в сутки автоматически, для
 *          этого в cron прописан запуск скрипта controller/util/upload_payments.py . Есть
 *          шанс, что этот функционал пока не работает в новой сборке из-за изменения
 *          порядка запуска скриптов.
 *
 * Параметры команды не определенны окончательно
 */
class UploadCommand extends AbstractCommandMessage
{
    /**
     * @var string
     */
    protected string $command = 'upload';
}
