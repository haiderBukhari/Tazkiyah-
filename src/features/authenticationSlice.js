import { createSlice } from "@reduxjs/toolkit";

const loadAuthDataFromLocalStorage = () => {
    const storedAuthData = localStorage.getItem("auth");
    return storedAuthData ? JSON.parse(storedAuthData) : {
        sapId: "",
        userId: "",
        email: "user@eoxample.cm",
        isStudent: false,
        isManager: false,
        isMentor: false,
        isCentralTarbiyah: false,
        isLogin: false
    };
};

const initialState = loadAuthDataFromLocalStorage();

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        createAuth: (state, action) => {
            const newState = { ...initialState, userId: action.payload._id , sapId: action.payload.sapId, isStudent: action.payload.isStudent, isManager: action.payload.isManager, isMentor: action.payload.isMentor, isCentralTarbiyah: action.payload.isCentralTarbiyah, email: action.payload.email, isLogin: true };
            localStorage.setItem("auth", JSON.stringify(newState));
            return newState;
        },
        deleteAuth: (state) => {
            const newState = { ...initialState,sapId : "", userId: "", isStudent: false, isManager: false, isMentor: false, isCentralTarbiyah: false, email: "user@example.com", isLogin: false };
            localStorage.setItem("auth", JSON.stringify(newState));
            return newState;
        }
    }
});

export const { createAuth, deleteAuth } = authSlice.actions;

export default authSlice.reducer;