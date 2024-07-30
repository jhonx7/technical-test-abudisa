<?php

namespace App\Http\Controllers;

use App\Models\Flight;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class FlightController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $flights = Flight::all();

            return Inertia::render('Flight/Index', [
                'flights' => $flights,
            ]);
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Flight/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'flight_number' => 'required',
            'airline' => 'required',
            'origin' => 'required',
            'destination' => 'required',
            'departure_time' => 'required',
            'arrival_time' => 'required',
        ]);

        try {
            Flight::create([
                'flight_number'     => $request->flight_number,
                'airline'           => $request->airline,
                'origin'            => $request->origin,
                'destination'       => $request->destination,
                'departure_time'    => $request->departure_time,
                'arrival_time'      => $request->arrival_time,
            ]);
            return to_route('flight.index');
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try {
            $flight = Flight::find($id);

            return Inertia::render('Flight/Show', [
                'flight' => $flight,
            ]);
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        try {
            $flight = Flight::find($id);

            return Inertia::render('Flight/Edit', [
                'flight' => $flight,
            ]);
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'flight_number' => 'required',
            'airline' => 'required',
            'origin' => 'required',
            'destination' => 'required',
            'departure_time' => 'required',
            'arrival_time' => 'required',
        ]);

        try {

            $flight = Flight::find($id);
            if (!$flight) {
                throw new \Exception('Flight not found');
            }
            $flight->update([
                'flight_number'     => $request->flight_number,
                'airline'           => $request->airline,
                'origin'            => $request->origin,
                'destination'       => $request->destination,
                'departure_time'    => $request->departure_time,
                'arrival_time'      => $request->arrival_time,
            ]);
            return to_route('flight.index');
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $flight = Flight::find($id);
            if (!$flight) {
                throw new \Exception('Flight not found');
            }
            $flight->delete();
            return to_route('flight.index');
        } catch (\Throwable $th) {
            Log::error($th);
            throw $th;
        }
    }
}
