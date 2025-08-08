import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { toLogout } from "../features/bookings/bookingSlice";
import { toast } from "react-toastify";

const Header = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.bookings.isLoggedIn)
    console.log(isLoggedIn);
    
    const handleClick = () => {
        dispatch(toLogout())
        navigate("/login")
        toast.success("Admin Logged Out Successfully !")
    }

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#11221c]">
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
                                <Link to={"/services"} className={`${pathname == "/services" ? "text-[#73B458]" : "text-white"}`}>Services</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className={`${pathname == "/contact" ? "text-[#73B458]" : "text-white"}`}>Contact</Link>
                            </li>
                            {isLoggedIn && (<Link to={"/trips"} className={`${pathname == "/trips" ? "text-[#73B458]" : "text-white"}`} >Trips</Link>)}
                        </ul>
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
        </header>
    )
}

export default Header