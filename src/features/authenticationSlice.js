import { createSlice } from "@reduxjs/toolkit";

const loadAuthDataFromLocalStorage = () => {
    const storedAuthData = localStorage.getItem("auth");
    return storedAuthData ? JSON.parse(storedAuthData) : {
        name: "User",
        email: "user@example.com",
        isLogin: false
    };
};

const initialState = loadAuthDataFromLocalStorage();

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createAuth: (state, action) => {
            const newState = { ...initialState, email: action.payload.email, isLogin: true };
            localStorage.setItem("auth", JSON.stringify(newState));
            return newState;
        },
        deleteAuth: (state) => {
            const newState = { ...initialState, email: "user@example.com", isLogin: false };
            localStorage.setItem("auth", JSON.stringify(newState));
            return newState;
        }
    }
});

export const { createAuth, deleteAuth } = authSlice.actions;

export default authSlice.reducer;