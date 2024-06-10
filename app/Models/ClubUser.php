<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class ClubUser extends Pivot
{
    protected $table = 'club_user';

    protected $fillable = [
        'club_id',
        'user_id',
        'role',
    ];
}
