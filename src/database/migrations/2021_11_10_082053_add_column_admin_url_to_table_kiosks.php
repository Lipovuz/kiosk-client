<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnAdminUrlToTableKiosks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('kiosks', function (Blueprint $table) {
            $table->string('admin_url')
                ->nullable()
                ->comment('Url админки');
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
            $table->dropColumn('admin_url');
        });
    }
}
