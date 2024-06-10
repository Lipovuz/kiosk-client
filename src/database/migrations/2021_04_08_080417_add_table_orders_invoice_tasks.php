<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class AddTableOrdersInvoiceTasks
 */
class AddTableOrdersInvoiceTasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Чеки
         */
        Schema::create('orders_invoice_tasks', function (Blueprint $table) {
            $table->id();
            $table->integer('order_id')->comment('ID Заказа');
            $table->integer('state_id')->comment('Состояние чека - статус');
            $table->string('error')->comment('некая ошибка');
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
        Schema::dropIfExists('orders_invoice_tasks');
    }
}
