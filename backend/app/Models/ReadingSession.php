<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ReadingSession extends Model
{
    protected $fillable = [
        'book_id',
        'user_id',
        'date',
        'start_page',
        'end_page',
        'reading_time_minutes',
        'notes'
    ];

    
    public function book()
    {
        return $this->belongsTo(Book::class);
    }
}
