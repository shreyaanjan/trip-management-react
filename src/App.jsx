import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import { useEffect, useState } from "react"
import ProtectedRouteTwo from "./components/ProtectedRouteTwo"
import { ToastContainer } from "react-toastify"

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"))
        setIsLoggedIn(loginStatus)
    }, [])

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={
                    <ProtectedRouteTwo isLoggedIn={isLoggedIn}>
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    </ProtectedRouteTwo>
                } />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App