<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('thesizs', function (Blueprint $table) {
            $table->id();
            $table->string('accession_no', 100)->unique();
            $table->foreignId('author_id')->constrained('authors');
            $table->string('title');
            $table->integer('year');
            $table->integer('copies');
            $table->date('date_process')->nullable();
            $table->integer('page_number')->nullable();
            $table->foreignId('course_id')->constrained('courses');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('thesizs');
    }
};
