<?php

namespace Tests\Unit;

use App\Models\User;
use PHPUnit\Framework\TestCase;

class CustomerTest extends TestCase
{
    
    /**
     * A unit test that tests if the function full_customer_name returns the result in the correct format
     */
    public function test_function_returns_correct_format(): string
    {
        $user = new User([
            "name" => "Mohammed",
            "email" => "melasyoute@gmail.com"
        ]);
        if($this->assertEquals("Helloo My name is Mohammed and my email is melasyoute@gmail.com" , $user->full_customer_name($user->name , $user->email))){
            return "the format is correct";
        }
        else{
            return "the format is false";
        }
    }
}
