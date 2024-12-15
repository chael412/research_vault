<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthorResource;
use App\Models\Author;
use App\Http\Requests\StoreAuthorRequest;
use App\Http\Requests\UpdateAuthorRequest;

class AuthorController extends Controller
{
    public function getAuthorPaginate()
    {
        $search = request('lastname');
        $sortColumn = request('sortColumn', 'lastname'); // Default sort column
        $sortDirection = request('sortDirection', 'asc'); // Default sort direction

        // Define valid sort columns including department
        $validSortColumns = [
            'firstname',
            'middlename',
            'lastname',
        ];

        // Validate the sort column
        if (!in_array($sortColumn, $validSortColumns)) {
            $sortColumn = 'lastname'; // Fallback to default
        }

        // Start the query with the Author model
        $query = Author::query();

        // Search filter if necessary (search by author's lastname)
        if ($search) {
            $query->where('lastname', 'like', "%$search%");
        }

        // Execute the orderBy clause
        $authors = $query->orderBy($sortColumn, $sortDirection)->paginate(15);

        // Return the paginated authors in JSON format
        return response()->json($authors);
    }



    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Author/Index", );

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Author/Create", );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAuthorRequest $request)
    {
        try {
            $data = $request->validated();

            Author::create($data);

            return to_route('authors.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error adding author: ' . $e->getMessage()]);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Author $author)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Author $author)
    {
        return inertia('Author/Edit', [
            'author' => new AuthorResource($author),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAuthorRequest $request, Author $author)
    {
        try {
            $data = $request->validated();
            $author->update($data);

            return to_route('authors.index');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error updating author: ' . $e->getMessage()]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Author $author)
    {
        try {
            $author->delete();
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Error deleting author: ' . $e->getMessage()]);
        }
    }
}
