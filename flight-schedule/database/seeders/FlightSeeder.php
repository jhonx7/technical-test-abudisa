<?php

namespace Database\Seeders;

use App\Models\Flight;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FlightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "flight_number" => "GA123",
                "airline" => "Garuda Indonesia",
                "origin" => "CGK",
                "destination" => "DPS",
                "departure_time" => "01/08/2024 9:30",
                "arrival_time" => "01/08/2024 12:30"
            ],
            [
                "flight_number" => "SQ456",
                "airline" => "Singapore",
                "origin" => "SIN",
                "destination" => "CGK",
                "departure_time" => "01/08/2024 14:00",
                "arrival_time" => "01/08/2024 16:30"
            ],
            [
                "flight_number" => "QZ789",
                "airline" => "AirAsia",
                "origin" => "KUL",
                "destination" => "DPS",
                "departure_time" => "02/08/2024 8:00",
                "arrival_time" => "02/08/2024 11:00"
            ],
            [
                "flight_number" => "LH101",
                "airline" => "Lufthansa",
                "origin" => "FRA",
                "destination" => "SIN",
                "departure_time" => "02/08/2024 20:45",
                "arrival_time" => "03/08/2024 12:05"
            ],
            [
                "flight_number" => "CX555",
                "airline" => "Cathay",
                "origin" => "HKG",
                "destination" => "SYD",
                "departure_time" => "03/08/2024 10:30",
                "arrival_time" => "03/08/2024 21:00"
            ],

            [
                "flight_number" => "JL300",
                "airline" => "Japan Airlines",
                "origin" => "NRT",
                "destination" => "LAX",
                "departure_time" => "03/08/2024 17:00",
                "arrival_time" => "03/08/2024 23:00"
            ]
        ];

        Flight::insert($data);
    }
}
