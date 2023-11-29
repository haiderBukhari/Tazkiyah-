import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "../features/authenticationSlice"

export const store = configureStore({
    reducer: AuthReducer
})