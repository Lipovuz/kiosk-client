<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddTableKiosksViewSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Настройки киосков
         */
        Schema::create(
            'kiosks_view_settings',
            function (Blueprint $table) {
                $table->id();

                $table->string('kiosk_identity')
                    ->comment('ID киоска');

                $table->integer('type')
                    ->comment('Тип настройки');

                $table->string('value')
                    ->comment('Значение');

                $table->string('name')
                    ->comment('Название поля');

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
        Schema::dropIfExists('kiosks_view_settings');
    }
}
