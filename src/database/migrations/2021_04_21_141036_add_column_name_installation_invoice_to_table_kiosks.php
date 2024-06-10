<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnNameInstallationInvoiceToTableKiosks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('kiosks', function (Blueprint $table) {
            $table->string('name_installation_invoice')
                ->comment('Название места росположения в чеке');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('kiosks', function (Blueprint $table) {
            $table->dropColumn('name_installation_invoice');
        });
    }
}
