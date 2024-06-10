<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Brands extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        /**
         * Бренды
         */
        Schema::create('brands', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Наименование');
            $table->string('description')->comment('Описание');
            $table->timestamps();
        });

        /**
         * Рамки Брендов
         */
        Schema::create('brand_frame_images', function (Blueprint $table) {
            $table->id();
            $table->integer('brand_id')->comment('ID Бренда');
            $table->integer('image_size_id')->comment('ID размера из справочника');
            $table->string('local_path')->comment('Локальный путь к изображению');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brands');
        Schema::dropIfExists('brand_frame_images');
    }
}
