<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Kiosks extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        /**
         * Киоски
         */
        Schema::create('kiosks', function (Blueprint $table) {
            $table->id();

            $table->string('identity')
                ->unique()
                ->comment('Идентификатор');

            $table->string('secure_key')
                ->nullable()
                ->comment('Секретный ключ');

            $table->string('name')
                ->comment('Наименование');

            $table->string('location_description')
                ->nullable()
                ->comment('Местоположение');

            $table->tinyInteger('state_id')
                ->comment('Статус');

            $table->tinyInteger('location_type_id')
                ->comment('Тип размещения');

            $table->tinyInteger('default_brand_id')
                ->nullable()
                ->comment('Бренд по умолчанию');

            $table->timestamp('synchronized_at')
                ->nullable()
                ->comment('Время последней синхронизации');

            $table->timestamps();
        });


        Schema::create('kiosk_image_sources', function (Blueprint $table) {
            $table->id();
            $table->integer('kiosk_id');
            $table->integer('image_source_id')
                ->comment('ID источника изображений (справочник)');
            $table->timestamps();
        });

        Schema::create('kiosk_products', function (Blueprint $table) {
            $table->id();
            $table->integer('kiosk_id');
            $table->smallInteger('product_id')
                ->comment('ID продукта (справочник)');
            $table->integer('cost_penny')
                ->comment('Стоимость в копейках');
            $table->smallInteger('currency_id')
                ->comment('ID валюты (справочник)');
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
        Schema::dropIfExists('kiosks');
        Schema::dropIfExists('kiosk_image_sources');
        Schema::dropIfExists('kiosk_products');
    }
}
