import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";

export const ReactRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<RegisterUser />} />
            <Route path='/register' element={<RegisterUser />} />
            <Route path='/login' element={<LoginUser />} />
        </Routes>
        </>
    )
}