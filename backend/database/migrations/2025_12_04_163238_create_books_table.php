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
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author_name');
            $table->bigInteger('pages');
            $table->string('cover_path'); 
            $table->text('review');
            $table->enum('status', ['unread', 'reading', 'read', 'abandoned'])->default('unread');
            $table->date('started_date');
            $table->date('finished_date');
            $table->bigInteger('current_page');
            $table->decimal('rating', 2, 1)->nullable();
            $table->string('genre')->nullable();
            
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
