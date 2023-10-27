import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../Components/Contact/ContactUs";
import { SetGoal } from "../Components/Goal/setgoal";
import { ViewGoals } from "../Components/Goal/ViewGoals";
export const ReactRoutes = ({finalGoal, setFinalGoal}) => {
    return (
        <>
            <Routes>
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/register' element={<RegisterUser />} />
                <Route path='/login' element={<LoginUser />} />
                <Route path='/goal' element={<SetGoal finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/view/goal' element={<ViewGoals finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/' element={<SetGoal finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
            </Routes>
        </>
    )
}