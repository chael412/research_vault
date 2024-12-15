<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Course>
 */
class CourseFactory extends Factory
{
    protected static $courses = [
        ['course_name' => 'Master of Arts in Industrial Education', 'acronym' => 'MAIE'],
        ['course_name' => 'Master of Arts in Education-Major in Educational Management', 'acronym' => 'MAED'],
        ['course_name' => 'Bachelor of Science in Architecture', 'acronym' => 'BSARCH'],
        ['course_name' => 'Bachelor of Science in Industrial Technology', 'acronym' => 'BSINDT'],
        ['course_name' => 'Bachelor of Science in Information Technology', 'acronym' => 'BSIT'],
        ['course_name' => 'Bachelor of Science in Electrical Engineering', 'acronym' => 'BSEE'],
        ['course_name' => 'Bachelor of Science in Civil Engineering', 'acronym' => 'BSCE'],
        ['course_name' => 'Bachelor of Science in Nursing', 'acronym' => 'BSN'],
        ['course_name' => 'Bachelor of Science in Midwifery', 'acronym' => 'BSM'],
        ['course_name' => 'Bachelor of Secondary Education', 'acronym' => 'BSE'],
        ['course_name' => 'Bachelor of Technology and Livelihood Education', 'acronym' => 'BTLED'],
        ['course_name' => 'Bachelor of Technical Vocational Teacher Education', 'acronym' => 'BTVTED'],
        ['course_name' => 'Bachelor of Science in Psychology', 'acronym' => 'BSPsych'],
        ['course_name' => 'Bachelor of Physical Education', 'acronym' => 'BPED'],
    ];

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $course = array_shift(self::$courses);

        return [
            'course_name' => $course['course_name'],
            'acronym' => $course['acronym'],
        ];
    }
}
