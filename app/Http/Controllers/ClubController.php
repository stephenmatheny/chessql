<?php

namespace App\Http\Controllers;

use App\Http\Requests\Club\CreateClubRequest;
use App\Http\Requests\Club\DeleteClubRequest;
use App\Http\Requests\Club\EditClubRequest;
use App\Models\Club;
use App\Models\User;
use App\Services\ClubService;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ClubController extends Controller
{

    public function __construct(private ClubService $clubService) {}

    public function index()
    {
        $clubs = $this->clubService->getUserClubs();
        return Inertia::render('Clubs/Index', [
            'clubs' => $clubs,
        ]);
    }

    public function create()
    {
        return Inertia::render('Club/Create');
    }

    public function show(Club $club)
    {
        $users = $this->clubService->getClubUsers($club);

        return Inertia::render('Club/Show', [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function store(CreateClubRequest $request)
    {
        $club = $this->clubService->createClub($request);

        return Inertia::render("Club/$club->id", [
            'club' => $club,
        ]);
    }

    public function edit(Club $club)
    {
        $this->clubService->authorizeEdit($club);
        $users = $this->clubService->getClubUsers($club, 10);

        return Inertia::render("Club/Edit", [
            'club' => $club,
            'users' => $users,
        ]);
    }

    public function update(EditClubRequest $request, Club $club)
    {
        $this->clubService->updateClub($request, $club);

        return Inertia::render("Club/$club->id", [
            'club' => $club,
        ]);
    }

    public function destroy(DeleteClubRequest $request, Club $club)
    {
        $this->clubService->deleteClub($request, $club);

        $clubs = $this->clubService->getUserClubs();

        return Inertia::render('Club/Index', [
            'clubs' => $clubs,
        ]);
    }
}
