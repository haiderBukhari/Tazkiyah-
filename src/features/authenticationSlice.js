import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    name: "User",
    email: "user@example.com",
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createAuth: (state, action) => {
            return { ...initialState, email: action.payload.email };
        },
        deleteAuth: (state, action) => {
            return { ...initialState, email: "user@example.com" };
        }
    }
})

export const { createAuth, deleteAuth } = authSlice.actions;

export default authSlice.reducer;