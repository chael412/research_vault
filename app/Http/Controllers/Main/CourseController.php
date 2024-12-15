<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\CourseResource;
use App\Models\Course;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;

class CourseController extends Controller
{
    public function getCourses()
    {
        try {
            $courses = Course::orderBy('course_name', 'asc')->get();
            return response()->json(['courses' => $courses], 200);

        } catch (\Exception $e) {
            return response()->json(['message' => 'Error: ' . $e->getMessage()], 404);
        }
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Course/Index", );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Course/Create");

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreCourseRequest $request)
    {
        try {
            $data = $request->validated();

            Course::create($data);

            return to_route('courses.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error creating course: ' . $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Course $course)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Course $course)
    {
        return inertia('Course/Edit', [
            'course' => new CourseResource($course),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateCourseRequest $request, Course $course)
    {
        try {
            $data = $request->validated();
            $course->update($data);

            return to_route('courses.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error updating course: ' . $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Course $course)
    {
        try {
            $course->delete();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error deleting course: ' . $e->getMessage()]);
        }
    }
}
