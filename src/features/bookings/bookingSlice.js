import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const bookingSlice = createSlice({
    name: "bookings",
    initialState: {
        list: [],
        isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
    },
    reducers: {
        loginDetails: (state, action) => {
           
            const { email, password } = action.payload
            if (email == "admin@gmail.com" && password == "admin@123") {
                state.isLoggedIn = true
                localStorage.setItem("isLoggedIn", JSON.stringify(true))
                toast.success("Admin Logged In Successfully !");
                
            } else {
                state.isLoggedIn = false
                localStorage.setItem("isLoggedIn", JSON.stringify(false))
                toast.error("Invalid Email Id or Password !")
            }
        },
        toLogout: (state) => {
            state.isLoggedIn = false;
            localStorage.setItem("isLoggedIn", JSON.stringify(false))
        },
        addBookings: () => {

        },
        deleteBookings: () => {

        }
    }
})

export const { loginDetails, toLogout, addBookings, deleteBookings } = bookingSlice.actions
export default bookingSlice.reducer