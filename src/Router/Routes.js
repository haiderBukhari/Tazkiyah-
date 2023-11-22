import { RegisterUser } from "../Components/Registeration/Register";
import { LoginUser } from "../Components/Registeration/Login";
import { Route, Routes } from "react-router-dom";
import { ContactUs } from "../Components/Contact/ContactUs";
import { SetGoal } from "../Components/Goal/setgoal";
import { ViewGoals } from "../Components/Goal/ViewGoals";
import { MainPage } from "../Components/MainPage";
// import AsideNavbar from "../Components/Navbar/AsideNavbar";
// import { PerformanceAnalytics } from "../Components/PerformanceAnalytics";
import { Ebook } from "../Components/ebook";
import { TimeLine } from "../Components/timeline";
import { Performancepage2 } from "../Components/performancepage2";
export const ReactRoutes = ({ finalGoal, setFinalGoal, isLogin, setIsLogin }) => {
    return (
        <>
            <Routes>
                <Route path='/contact' element={<ContactUs />} />
                <Route path='/register' element={<RegisterUser />} />
                <Route path='/login' element={<LoginUser isLogin={isLogin} setIsLogin={setIsLogin} />} />
                <Route path='/goal' element={<SetGoal finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/view-goal' element={<ViewGoals finalGoal={finalGoal} setFinalGoal={setFinalGoal} />} />
                <Route path='/' element={<MainPage />} />
                <Route path='/performance' element={<Performancepage2 />} />
                <Route path='/ebook' element={<Ebook />} />
                <Route path='/timeline' element={<TimeLine />} />
                {/* <Route path='/nav' element={<AsideNavbar />} /> */}
                {/* <Route path='/Performancepage' element={<Performancepage2/>}/> */}
            </Routes>
        </>
    )
}