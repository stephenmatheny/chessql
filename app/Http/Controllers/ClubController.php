<?php

namespace App\Http\Controllers;

use App\Http\Requests\Club\CreateClubRequest;
use App\Http\Requests\Club\EditClubRequest;
use App\Models\Club;
use App\Services\ClubService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClubController extends Controller
{
    private ClubService $clubService;

    public function __construct(ClubService $clubService)
    {
        $this->clubService = $clubService;
    }

    public function index()
    {
        $clubs = $this->clubService->getUserClubs(5);
        return Inertia::render('Club/Index', [
            'clubs' => $clubs,
        ]);
    }

    public function members($id)
    {
        $club = Club::with('users')->findOrFail($id);
        $users = $this->clubService->getClubUsers($club, 12);

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
        $club = $this->getClubById($clubId);
        $this->clubService->authorizeEdit($club);
        $users = $this->clubService->getClubUsers($club, 10);

        return Inertia::render("Club/Edit", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function update(EditClubRequest $request, $clubId)
    {
        $club = $this->getClubById($clubId);
        $this->clubService->updateClub($request, $club);
        $users = $this->clubService->getClubUsers($club, 10);

        return Inertia::render("Club/Edit", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function destroy(Request $request, $id)
    {
        $club = Club::findOrFail($id);
        $this->clubService->deleteClub($club);

        return redirect()->route('club.index')->with('success', 'Club deleted successfully');
    }

    private function getClubById($clubId)
    {
        return Club::with('users')->findOrFail($clubId);
    }
}
