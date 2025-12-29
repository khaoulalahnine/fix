<?php

// app/Models/User.php
namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    use HasApiTokens, HasRoles;

    protected $fillable = [
        'name', 'email', 'password', 'role', 'phone', 
        'country', 'language', 'bio', 'profile_photo', 'is_active'
    ];

    protected $hidden = ['password', 'remember_token'];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'is_active' => 'boolean',
    ];

    // Relationships
    public function provider()
    {
        return $this->hasOne(Provider::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    public function itineraries()
    {
        return $this->hasMany(Itinerary::class);
    }

    // Helper methods
    public function isTraveler()
    {
        return $this->role === 'traveler';
    }

    public function isProvider()
    {
        return $this->role === 'provider';
    }

    public function isAdmin()
    {
        return $this->role === 'admin';
    }
}