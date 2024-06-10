<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTableKioskFiles extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Файлы
         */
        Schema::create('files_kiosk', function (Blueprint $table) {
            $table->id();
            $table->integer('type')->comment('Тип файла');
            $table->string('name')->comment('Название');
            $table->string('local_path')->comment('Локальный путь');
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
        Schema::dropIfExists('files_kiosk');
    }
}
