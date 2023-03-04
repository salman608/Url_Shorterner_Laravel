<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UrlRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'original_url' => 'required | url',
            'title' => 'required',
        ];
    }

    public function message()
    {
        return [
            'original_url.required' => 'original url can not be null',
            'original_url.url' => 'original url must be valid url'
        ];
    }
}
