<?php

namespace Database\Seeders;

use App\Models\Thesiz;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThesizSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Thesiz::factory()->count(60)->create();
    }
}
