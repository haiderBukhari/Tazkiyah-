import { createStyle } from "@reduxjs/toolkit"


const initialState = {
    name: "User",
    email: "user@example.com",
    isLogin: false,
}

export const authStyle = createStyle({
    name: 'Authentication',
})