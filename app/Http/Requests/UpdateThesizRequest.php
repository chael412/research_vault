<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateThesizRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'accession_no' => ['required', 'max:255'],
            'author_id' => ['required'],
            'title' => ['required', 'max:255'],
            'year' => ['required', 'integer'],
            'copies' => ['required', 'integer'],
            'date_process' => ['nullable', 'date'],
            'page_number' => ['nullable', 'integer'],
            'course_id' => ['required'],
            'files' => ['nullable', 'file', 'max:5120'],
        ];
    }
}
