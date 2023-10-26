import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../Components/Contact/ContactUs";
import { SetGoal } from "../Components/Goal/setgoal"; 
export const ReactRoutes = () => {
    return (
        <>
        <Routes>
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/register' element={<RegisterUser />} />
            <Route path='/login' element={<LoginUser />} />
            <Route path='/goal' element={<SetGoal />} />
            <Route path='/' element={<LoginUser />} />
        </Routes>
        </>
    )
}