import { useState } from "react"
import { toast } from "react-toastify"

const Login = ({ setIsLoggedIn }) => {
    const [input, setInput] = useState({email: "", password: ""})

    const handleChange = (e) => {
        setInput({...input, [e.target.id] : e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(input.email == "admin@gmail.com" && input.password == "admin@123"){
            setIsLoggedIn(true)
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            toast.success
        }
    }

    return (
        <section className="home-section login-section pt-10">
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
                            {/* <div className="flex items-center justify-between text-sm text-gray-600">
                                <label>
                                    <input type="checkbox" className="mr-1" /> Remember Me?
                                </label>
                                <a href="#" className="text-orange-500 hover:underline">Forgot your Password?</a>
                            </div> */}
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