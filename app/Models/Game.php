<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Game extends Model
{
    use HasFactory;

    /**
     * The clubs that belong to the user.
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }
}
