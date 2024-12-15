<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ThesizResource extends JsonResource
{
    public static $wrap = false;

    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'accession_no' => $this->accession_no,
            'title' => $this->title,
            'year' => $this->year,
            'copies' => $this->copies,
            'date_process' => $this->date_process ?? null,
            'page_number' => $this->page_number ?? null,
            'author' => new AuthorResource($this->author), // Pass the related Author model
            'course' => new CourseResource($this->course), // Pass the related Course model
            'created_at' => $this->created_at,
            'files' => $this->files ? url('thesis/' . basename($this->files)) : null,
        ];
    }
}
