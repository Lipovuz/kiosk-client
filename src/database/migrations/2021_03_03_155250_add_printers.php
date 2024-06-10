<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPrinters extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Заказы киоска
         */
        Schema::create('printers', function (Blueprint $table) {
            $table->id();
            $table->string('kiosk_identity')
                ->comment('ID киоска');
            $table->smallInteger('model_id')
                ->comment('ID модели принтера');
            $table->boolean('is_real_print')
                ->default(true)
                ->comment('Флаг - выполнять печать, false - отладка');

            // параметры для CUPS
            $table->string('cups_name')
                ->comment('Имя принтера в CUPS');
            $table->string('cups_media')
                ->comment('Носитель для CUPS');
            $table->integer('cups_padding_left')
                ->comment('левый отступ в пикселах');
            $table->integer('cups_padding_right')
                ->comment('правый отступ в пикселах');
            $table->integer('cups_padding_top')
                ->comment('верхний отступ в пикселах');
            $table->integer('cups_padding_bottom')
                ->comment('нижний отступ в пикселах');
            $table->boolean('cups_laminate')
                ->comment('Флаг - включить ламинацию');
            $table->integer('calibrate_offset_x')
                ->comment('калибровка - смещение по горизонтали пикселах');
            $table->integer('calibrate_offset_y')
                ->comment('калибровка - смещение по вертикали пикселах');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('printers');
    }
}
