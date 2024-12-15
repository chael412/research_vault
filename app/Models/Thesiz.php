<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thesiz extends Model
{
    /** @use HasFactory<\Database\Factories\ThesizFactory> */
    use HasFactory;

    protected $fillable = [
        'accession_no',
        'author_id',
        'title',
        'year',
        'copies',
        'date_process',
        'page_number',
        'course_id',
        'files',

    ];

    public function author()
    {
        return $this->belongsTo(Author::class);
    }

    public function course()
    {
        return $this->belongsTo(Course::class);
    }

}
