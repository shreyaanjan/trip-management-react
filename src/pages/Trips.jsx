import { useDispatch, useSelector } from "react-redux"
import TripsTable from "../components/TripsTable"
import { useNavigate, useParams } from "react-router-dom"
import { tourCard } from "../components/tourCard"
import { useEffect, useState } from "react"
import { addTrips } from "../features/bookings/bookingSlice"

const Trips = () => {
    const trips = useSelector(store => store.bookings.list)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        let data = tourCard.find((item, idx) => {
            return idx == id
        })
        dispatch(addTrips(data))
        navigate("/trips")
    }, [])

    return (
        <section className="trip pt-[120px]">
            <div className="container mx-auto">
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl text-[#F29727]">Trip Details</h2>
                    <div>
                        <button type="button" onClick={() => navigate("/add-trips")} className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-md text-sm px-7 py-2 flex items-center gap-2 transition">Add Trip</button>
                    </div>
                </div>
                <div className="mt-5">
                    {
                        (trips.length !== 0 ? <TripsTable trips={trips} /> :
                            <div>
                                <div className='items-center flex justify-center'>
                                    <img src="/images/no-data.png" alt="no-data" className="w-[600px]" />
                                </div>
                                <div className='items-center flex justify-center my-5'>
                                    <button type="button" onClick={() => navigate("/tours")} className="text-white bg-[#ff5d22] hover:bg-[#e24d14] font-medium rounded-md text-sm px-7 py-2 flex items-center gap-2 transition">Book Package</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Trips