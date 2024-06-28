<?php

namespace App\Services;

use App\Models\Game;
use App\Models\Rating;

class GameService
{
    public function calculateNewRating($currentRating, $opponentRating, $result)
    {

        $kFactor = 32;
        $expectedScore = 1 / (1 + pow(10, ($opponentRating - $currentRating) / 400));

        if ($result === 'win') {
            $score = 1;
        }
        if ($result === 'loss') {
            $score = 0;
        }
        if ($result === 'draw') {
            $score = 0.5;
        }

        $newRating = $currentRating + $kFactor * ($score - $expectedScore);

        return round($newRating);
    }

    public function completeGame($gameId, $result)
    {
        $game = Game::find($gameId);
        $whitePlayer = $game->players()->wherePivot('color', 'white')->first();
        $blackPlayer = $game->players()->wherePivot('color', 'black')->first();
        $gameType = $game->game_type;

        $whiteRatingBefore = $whitePlayer->ratings()->where('game_id', $gameId)->orderBy('created_at', 'desc')->first()->rating_after ?? 1200;
        $blackRatingBefore = $blackPlayer->ratings()->where('game_id', $gameId)->orderBy('created_at', 'desc')->first()->rating_after ?? 1200;

        // Calculate new ratings based on the result
        if ($result === 'white_win') {
            $whiteRatingAfter = $this->calculateNewRating($whiteRatingBefore, $blackRatingBefore, 'win');
            $blackRatingAfter = $this->calculateNewRating($blackRatingBefore, $whiteRatingBefore, 'loss');
        }
        if ($result === 'black_win') {
            $whiteRatingAfter = $this->calculateNewRating($whiteRatingBefore, $blackRatingBefore, 'loss');
            $blackRatingAfter = $this->calculateNewRating($blackRatingBefore, $whiteRatingBefore, 'win');
        }
        if ($result === 'draw') {
            $whiteRatingAfter = $this->calculateNewRating($whiteRatingBefore, $blackRatingBefore, 'draw');
            $blackRatingAfter = $this->calculateNewRating($blackRatingBefore, $whiteRatingBefore, 'draw');
        }

        // Create rating records
        Rating::create([
            'user_id' => $whitePlayer->id,
            'game_id' => $game->id,
            'rating_before' => $whiteRatingBefore,
            'rating_after' => $whiteRatingAfter
        ]);

        Rating::create([
            'user_id' => $blackPlayer->id,
            'game_id' => $game->id,
            'rating_before' => $blackRatingBefore,
            'rating_after' => $blackRatingAfter
        ]);

        return $game;
    }

}
