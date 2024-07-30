import DangerButton from "@/Components/DangerButton";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ flights }) {
    const handleDelete = (id) => {
        if (confirm("Are you sure you want to delete this flight?")) {
            router.delete(route("flight.destroy", { id: id }));
        }
    };
    return (
        <div>
            <Head title="Flight Schedule" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="text-center font-bold m-3">
                            <h1 className="text-2xl">Flight Schedule</h1>
                        </div>
                        <div className="flex justify-end m-2">
                            <Link
                                href={route("flight.create")}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Add
                            </Link>
                        </div>
                        <div className="overflow-auto">
                            <table className="w-full min-w-max table-auto text-left border">
                                <thead>
                                    <tr>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                No.
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Flight Number
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Airline
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Origin
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Destination
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Departure Time
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Arrival Time
                                            </div>
                                        </th>
                                        <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                            <div className="font-normal leading-none ">
                                                Action
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {flights?.length > 0 &&
                                        flights?.map((flight, index) => {
                                            const isLast =
                                                index === flights.length - 1;
                                            const classes = isLast
                                                ? "p-4"
                                                : "p-4 border-b border-blue-gray-50";

                                            return (
                                                <tr key={flight.id}>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {index + 1}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {
                                                                flight.flight_number
                                                            }
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {flight.airline}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {flight.origin}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {flight.destination}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {new Date(
                                                                flight?.departure_time
                                                            ).toLocaleString()}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <div className="font-normal">
                                                            {new Date(
                                                                flight?.arrival_time
                                                            ).toLocaleString()}
                                                        </div>
                                                    </td>
                                                    <td className={classes}>
                                                        <PrimaryButton
                                                            className="m-2"
                                                            onClick={() =>
                                                                router.get(
                                                                    route(
                                                                        "flight.show",
                                                                        {
                                                                            id: flight.id,
                                                                        }
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            Detail
                                                        </PrimaryButton>
                                                        <SecondaryButton
                                                            className="m-2"
                                                            onClick={() =>
                                                                router.get(
                                                                    route(
                                                                        "flight.edit",
                                                                        {
                                                                            id: flight.id,
                                                                        }
                                                                    )
                                                                )
                                                            }
                                                        >
                                                            Edit
                                                        </SecondaryButton>
                                                        <DangerButton
                                                            className="m-2"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    flight?.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </DangerButton>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                </tbody>
                            </table>
                            {flights?.length === 0 && (
                                <div className="text-center m-3">
                                    Data Kosong
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
