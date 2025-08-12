import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Header from "./components/Header"
import { ToastContainer } from "react-toastify"
import Trips from "./pages/Trips"
import AddTrips from "./pages/AddTrips"
import EditTrips from "./pages/EditTrips"
import ProtectedRoute from "./components/ProtectedRoute"
import ProtectedRouteTwo from "./components/ProtectedRouteTwo"
import Tours from "./pages/Tours"

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tours" element={<Tours />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/trips" element={<ProtectedRoute Component={Trips} />} />
                <Route path="/add-trips" element={<ProtectedRoute Component={AddTrips} />} />
                <Route path="/edit-trips/:id" element={<ProtectedRoute Component={EditTrips} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App