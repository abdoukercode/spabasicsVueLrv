<?php

use Faker\Generator as Faker;

$factory->define(App\Notebook::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'body' => $faker->text,
        'user_id'=> $faker->numberBetween($min=1, $max=2)
    ];
});
