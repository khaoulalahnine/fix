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
       Schema::create('restaurants', function (Blueprint $table) {
    $table->id();
    $table->foreignId('provider_id')->constrained()->onDelete('cascade');
    $table->string('cuisine_type'); // Traditional, Fusion, etc.
    $table->integer('capacity');
    $table->json('opening_hours'); // {"monday": "9:00-22:00", ...}
    $table->json('dietary_options')->nullable(); // ['halal', 'vegan', 'gluten_free']
    $table->string('ambiance_video')->nullable();
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurants');
    }
};
