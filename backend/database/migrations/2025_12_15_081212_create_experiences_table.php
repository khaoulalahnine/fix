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
        Schema::create('experiences', function (Blueprint $table) {
    $table->id();
    $table->foreignId('provider_id')->constrained()->onDelete('cascade');
    $table->string('title');
    $table->text('description');
    $table->decimal('price', 10, 2);
    $table->integer('duration_minutes')->nullable(); // 120 for 2 hours
    $table->integer('max_people')->default(1);
    $table->json('included_items')->nullable(); // What's included
    $table->json('photos')->nullable();
    $table->boolean('is_active')->default(true);
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('experiences');
    }
};
