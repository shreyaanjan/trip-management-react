import { createSlice } from "@reduxjs/toolkit";
const bookingSlice = createSlice({
    name: "Bookings",
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
            } else {
                state.isLoggedIn = false 
                localStorage.setItem("isLoggedIn", JSON.stringify(false))
            }
        },
        toLogout : (state, action) => {
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