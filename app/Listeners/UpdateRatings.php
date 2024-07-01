<?php

namespace App\Listeners;

use App\Events\GameCreated;
use App\Models\Rating;
use App\Services\GameService;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateRatings implements ShouldQueue
{
    // protected $gameService;

    // public function __construct(GameService $gameService)
    // {
    //     $this->gameService = $gameService;
    // }

    // public function handle(GameCreated $event)
    // {
    //     $game = $event->game;
    //     $this->gameService->completeGame($game->id, $game->result);
    // }
}
