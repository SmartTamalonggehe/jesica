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
        Schema::create('polygon', function (Blueprint $table) {
            $table->id();
            // foreign key to koordinat
            $table->foreignId('koordinat_id')->constrained('koordinat')->onDelete('cascade')->onDelete('cascade');
            $table->string('nm_polygon', 120);
            $table->string('warna', 50);
            $table->decimal('luas', 15, 2);
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
        Schema::dropIfExists('polygon');
    }
};
