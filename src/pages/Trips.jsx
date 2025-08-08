import { useSelector } from "react-redux"
import TripsTable from "../components/TripsTable"
import { useNavigate } from "react-router-dom"

const Trips = () => {
    const trips = useSelector(store => store.bookings.list)
    const navigate = useNavigate()

    return (
        <section className="pt-[120px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2>Trip Details</h2>
                    <div>
                        <button type="button" onClick={() => navigate("/add-trips")} className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-md text-sm px-4 py-2 flex items-center gap-2 transition">Add Trip</button>
                    </div>
                </div>
                <div className="mt-5">
                    <TripsTable trips={trips} />
                </div>
            </div>
        </section>
    )
}

export default Trips