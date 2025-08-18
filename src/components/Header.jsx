import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toLogout } from "../features/bookings/bookingSlice";
import { toast } from "react-toastify";
import { useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.bookings.isLoggedIn)

    const handleClick = () => {
        dispatch(toLogout())
        navigate("/login")
        toast.success("Admin Logged Out Successfully !")
    }

    return (
        <header className={`${pathname !== '/' ? "bg-[#11221c]" : "mt-[40px]"} absolute w-full z-50 `} >
            <nav className="container mx-auto">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/logo.png" alt="logo" />
                    </Link>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-semibold flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <Link to={"/"} className={`${pathname == "/" ? "text-[#73B458]" : "text-white"}`}>Home</Link>
                            </li>
                            <li>
                                <Link to={"/tours"} className={`${pathname == "/tours" ? "text-[#73B458]" : "text-white"}`}>Tours</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname == "/contact" ? "text-[#73B458]" : "text-white"}`}>Contact</Link>
                            </li>
                            {isLoggedIn && (<Link to={"/trips"} className={`${pathname == "/trips" || pathname == "/add-trips" || pathname.includes("/edit-trips") ? "text-[#73B458]" : "text-white"}`} >Trips</Link>)}
                        </ul>
                    </div>
                    <div className="flex items-center gap-5">
                        <div className="md:hidden">
                            <button onClick={() => setMenu(!menu)} className="text-white text-2xl">
                                {menu ? '✕' : '☰'}
                            </button>
                        </div>
                    </div>
                    {
                        isLoggedIn ? <button onClick={handleClick} type="button" className="login-btn flex items-center gap-4 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300">
                            Logout
                            <i className="bi bi-arrow-right-circle-fill text-xl" />
                        </button> :
                            <button onClick={() => {
                                navigate("/login")
                            }} type="button" className="login-btn flex items-center gap-4 bg-[#73B458] hover:bg-[#F29727] text-white font-medium rounded-full text-sm px-6 py-2 transition-all duration-300">
                                Login
                                <i className="bi bi-arrow-right-circle-fill text-xl" />
                            </button>
                    }
                </div>
            </nav>
            {menu && (
                <div className="md:hidden fixed top-[90px] left-0 right-0 bottom-0 bg-[#11221c] z-50 p-6 overflow-y-auto">
                    <ul className="flex flex-col space-y-4 p-2 font-semibold">
                        <li>
                            <Link to={"/"} className={`${pathname == "/" ? "text-[#73B458]" : "text-white"}`}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/tours"} className={`${pathname == "/tours" ? "text-[#73B458]" : "text-white"}`}>Tours</Link>
                        </li>
                        <li>
                            <Link to={"/contact"} className={`${pathname == "/contact" ? "text-[#73B458]" : "text-white"}`}>Contact</Link>
                        </li>
                        {isLoggedIn && (<Link to={"/trips"} onClick={() => setMenu(false)} className={`${pathname == "/trips" || pathname == "/add-trips" || pathname.includes("/edit-trips") ? "text-[#73B458]" : "text-white"}`} >Trips</Link>)}
                    </ul>
                </div>
            )}
        </header>
    )
}

export default Header