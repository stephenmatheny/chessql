<?php

namespace App\Services;

use App\Http\Requests\Club\CreateClubRequest;
use App\Http\Requests\Club\DeleteClubRequest;
use App\Http\Requests\Club\EditClubRequest;
use Illuminate\Support\Facades\Auth;
use App\Models\Club;

class ClubService
{
    public function getUserClubs($paginate = 3)
    {
        $user = Auth::user();
        return $user->clubs()->with('users')->paginate($paginate);
    }

    public function getClubUsers(Club $club, $paginate = 9)
    {
        if($paginate) {
            return $club->users()->paginate($paginate);
        }

        return $club->users;
    }

    public function createClub(CreateClubRequest $request)
    {
        $user = Auth::user();

        $club = Club::create([
            'name' => $request->input('name'),
            'country' => $request->input('country'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip' => $request->input('zip'),
        ]);

        $user->clubs()->attach($club, ['role' => 'admin']);

        return $club;
    }

    public function authorizeEdit(Club $club)
    {
        $user = Auth::user();
        if (!$user->isClubAdmin($club->id)) {
            abort(403, 'Unauthorized action.');
        }
    }

    public function updateClub(EditClubRequest $request, Club $club)
    {
        // $this->authorizeEdit($club);

        $club->update([
            'name' => $request->input('name'),
            'country' => $request->input('country'),
            'city' => $request->input('city'),
            'state' => $request->input('state'),
            'zip' => $request->input('zip'),
        ]);
    }

    public function deleteClub(DeleteClubRequest $request, Club $club)
    {
        $this->authorizeEdit($club);

        // Perform delete logic here
        $club->delete();
    }
}
