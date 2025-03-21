<?php

namespace Database\Factories;

use App\Models\Game;
use Illuminate\Database\Eloquent\Factories\Factory;

class GameFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Game::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'result' => $this->faker->randomElement(['white_win', 'black_win', 'draw']),
            'game_type' => $this->faker->randomElement(['bullet', 'blitz', 'rapid', 'classical']),
        ];
    }
}
