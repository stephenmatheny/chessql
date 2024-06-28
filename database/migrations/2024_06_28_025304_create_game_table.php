<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('game', function (Blueprint $table) {
            $table->id();
            $table->enum('result', ['white_win', 'black_win', 'draw'])->notNull();
            $table->timestamps();
        });

        Schema::create('player_game', function (Blueprint $table) {
            $table->id();
            $table->foreignId('game_id')->constrained('game')->onDelete('cascade');
            $table->foreignId('user_id')->constrained('user')->onDelete('cascade');
            $table->enum('color', ['white', 'black']);
            $table->timestamps();
        });

        Schema::create('rating', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('user')->onDelete('cascade');
            $table->foreignId('game_id')->constrained('game')->onDelete('cascade');
            $table->integer('rating_before');
            $table->integer('rating_after');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game');
        Schema::dropIfExists('player_game');
        Schema::dropIfExists('rating');
    }
};
