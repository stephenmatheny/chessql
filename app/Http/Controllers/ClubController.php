<?php

namespace App\Http\Controllers;

use App\Http\Requests\Club\CreateClubRequest;
use App\Http\Requests\Club\DeleteClubRequest;
use App\Http\Requests\Club\EditClubRequest;
use App\Models\Club;
use App\Models\User;
use App\Services\ClubService;
use Exception;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClubController extends Controller
{

    public function __construct(private ClubService $clubService) {}

    public function index()
    {
        $clubs = $this->clubService->getUserClubs(6);
        return Inertia::render('Club/Index', [
            'clubs' => $clubs,
        ]);
    }

    public function members($id)
    {
        $club = Club::with('users')->findOrFail($id);
        $users = $club->users()->paginate(12);

        return Inertia::render("Club/Members", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function events($id)
    {
        $club = Club::findOrFail($id);
        $users = $this->clubService->getClubUsers($club);

        return Inertia::render("Club/Show", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function create()
    {
        return Inertia::render("Club/Create");
    }

    public function show($id)
    {
        $club = Club::with('users')->findOrFail($id);
        $users = $this->clubService->getClubUsers($club);

        return Inertia::render("Club/Show", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function store(CreateClubRequest $request)
    {
        $club = $this->clubService->createClub($request);
        $users = $this->clubService->getClubUsers($club);

        return Inertia::render("Club/Show", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function edit($clubId)
    {
        $club = Club::where('id', $clubId)->firstOrFail();
        $this->clubService->authorizeEdit($club);
        $users = $this->clubService->getClubUsers($club, 10);

        return Inertia::render("Club/Edit", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function update(EditClubRequest $request, $clubId)
    {
        $club = Club::where('id', $clubId)->firstOrFail();
        $this->clubService->updateClub($request, $club);
        $users = $this->clubService->getClubUsers($club, 10);

        return Inertia::render("Club/Edit", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function destroy(DeleteClubRequest $request, $id)
    {
        $club = Club::findOrFail($id);
        $this->clubService->deleteClub($club);

        // $clubs = $this->clubService->getUserClubs(6);

        return redirect()->route('club.index')->with('success', 'Club deleted successfully');

        // return Inertia::render('Club/Index', [
        //     'clubs' => $clubs,
        // ]);
    }
}
