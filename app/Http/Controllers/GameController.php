<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Services\GameService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GameController extends Controller
{
    protected $gameService;

    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }

    public function completeGame(Request $request, $gameId)
    {
        $result = $request->input('result'); // 'white_win', 'black_win', or 'draw'
        $game = $this->gameService->completeGame($gameId, $result);

        return response()->json(['message' => 'Game completed and ratings updated.']);
    }

    public function accept(Game $game)
    {
        $game->update(['game_status' => 'accepted']);
        return redirect()->back();
    }

    public function cancel(Game $game)
    {
        $game->update(['game_status' => 'cancelled']);
        return redirect()->back();
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $games = $this->gameService->getUserGames();

        $requestedGames = $games->filter(function ($game) {
            return $game->game_status === 'requested';
        })->values()->all();

        $completeGames = $games->filter(function ($game) {
            return $game->game_status === 'complete';
        })->values()->all();

        $acceptedGames = $games->filter(function ($game) {
            return $game->game_status === 'accepted';
        })->values()->all();

        return Inertia::render('Game/Index', [
            'games' => $games,
            'requestedGames' => $requestedGames,
            'completeGames' => $completeGames,
            'acceptedGames' => $acceptedGames,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Game $game)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Game $game)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Game $game)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Game $game)
    {
        //
    }
}
