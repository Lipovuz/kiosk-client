<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FixBrandFrame extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('brand_frame_images', function (Blueprint $table) {
            $table->tinyInteger('photo_orientation_id')
                ->nullable(true)
                ->comment('ID ориентации фотографии');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('brand_frame_images', function (Blueprint $table) {
            $table->dropColumn('photo_orientation_id');
        });
    }
}
