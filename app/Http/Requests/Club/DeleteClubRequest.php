<?php

namespace App\Http\Requests\Club;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;

class DeleteClubRequest extends FormRequest
{
    public function authorize()
    {
        $club = $this->route('club');
        return Auth::user()->isClubAdmin($club->id);
    }

    public function rules()
    {
        return [
            // No rules are necessary for delete request
        ];
    }
}

