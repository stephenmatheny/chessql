<?php

namespace App\Services;

use App\Models\Game;
use App\Models\User;
use App\Models\Rating;
use Illuminate\Support\Facades\Auth;

class GameService
{
    public function getUserGames()
    {
        $user = Auth::user();
        return $user->games;
    }

    public function completeGame($gameId, $result)
    {
        $game = Game::find($gameId);
        $whitePlayer = $game->players()->wherePivot('color', 'white')->first();
        $blackPlayer = $game->players()->wherePivot('color', 'black')->first();
        $gameType = $game->game_type;

        // Calculate ratings before the game
        $whiteRatingBefore = $whitePlayer->{$gameType . '_rating'};
        $blackRatingBefore = $blackPlayer->{$gameType . '_rating'};

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

        // Update user ratings for the specific game type
        $this->updateUserRating($whitePlayer, $gameType, $whiteRatingAfter);
        $this->updateUserRating($blackPlayer, $gameType, $blackRatingAfter);

        // Create rating records
        Rating::create([
            'user_id' => $whitePlayer->id,
            'game_id' => $game->id,
            'rating_before' => $whiteRatingBefore,
            'rating_after' => $whiteRatingAfter,
        ]);

        Rating::create([
            'user_id' => $blackPlayer->id,
            'game_id' => $game->id,
            'rating_before' => $blackRatingBefore,
            'rating_after' => $blackRatingAfter,
        ]);

        $this->updateGameStatus($game);

        return $game;
    }

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

    protected function updateUserRating($player, $gameType, $ratingAfter)
    {
        $player->{$gameType . '_rating'} = $ratingAfter;
        $player->save();
    }

    protected function updateGameStatus($game)
    {
        $game->game_status = 'complete';
        $game->save();
    }
}
