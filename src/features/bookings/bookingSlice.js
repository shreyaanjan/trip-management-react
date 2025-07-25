import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
    name : "Bookings",
    initialState : {
        list : []
    }, 
    reducer : {
        addBookings : () => {

        },
        deleteBookings : () => {

        }
    }
})

export const { addBookings, deleteBookings } = bookingSlice.actions
export default bookingSlice.reducer