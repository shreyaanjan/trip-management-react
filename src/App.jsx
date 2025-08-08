import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
import Trips from "./pages/Trips"
import AddTrips from "./pages/AddTrips"

const App = () => {
    
    return (
        <BrowserRouter>
        
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/trips" element={<Trips />} />
                <Route path="/login" element={<Login />} />
                <Route path="/add-trips" element={<AddTrips />} />
            </Routes>
        
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App