const TripsTable = ({ trips }) => {
    return (
        <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Destination
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Days
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total Person
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Best Season
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trips.map((trip) => {
                                return <tr key={trip.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                        {trip.destination}
                                    </th>
                                    <td className="px-6 py-4">
                                        {trip.days}
                                    </td>
                                    <td className="px-6 py-4">
                                        {trip.person}
                                    </td>
                                    <td className="px-6 py-4">
                                        {trip.season}
                                    </td>
                                    <td className="px-6 py-4">
                                        {trip.price}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TripsTable