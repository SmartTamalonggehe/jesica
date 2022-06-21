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
        Schema::create('kawasan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('koordinat_id')->constrained('koordinat')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->string('nm_kawasan', 100);
            $table->string('warna', 10);
            $table->decimal('luas', 10, 3);
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
        Schema::dropIfExists('kawasan');
    }
};
