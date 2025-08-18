import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { loginDetails } from "../features/bookings/bookingSlice"
import { Navigate, useNavigate } from "react-router-dom"

const Login = () => {
    const [input, setInput] = useState({ email: "", password: "" })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isLoggedIn = useSelector((state) => state.bookings.isLoggedIn)
   
    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginDetails(input));
        navigate("/trips")
    }

    return (
        <section className="home-section login-section">
            <div className="min-h-screen flex items-center justify-center bg-[#11221C]">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full bg-white rounded-md shadow-md max-w-md p-8">
                        <h1 className="text-4xl text-[#F29727] mb-6 text-center">Login Account</h1>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="email" className="block mb-1 text-sm font-semibold text-gray-900">Email</label>
                                <input type="email" onChange={handleChange} value={input.email} name="email" id="email" placeholder="admin@mail.com" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-1 text-sm font-semibold text-gray-900">
                                    Password
                                </label>
                                <input type="password" onChange={handleChange} value={input.password} name="password" id="password"
                                    placeholder="*********" className="bg-gray-100 border border-gray-200 text-gray-900 text-sm rounded-sm block w-full p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#11221C] hover:bg-[#73B458] text-white text-sm font-semibold py-3 rounded-sm transition-all duration-300">
                                Log In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login