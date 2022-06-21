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
        Schema::create('kawasan_tutupan', function (Blueprint $table) {
            $table->id();
            $table->foreignId('kawasan_id')->constrained('kawasan')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('tutupan_id')->constrained('tutupan')
                ->onDelete('cascade')->onUpdate('cascade');
            $table->decimal('luas', 10, 2);
            $table->decimal('presentase', 5, 2);
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
        Schema::dropIfExists('kawasan_tutupan');
    }
};
