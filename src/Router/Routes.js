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
import Calendar from "../Components/EventsCalender/Calender";
import AssignMentees from "../Components/AssignMentees";
import { Notifications } from './../Components/Notifications';
import MentorTraining from "../Components/MentorTraining/MentorTraining";

export const ReactRoutes = ({ finalGoal, setFinalGoal, isLogin, setIsLogin, proceed, setProceed, corner, setcorner, currentDept, setCurrentDept, selectedSemester, setSelectedSemester }) => {
    //eslint-disable-next-line
    const [email, setemail] = useState(useSelector(state => state.email));
    const [selectedMentor, setSelectedMentor] = useState(null);
    return (
        <>
            <Routes>
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/register' element={<RegisterUser />} />
                <Route path='/login' element={<LoginUser isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path='/goal' element={<SetGoal finalGoal={finalGoal} setFinalGoal={setFinalGoal} proceed={proceed} setProceed={setProceed} corner={corner} setcorner={setcorner} />} />
                <Route path='/view-goal' element={<ViewGoals finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/performance' element={<Performancepage2 selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} selectedMentor={selectedMentor} setSelectedMentor={setSelectedMentor}/>} />
                <Route path='/ebook' element={<Ebook />} />
                <Route path='/assign-mentees' element={<AssignMentees selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} selectedMentor={selectedMentor} setSelectedMentor={setSelectedMentor}/>} />
                <Route path='/timeline' element={<TimeLine />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path="/attendence" element={<AttendenceTable currentDept={currentDept} setCurrentDept={setCurrentDept} />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/training" element={<MentorTraining />} />
            </Routes>
        </>
    )
}