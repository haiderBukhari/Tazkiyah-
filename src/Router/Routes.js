import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../Components/Contact/ContactUs";
export const ReactRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/register' element={<RegisterUser />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/' element={<LoginUser />} />
        </Routes>
        </>
    )
}