import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../Components/Contact/ContactUs";
import { SetGoal } from "../Components/Goal/setgoal";
import { ViewGoals } from "../Components/Goal/ViewGoals";
import { MainPage } from "../Components/MainPage";
import { AttendenceTable } from "../Components/MuiTable/AttendenceTable";
import { Ebook } from "../Components/ebook";
import { TimeLine } from "../Components/timeline";
import { Performancepage2 } from "../Components/performancepage2";
import { useSelector } from 'react-redux'
import { useState } from "react";
import AssignMentees from "../Components/AssignMentees";

export const ReactRoutes = ({ finalGoal, setFinalGoal, isLogin, setIsLogin, proceed, setProceed, corner, setcorner, currentDept, setCurrentDept, selectedSemester, setSelectedSemester }) => {
    //eslint-disable-next-line
    const [email, setemail  ] = useState(useSelector(state => state.email));
    return (
        <>
            <Routes>
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/register' element={<RegisterUser />} />
                <Route path='/login' element={<LoginUser isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path='/goal' element={ <SetGoal finalGoal={finalGoal} setFinalGoal={setFinalGoal} proceed={proceed} setProceed={setProceed} corner={corner} setcorner={setcorner} />} />
                <Route path='/view-goal' element={<ViewGoals finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/performance' element={<Performancepage2 />} />
                <Route path='/ebook' element={<Ebook />} />
                <Route path='/assign-mentees' element={<AssignMentees selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester}/>} />
                <Route path='/timeline' element={<TimeLine />} />
                <Route path="/attendence" element={<AttendenceTable currentDept={currentDept} setCurrentDept={setCurrentDept} />}/>
            </Routes>
        </>
    )
}