import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addBookings } from "../features/bookings/bookingSlice"

const AddTrips = () => {
    const [input, setInput] = useState({
        country: '', days: '', person: '', price: '', season: '',
    })
    const [errors, setErrors] = useState({})

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let validateErrors = {}

        if (input.country.trim() === "") {
            validateErrors.country = "Enter Destination !";
        }

        if (input.days.trim() === "") {
            validateErrors.days = "Select Days !";
        }

        if (input.person.trim() === "") {
            validateErrors.person = "Enter Total Person Number !";
        }

        if (input.season.trim() === "") {
            validateErrors.season = "Select Season !";
        }

        if (input.price.trim() === "") {
            validateErrors.price = "Enter Price !";
        }

        setErrors(validateErrors)

        if (Object.keys(validateErrors).length > 0) return;
        dispatch(addBookings(input))
        navigate("/trips")
    }

    return (
        <div className="add-trip min-h-screen flex items-center justify-center bg-[#11221C] pt-[100px]">
            <div className="w-full lg:w-1/2 flex item-center justify-center p-5">
                <div className="w-full bg-white rounded-md max-w-md p-8">
                    <div className="container mx-auto">
                        <h2 className="mb-5 text-3xl text-[#F29727]">Plan A Getaway</h2>
                        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Destination : </label>
                                <input type="text" onChange={handleChange} value={input.country} id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="days" className="block mb-2 text-sm font-medium text-gray-900">Days : </label>
                                <select id="days" onChange={handleChange} value={input.days} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                    <option valuw="">Select Days</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                </select>
                                {errors.days && <p className="text-red-500 text-sm mt-1">{errors.days}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="person" className="block mb-2 text-sm font-medium text-gray-900">Person : </label>
                                <input type="number" onChange={handleChange} value={input.person} id="person" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                {errors.person && <p className="text-red-500 text-sm mt-1">{errors.person}</p>}
                            </div>
                            <div className="mb-5">
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-1">
                                        <input id="season" type="radio" name="season" value="summer"
                                            onChange={handleChange} checked={input.season === "summer"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        Summer
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input id="season" type="radio" name="season" value="winter"
                                            onChange={handleChange} checked={input.season === "winter"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        Winter
                                    </label>
                                    <label className="flex items-center gap-1">
                                        <input id="season" type="radio" name="season" value="monsoon"
                                            onChange={handleChange} checked={input.season === "monsoon"}
                                            className="w-4 h-4 text-orange-500 focus:ring-orange-400"
                                        />
                                        Monsoon
                                    </label>
                                </div>
                                {errors.season && <p className="text-red-500 text-sm mt-1">{errors.season}</p>}
                            </div>
                            <div className="mb-5">
                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">Price : </label>
                                <input type="number" onChange={handleChange} value={input.price} id="price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                                {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price}</p>}
                            </div>
                            <button type="submit" className="text-white bg-[#F29727] hover:bg-[#e47e02]
                            focus:ring-4 focus:outline-none focus:ring-orange-300-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Add Trip</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTrips