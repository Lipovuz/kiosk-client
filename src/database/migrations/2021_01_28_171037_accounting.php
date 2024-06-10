<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Accounting extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * Балансы киоска
         */
        Schema::create('balances', function (Blueprint $table) {
            $table->id();
            $table->string('kiosk_identity')
                ->comment('ID киоска');
            $table->tinyInteger('type_id')
                ->comment('Тип (вид) баланса');
            $table->smallInteger('currency_id')
                ->comment('Валюта');
            $table->bigInteger('amount_penny')
                ->comment('Сума в копейках');
            $table->timestamps();
        });

        /**
         * Транзакции киоска
         */
        Schema::create('balance_transactions', function (Blueprint $table) {
            $table->id();
            $table->string('kiosk_identity')
                ->comment('ID киоска')
                ->index('kioskIdentity');
            $table->tinyInteger('type_id')
                ->comment('тип списание/зачисление');
            $table->smallInteger('reason_id')
                ->comment('причина');
            $table->tinyInteger('source_id')
                ->comment('источник операции');
            $table->tinyInteger('user_source')
                ->comment('тип пользователя-инициатора');
            $table->integer('user_id')
                ->comment('ID пользователя (админа)');
            $table->integer('amount_penny')
                ->comment('сума в "копейках"');
            $table->smallInteger('currency_id')
                ->comment('валюта');
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
        Schema::dropIfExists('balances');
        Schema::dropIfExists('balance_transactions');
    }
}
