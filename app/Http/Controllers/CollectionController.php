<?php

namespace App\Http\Controllers;

use App\Models\UserGame;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function index(Request $request)
    {
        $games = UserGame::query()
            ->where('user_id', $request->user()->id)
            ->orderByDesc('created_at')
            ->get(['id', 'barcode', 'name', 'created_at']);

        return response()->json(['games' => $games]);
    }

    public function add(Request $request)
    {
        $data = $request->validate([
            'barcode' => ['required', 'string', 'max:64'],
            'name' => ['nullable', 'string', 'max:255'],
        ]);

        $game = UserGame::firstOrCreate(
            [
                'user_id' => $request->user()->id,
                'barcode' => $data['barcode'],
            ],
            [
                'name' => $data['name'] ?? null,
            ]
        );

        return response()->json(['game' => $game], 201);
    }
}
