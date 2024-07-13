<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory, Notifiable;

    protected static function booted()
    {
        static::creating(function ($user) {
            $user->bullet_rating = 1200;
            $user->blitz_rating = 1200;
            $user->rapid_rating = 1200;
            $user->classical_rating = 1200;
        });
    }

    /**
     * The clubs that belong to the user.
     */
    public function clubs(): BelongsToMany
    {
        return $this->belongsToMany(Club::class)
            ->using(ClubUser::class)
            ->withPivot('role')
            ->withTimestamps();
    }

    /**
     * The games that belong to the user through the pivot table.
     */
    public function games(): BelongsToMany
    {
        return $this->belongsToMany(Game::class, 'player_games')
            ->withPivot('color')
            ->withTimestamps();
    }

    /**
     * Get the ratings associated with the user.
     */
    public function ratings()
    {
        return $this->hasMany(Rating::class);
    }

    /**
     * Check if the user is an admin of the specified club.
     */
    public function isClubAdmin(int $clubId): bool
    {
        return $this->clubs()
            ->where('club_id', $clubId)
            ->wherePivot('role', 'admin')
            ->exists();
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'emoji',
        'first_name',
        'last_name',
        'phone',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }
}
