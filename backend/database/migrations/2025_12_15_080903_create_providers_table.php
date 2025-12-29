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
        Schema::create('providers', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->enum('type', ['artisan', 'guide', 'restaurant']);
    $table->string('business_name');
    $table->text('description');
    $table->text('story')->nullable(); // For video/long description
    $table->string('location');
    $table->string('city');
    $table->json('languages')->nullable(); // ['fr', 'en', 'ar']
    $table->string('certification')->nullable(); // File path
    $table->decimal('authentic_score', 3, 2)->default(0); // 0.00 to 5.00
    $table->boolean('is_verified')->default(false);
    $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
    $table->timestamps();
});
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('providers');
    }
};
