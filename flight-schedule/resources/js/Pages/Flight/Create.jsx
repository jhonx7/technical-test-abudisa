import DangerButton from "@/Components/DangerButton";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        flight_number: "",
        airline: "",
        origin: "",
        destination: "",
        departure_time: "",
        arrival_time: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("flight.store"), {
            onFinish: () => reset(),
        });
    };

    return (
        <div>
            <Head title="Add Flight Schedule" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-center font-bold m-3">
                            <h1 className="text-2xl">Add Flight Schedule</h1>
                        </div>
                        <form onSubmit={submit}>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="flight_number"
                                        value="Flight Number"
                                    />

                                    <TextInput
                                        id="flight_number"
                                        name="flight_number"
                                        value={data.flight_number}
                                        className="mt-1 block w-full"
                                        autoComplete="flight_number"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData(
                                                "flight_number",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.flight_number}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="airline"
                                        value="Airline"
                                    />

                                    <TextInput
                                        id="airline"
                                        type="text"
                                        name="airline"
                                        value={data.airline}
                                        className="mt-1 block w-full"
                                        autoComplete="airline"
                                        onChange={(e) =>
                                            setData("airline", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.airline}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="origin"
                                        value="Origin"
                                    />

                                    <TextInput
                                        id="origin"
                                        type="text"
                                        name="origin"
                                        value={data.origin}
                                        className="mt-1 block w-full"
                                        autoComplete="origin"
                                        onChange={(e) =>
                                            setData("origin", e.target.value)
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.origin}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="destination"
                                        value="Destination"
                                    />

                                    <TextInput
                                        id="destination"
                                        type="text"
                                        name="destination"
                                        value={data.destination}
                                        className="mt-1 block w-full"
                                        autoComplete="destination"
                                        onChange={(e) =>
                                            setData(
                                                "destination",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.destination}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="departure_time"
                                        value="Departure Time"
                                    />

                                    <TextInput
                                        id="departure_time"
                                        type="datetime-local"
                                        name="departure_time"
                                        value={data.departure_time}
                                        className="mt-1 block w-full"
                                        autoComplete="departure_time"
                                        onChange={(e) =>
                                            setData(
                                                "departure_time",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.departure_time}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="arrival_time"
                                        value="Arrival Time"
                                    />

                                    <TextInput
                                        id="arrival_time"
                                        type="datetime-local"
                                        name="arrival_time"
                                        value={data.arrival_time}
                                        className="mt-1 block w-full"
                                        autoComplete="arrival_time"
                                        onChange={(e) =>
                                            setData(
                                                "arrival_time",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        message={errors.arrival_time}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-end mt-4">
                                <div>
                                    <DangerButton
                                        className="m-2"
                                        type="button"
                                        disabled={processing}
                                        onClick={() => window?.history?.back()}
                                    >
                                        Cancel
                                    </DangerButton>
                                    <PrimaryButton
                                        className="m-2"
                                        type="submit"
                                        disabled={processing}
                                    >
                                        Save
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
