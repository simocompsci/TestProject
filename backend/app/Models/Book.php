<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'title',
        'author_name',
        'pages',
        'cover_path',
        'review',
        'status',
        'started_date',
        'finished_date',
        'current_page',
        'rating',
        'genre',
        'owning_status',
    ];

    public function user() {
        
        return $this->belongsTo(User::class);
    }

    public function readingSessions() {

        return $this->hasMany(ReadingSession::class);
    }
}
