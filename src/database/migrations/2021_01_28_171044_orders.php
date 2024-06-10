<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Orders extends Migration
{
    /**
     * Run the migrations.
     * @return void
     */
    public function up()
    {
        /**
         * Заказы киоска
         */
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('kiosk_identity')
                ->comment('ID киоска')
                ->index('kioskIdentity');
            $table->smallInteger('currency_id')
                ->comment('Валюта');
            $table->integer('amount_penny')
                ->comment('сума в "копейках"');
            $table->tinyInteger('state_id')
                ->comment('Состояние заказа - статус');
            $table->string('client_email')
                ->comment('Email клиента');
            $table->string('error')
                ->comment('некая ошибка');
            $table->integer('start_at')
                ->comment('время начала (unix timestamp)');
            $table->integer('end_at')
                ->comment('время окончания (unix timestamp)');
            $table->timestamps();
        });

        /**
         * Заказы киоска
         */
        Schema::create('orders_items', function (Blueprint $table) {
            $table->id();
            $table->string('kiosk_identity')
                ->comment('ID киоска');
            $table->integer('order_id')
                ->comment('Заказ');
            $table->integer('product_price_penny')
                ->comment('Стоимость продукта');
            $table->smallInteger('product_id')
                ->comment('Продукт (справочник)');
            $table->smallInteger('product_count')
                ->comment('Количество позиций продукта');
            $table->smallInteger('brand_id')
                ->comment('Бренд');
            $table->integer('total_amount_penny')
                ->comment('стоимость в "копейках" всего элемента заказа');
            $table->boolean('is_success')
                ->comment('флаг - заказ успешно завершен');
            $table->string('error')
                ->comment('некая ошибка');
            $table->string('specific_details')
                ->comment('специфика - путь у файлу изображения');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
        Schema::dropIfExists('orders_items');
    }
}
