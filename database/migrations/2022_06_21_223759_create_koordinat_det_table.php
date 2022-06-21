<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('koordinat_det', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')->constrained('koordinat')
                ->onDelete('cascade')->onUpdate('cascade');
            // longitude, latitude
            $table->float('longitude', 12, 8);
            $table->float('latitude', 12, 8);
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
        Schema::dropIfExists('koordinat_det');
    }
};
