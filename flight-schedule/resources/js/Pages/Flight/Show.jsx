import DangerButton from "@/Components/DangerButton";
import { Head } from "@inertiajs/react";

export default function Show({ flight }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <Head title={flight?.flight_number + " " + flight?.airline} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-auto shadow-sm sm:rounded-lg justify-center items-center p-5">
                        <div className=" text-xl font-bold">
                            {flight.flight_number}
                        </div>
                        <div className=" text-lg font-semibold">
                            {flight.airline}
                        </div>
                        <div>{flight.origin + " - " + flight.destination}</div>
                        <div>
                            {flight?.departure_time
                                ? new Date(
                                      flight?.departure_time
                                  ).toLocaleString()
                                : ""}
                        </div>
                        <div>
                            {flight?.arrival_time
                                ? new Date(
                                    flight?.arrival_time
                                ).toLocaleString()
                                : ""}
                        </div>
                    </div>
                    <DangerButton
                        className="m-2"
                        onClick={() => window?.history?.back()}
                    >
                        Back
                    </DangerButton>
                </div>
            </div>
        </div>
    );
}
