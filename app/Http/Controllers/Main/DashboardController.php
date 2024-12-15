<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Models\Author;
use App\Models\Course;
use App\Models\Thesiz;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function getStats()
    {
        return [
            'totalThesis' => Thesiz::count(),
            'totalCourses' => Course::count(), // Adjust if needed for filtering users
            'totalAuthors' => Author::count(),
        ];
    }

    public function index()
    {
        // Call getStats method to retrieve the statistics
        $stats = $this->getStats();


        // Pass the statistics to the Inertia view
        return inertia('Dashboard', [
            'stats' => $stats
        ]);
    }
}
