<?php
namespace App\Services\Printing;

use App\Db\Models\Printer;

/**
 * Class CupsCommand
 *
 * Билдер команд для CUPS
 *
 * lp -d %%printer_name%% -o media=Custom.100x127mm -o
 * page-ranges=1 -o page-border=none -o page-left=0 -o page-right=0 -o page-top=0 -o page-bottom=0
 * %%file_path%%
 *
 * $defaultPrintCmd =
 * lp -d %printer_name%
 * -o "media=%media% StpiShrinkOutput=Crop page-ranges=1 page-border=none page-left=%left% page-right=%right% page-top=%top% page-bottom=%bottom% %printer_options%"
 * %file_path%';
 *
 * lp -d {{printer_name}} -o "media=Custom.4x6in page-ranges=1 page-border=none page-left=0 page-right=0 page-top=0 page-bottom=0" {{file_path}}
 * lp -d RX1              -o "media=Custom.4x6in page-ranges=1 page-border=none page-left=0 page-right=0 page-top=0 page-bottom=0" /home/lomobil/123.jpg
 */
class CupsCommand
{
    private const PRINT_COMMAND_PATTERN =
        'lp -d {{printerName}} -o "' .
        'media={{media}} page-ranges=1 page-border=none' .
        ' page-left={{pageLeft}} page-right={{pageRight}} page-top={{pageTop}} page-bottom={{pageBottom}}' .
        ' {{extendOptions}}" {{filePath}}';


    /**
     * Команда печати файла
     * @param Printer $printerModel
     * @param string $imgFilePath
     * @return string
     */
    public function printCommand(Printer $printerModel, string $imgFilePath): string
    {
        $command = self::PRINT_COMMAND_PATTERN;

        $extendOptions = '';
        if ($printerModel->cups_laminate && $printerModel->getPrinter()->cupsLaminateOption) {
            $extendOptions = $printerModel->getPrinter()->cupsLaminateOption;
        }

        $command = str_replace(
            [
                '{{printerName}}',
                '{{media}}',
                '{{pageLeft}}',
                '{{pageRight}}',
                '{{pageTop}}',
                '{{pageBottom}}',
                '{{extendOptions}}',
                '{{filePath}}',
            ],
            [
                $printerModel->cups_name,
                $printerModel->cups_media,
                $printerModel->cups_padding_left,
                $printerModel->cups_padding_right,
                $printerModel->cups_padding_top,
                $printerModel->cups_padding_bottom,
                $extendOptions,
                $imgFilePath,
            ],
            $command
        );
        return $command;
    }
}
