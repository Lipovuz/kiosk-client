<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Class add_column_synchronized_at_to_table_orders
 */
class addColumnSynchronizedAtToTableOrders extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('synchronized_at')
                ->default(0)
                ->nullable(true)
                ->comment('время синхронизации заказа с ядром (unix timestamp)');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropColumn('synchronized_at');
        });
    }
}
