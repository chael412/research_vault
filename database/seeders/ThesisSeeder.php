<?php

namespace Database\Seeders;

use App\Models\Thesis;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ThesisSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Thesis::factory(50)->create();
    }
}
