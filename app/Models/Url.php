<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Url extends Model
{
    use HasFactory;

    protected $fillable = ['original_url', 'shorten_url'];

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($url) {
            $url->shorten_url = Str::random();
        });
    }

    public function getRouteKeyName()
    {
        return 'shorten_url';
    }

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->diffForHumans();
    }
}
