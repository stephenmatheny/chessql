<?php

namespace Database\Seeders;

use App\Models\Club;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $clubs = Club::factory(15)->create();

        $club = Club::factory()->create([
            'name' => 'Lufkin & Nacogdoches Chess Club',
            'country' => 'USA',
            'city' => 'Lufkin',
            'state' => 'Texas',
            'zip' => 75904,
        ]);

        User::factory()
            ->hasAttached($club, ['role' => 'admin'])
            ->hasAttached($clubs)
            ->create([
                'username' => 'Mr_Matheny',
                'first_name' => 'Stephen',
                'last_name' => 'Matheny',
                'phone' => '4692657880',
                'email' => 'smathenytech@gmail.com',
                'password' => '1234',
            ]);

        User::factory(100)->hasAttached($club)->create();
    }
}
