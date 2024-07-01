<?php

namespace Database\Seeders;

use App\Models\Game;
use App\Models\User;
use App\Services\GameService;
use Illuminate\Database\Seeder;

class GameSeeder extends Seeder
{
    protected $gameService;

    public function __construct(GameService $gameService)
    {
        $this->gameService = $gameService;
    }

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example: Create 10 games and complete them
        for ($i = 0; $i < 100; $i++) {
            $whitePlayer = User::where('id', 1)->first();
            $blackPlayer = User::where('id', '!=', $whitePlayer->id)->inRandomOrder()->first();
            $gameStatus = $this->getRandomGameStatus();

            if($gameStatus === 'declined' || $gameStatus === 'requested') {
                $game = Game::create([
                    'result' => 'incomplete',
                    'game_type' => $this->getRandomGameType(),
                    'game_status' => $gameStatus,
                ]);

                // Attach players to the game
                $game->players()->attach([
                    $whitePlayer->id => ['color' => 'white'],
                    $blackPlayer->id => ['color' => 'black'],
                ]);
            }

            if($gameStatus === 'accepted') {
                // Example: Create game with white and black players
                $game = Game::create([
                    'result' => $this->getRandomResult(),
                    'game_type' => $this->getRandomGameType(),
                    'game_status' => $gameStatus,
                ]);

                // Attach players to the game
                $game->players()->attach([
                    $whitePlayer->id => ['color' => 'white'],
                    $blackPlayer->id => ['color' => 'black'],
                ]);

                // Complete the game and update ratings
                if(rand(0,1) === 0) {
                    $this->gameService->completeGame($game->id, $game->result);
                }

                $whitePlayer->refresh();
                $blackPlayer->refresh();
            }
        }
    }

    /**
     * Helper method to get a random game result
     *
     * @return string
     */
    protected function getRandomGameStatus()
    {
        $gameStatus = [
            'requested',
            'accepted',
            'declined',
        ];
        return $gameStatus[array_rand($gameStatus)];
    }

    /**
     * Helper method to get a random game result
     *
     * @return string
     */
    protected function getRandomResult()
    {
        $results = [
            'white_win',
            'black_win',
            'draw'
        ];
        return $results[array_rand($results)];
    }

    /**
     * Helper method to get a random game type
     *
     * @return string
     */
    protected function getRandomGameType()
    {
        $gameType = [
            'bullet',
            'blitz',
            'rapid',
            'classical'
        ];
        return $gameType[array_rand($gameType)];
    }
}
