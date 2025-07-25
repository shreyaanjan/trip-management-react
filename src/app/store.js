import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "../features/bookings/bookingSlice";

const store = configureStore({
    reducer : {
        bookings : bookingReducer
    }
})

export default store