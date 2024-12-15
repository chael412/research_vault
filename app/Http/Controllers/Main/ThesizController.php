<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\ThesizResource;
use App\Models\Author;
use App\Models\Course;
use App\Models\Thesiz;
use App\Http\Requests\StoreThesizRequest;
use App\Http\Requests\UpdateThesizRequest;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;
use Barryvdh\DomPDF\Facade\Pdf;



class ThesizController extends Controller
{
    public function printAllThesis()
    {
        // Retrieve all students with their related strand
        $thesis = Thesiz::with('author', 'course')->get();

        // Load the view and pass the thesis data
        $pdf = PDF::loadView('print_thesis', compact('thesis'))
            ->setPaper('letter', 'landscape'); // Set to letter size and landscape orientation

        // Stream the generated PDF to the browser
        return $pdf->stream('all_thesis.pdf');
    }

    public function getThesizPaginate()
    {
        $search = request('title');
        $sortColumn = request('sortColumn', 'title'); // Default sort column
        $sortDirection = request('sortDirection', 'asc'); // Default sort direction

        // Define valid sort columns including department
        $validSortColumns = [
            'accession_no',
            'title',
            'year',
            'copies',
            'date_process',
            'page_number',
            'created_at',
            // Handle relationships sorting
            'author_lastname', // Alias for author lastname
            'course_name', // Alias for course name
        ];

        // Validate the sort column
        if (!in_array($sortColumn, $validSortColumns)) {
            $sortColumn = 'title'; // Fallback to default
        }

        // Start the query builder
        $query = Thesiz::with('author', 'course') // Corrected to match relationship methods
            ->when($search, function ($query) use ($search) {
                return $query->where('title', 'like', '%' . $search . '%');
            });

        // If sorting by authors, join the authors table
        if ($sortColumn === 'author_lastname') {
            $query->join('authors', 'thesizs.author_id', '=', 'authors.id')
                ->select('thesizs.*', 'authors.lastname as author_lastname');
        }

        // If sorting by courses, join the courses table
        if ($sortColumn === 'course_name') {
            $query->join('courses', 'thesiz.course_id', '=', 'courses.id')
                ->select('thesiz.*', 'courses.name as course_name');
        }

        // Execute the orderBy clause, ensuring that the correct alias is used for sorting
        $students = $query->orderBy(
            $sortColumn === 'author_lastname' ? 'authors.lastname' :
            ($sortColumn === 'course_name' ? 'courses.name' : $sortColumn),
            $sortDirection
        )->paginate(15);

        return response()->json($students);
    }

    public function showThesis($id)
    {
        // Find the thesis by ID
        $thesiz = Thesiz::with('author', 'course')->findOrFail($id);

        // Return the data using ThesizResource for structured API response
        return new ThesizResource($thesiz);
    }


    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Thesiz/Index", );
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $courses = Course::query()->orderBy('course_name', 'asc')->get();
        $authors = Author::all();


        return inertia("Thesiz/Create", [
            'courses' => $courses,
            'authors' => $authors,
        ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreThesizRequest $request)
    {
        $data = $request->validated();

        if (!$request->hasFile('files') || !$request->file('files')->isValid()) {
            return back()->withErrors(['files' => 'Invalid or missing file upload.']);
        }


        if ($request->hasFile('files')) {
            $file = $request->file('files');
            $filePath = Str::random() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('thesis'), $filePath);

            $data['files'] = 'thesis/' . $filePath;
        }

        Thesiz::create($data);

        return redirect()->route('thesis.index')->with('success', 'Thesis added successfully!');
    }


    /**
     * Display the specified resource.
     */

    public function show($id)
    {
        // Find the thesis by ID with related author and course
        $thesiz = Thesiz::with('author', 'course')->findOrFail($id);


        // Return the data using Inertia
        return inertia('Thesiz/Show', [
            'thesiz' => $thesiz,

        ]);
    }





    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $thesiz = Thesiz::with('author', 'course')->findOrFail($id);
        $courses = Course::query()->orderBy('course_name', 'asc')->get();
        $authors = Author::all();

        // Return the data using Inertia
        return inertia('Thesiz/Edit', [
            'thesiz' => $thesiz,
            'courses' => $courses,
            'authors' => $authors,

        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(UpdateThesizRequest $request, $id)
    {
        $thesis = Thesiz::findOrFail($id); // Use manual lookup if binding fails.

        // Get validated data
        $data = $request->validated();

        // Check if a new file is uploaded
        if ($request->hasFile('files')) {
            // If the thesis already has a file, delete the old one
            if ($thesis->files && file_exists(public_path($thesis->files))) {
                unlink(public_path($thesis->files));
            }

            // Upload the new file
            $file = $request->file('files');
            $filePath = Str::random() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('thesis'), $filePath);
            $data['files'] = 'thesis/' . $filePath; // Add new file path to data
        } else {
            // If no new file is uploaded, keep the old file value
            $data['files'] = $thesis->files;
        }

        // Update the thesis record with the new data
        $thesis->update($data);

        return redirect()->route('thesis.index')->with('success', 'Thesis updated successfully!');
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Fetch the thesis manually if model binding fails
        $thesiz = Thesiz::findOrFail($id);

        // Delete the associated file if it exists
        if ($thesiz->files && file_exists(public_path($thesiz->files))) {
            unlink(public_path($thesiz->files));
        }

        // Delete the thesis record
        $thesiz->delete();

        return redirect()->route('thesis.index')->with('success', 'Thesis deleted successfully!');
    }

}
