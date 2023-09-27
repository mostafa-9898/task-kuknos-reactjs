import { configureStore } from "@reduxjs/toolkit";
// reducers
import selectedSlice from "./features/selectedSlice";

const store = configureStore({
    reducer: {
        userReducer: selectedSlice,
    }
})

export default store;