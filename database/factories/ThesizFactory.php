<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Thesiz>
 */
class ThesizFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'accession_no' => $this->faker->unique()->numerify('########'),
            'author_id' => $this->faker->numberBetween(1, 10),
            'title' => $this->faker->sentence(), // Random title
            'year' => $this->faker->numberBetween(2000, 2024), // Random year
            'copies' => $this->faker->numberBetween(1, 10), // Random number of copies
            'date_process' => $this->faker->optional()->date(), // Optional date
            'page_number' => $this->faker->optional()->numberBetween(50, 500), // Optional page number
            'course_id' => $this->faker->numberBetween(1, 14),
            'files' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ];
    }
}
