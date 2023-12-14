import './style.css'
import SubNavigations from './SubNavigations';
import { useEffect, useState } from 'react';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FlagIcon from '@mui/icons-material/Flag';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import EventIcon from '@mui/icons-material/Event';
import RandomPerson from '../../assets/img/avatar.png'
import { NavLink, useLocation } from 'react-router-dom';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Attendence from './Attendence';
import { useDispatch, useSelector } from "react-redux"
import { deleteAuth } from '../../features/authenticationSlice'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import AssignMentors from './AssigneeMentors';
import PerformanceAnalyticsSideBar from './PerformanceAnalyticsSidebar';

export const AsideNavbar = ({ setProceed, corner, setcorner, sidebarshow, setSideBarShow, showclose, setIsLogin, currentDept, setCurrentDept, editProfilePopup, setEditProfilePopup, editUploadContentPopup, setEditUploadContentPopup, selectedSemester, setSelectedSemester }) => {
    const dispatch = useDispatch();
    //eslint-disable-next-line
    const [email, setemail] = useState(useSelector(state => state));
    let location = useLocation();
    const [closeSideBar, setCloseSidebar] = useState(sidebarshow && showclose)
    const [showdropdown, setShowDropdown] = useState(false)
    useEffect(() => {
        setCloseSidebar(sidebarshow && showclose)
    }, [sidebarshow, showclose])
    const initial = {
        student: false,
        daughter: false,
        citizen: false,
        professional: false,
        ummah: false,
        self: false,
        spiritual: false,
        intellectual: false,
        physical: false,
        emotional: false
    };
    const [currentgoal, setCurrentGoal] = useState(initial)
    useEffect(() => {
        document.querySelector('body').scrollTo({
            top: 0, behavior: 'smooth'
        })
    }, [currentgoal])

    useEffect(() => {
        setCurrentGoal(initial)
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <nav class="pcoded-navbar" >
                <div class="navbar-wrapper">
                    <div className='main-head'>
                        <h1 className='ml-2 text-white'>Tazkiyah</h1>
                    </div>
                    <div onClick={() => { setShowDropdown(!showdropdown) }} style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '30px', cursor: 'pointer' }} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className='nav-img'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={RandomPerson} alt="" srcset="" />
                            <div>
                                <h1 style={{ color: '#fff' }}>User</h1>
                                <p style={{ color: '#fff', fontSize: '12px', marginTop: '3px' }}>Data Scientist</p>
                            </div>
                        </div>
                        <ArrowDropDownIcon style={{ fontSize: '30px', color: '#fff', cursor: 'pointer' }} />
                    </div>
                    {
                        showdropdown && <div style={{ position: 'absolute', top: '120px', left: '70px', width: '200px', backgroundColor: '#39638d' }} id="dropdownInformation" class="z-10 rounded-lg shadow">
                            <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div style={{ fontSize: '15px', padding: '10px 0 4px 0', color: '#fff' }}>User Full Name</div>
                                <div style={{ fontSize: '15px', padding: '10px 0', color: '#fff' }} class="font-medium truncate">user@gmail.com</div>
                            </div>
                            <div class="py-2">
                                <p onClick={() => { setEditProfilePopup(!editProfilePopup); closeSideBar && setSideBarShow(!sidebarshow); setShowDropdown(!showdropdown); setProceed(false) }} style={{ fontSize: '15px', color: '#fff', marginBottom: '10px', cursor: 'pointer' }} className="block px-4 py-2 text-sm hover:underline">Edit Profile</p>
                            </div>
                            <hr style={{ marginBottom: '10px' }} />
                            <div class="py-2">
                                <a href="/" onClick={() => { setIsLogin(false); dispatch(deleteAuth()) }} style={{ fontSize: '15px', color: '#fff', marginBottom: '10px' }} class="block px-4 py-2 text-sm ">Sign out</a>
                            </div>
                        </div>
                    }

                    <div className='services'>
                        <p style={{ color: '#fff', fontSize: '17px', marginBottom: '4px' }}>Navigation: </p>
                        <ul>
                            {
                                email && email.email !== "tarbiyah@gmail.com" && email.email !== "manager@gmail.com" && email.email !== "mentor@gmail.com" && <NavLink to="/goal">
                                    <li onClick={() => { setCurrentGoal(initial); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/goal' ? '14px' : ''}` }}>
                                        <SelfImprovementIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        Self Development
                                        {
                                            location.pathname === '/goal' ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : <ArrowRightAltIcon style={{ fontSize: '30px', marginLeft: '10px' }} />
                                        }
                                    </li>
                                </NavLink>
                            }
                            {
                                email && email.email !== "tarbiyah@gmail.com" && email.email !== "manager@gmail.com" && email.email !== "manager@gmail.com" && location.pathname === '/goal' && <SubNavigations
                                    currentgoal={currentgoal}
                                    setCurrentGoal={setCurrentGoal}
                                    initial={initial}
                                    corner={corner}
                                    setcorner={setcorner}
                                    setProceed={setProceed}
                                    closeSideBar={closeSideBar}
                                    sidebarshow={sidebarshow}
                                    setSideBarShow={setSideBarShow}
                                />
                            }
                            {
                                email && email.email !== "tarbiyah@gmail.com" && email.email !== "manager@gmail.com" && email.email !== "mentor@gmail.com" && <NavLink to="/view-goal" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/view-goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/view-goal' ? '14px' : ''}` }}>
                                        <FlagIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        View Goals
                                    </li>
                                </NavLink>
                            }
                            {
                                email && (email.email === "tarbiyah@gmail.com" || email.email === "mentor@gmail.com") && <>
                                    <li className='hover:underline cursor-pointer' onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false); setEditUploadContentPopup(!editUploadContentPopup) }} style={{ backgroundColor: `${editUploadContentPopup ? '#3f6184' : ''}`, borderRadius: `${editUploadContentPopup ? '14px' : ''}` }}>
                                        <CloudUploadIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        {email.email === "mentor@gmail.com" ? 'Mentoring' : 'Upload Content'}
                                    </li>
                                </>
                            }
                            {
                                email && email.email !== "tarbiyah@gmail.com" && email.email !== "manager@gmail.com" && <NavLink to="/ebook" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/ebook' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/ebook' ? '14px' : ''}` }}>
                                        <MenuBookIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        EBook
                                    </li>
                                </NavLink>
                            }
                            {
                                email && email.email === "mentor@gmail.com" && <NavLink to="/training" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/training' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/training' ? '14px' : ''}` }}>
                                        <FlagIcon style={{ fontSize: '30px', marginRight: '10px' }} />                                        Mentor Training
                                    </li>
                                </NavLink>
                            }
                            {
                                email && email.email === "manager@gmail.com" && <NavLink to="/assign-mentees" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/assign-mentees' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/assign-mentees' ? '14px' : ''}` }}>
                                        <MenuBookIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        Assign Mentees
                                        {
                                            location.pathname === '/assign-mentees' ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : <ArrowRightAltIcon style={{ fontSize: '30px', marginLeft: '10px' }} />
                                        }
                                    </li>
                                </NavLink>
                            }
                            {
                                email?.email === "manager@gmail.com" && location.pathname === '/assign-mentees' && <AssignMentors currentDept={currentDept} setCurrentDept={setCurrentDept} closeSideBar={closeSideBar} sidebarshow={sidebarshow} setSideBarShow={setSideBarShow} setProceed={setProceed} selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} />
                            }

                            <NavLink to="/notifications" >
                                <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/notifications' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/notifications' ? '14px' : ''}` }}>
                                    <NotificationsIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                    Notifications
                                </li>
                            </NavLink>
                            <NavLink to="/performance" >
                                <li onClick={() => { }} style={{ backgroundColor: `${location.pathname === '/performance' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/performance' ? '14px' : ''}`, fontSize: "15px" }}>
                                    <AssessmentIcon style={{ fontSize: '25px', marginRight: '10px' }} />
                                    Performance Analytics
                                    {
                                        email && (email.email === "tarbiyah@gmail.com") ? location.pathname === '/performance' ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : <ArrowRightAltIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : (<></>)
                                    }
                                </li>
                            </NavLink>
                            {
                                email && (email.email === "tarbiyah@gmail.com") && location.pathname === '/performance' && <PerformanceAnalyticsSideBar currentDept={currentDept} setCurrentDept={setCurrentDept} closeSideBar={closeSideBar} sidebarshow={sidebarshow} setSideBarShow={setSideBarShow} setProceed={setProceed} selectedSemester={selectedSemester} setSelectedSemester={setSelectedSemester} />
                            }
                            {
                                email?.email === "mentor@gmail.com" && <NavLink to="/attendence" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/attendence' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/attendence' ? '14px' : ''}` }}>
                                        <NotificationsIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        Sessions
                                    </li>
                                </NavLink>
                            }
                            {
                                email?.email === "tarbiyah@gmail.com" && <NavLink to="/attendence" >
                                    <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/attendence' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/attendence' ? '14px' : ''}` }}>
                                        <AssessmentIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                        Attendence
                                        {
                                            location.pathname === '/attendence' ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : <ArrowRightAltIcon style={{ fontSize: '30px', marginLeft: '10px' }} />
                                        }
                                    </li>
                                </NavLink>
                            }
                            {
                                email?.email === "tarbiyah@gmail.com" && location.pathname === '/attendence' && <Attendence currentDept={currentDept} setCurrentDept={setCurrentDept} closeSideBar={closeSideBar} sidebarshow={sidebarshow} setSideBarShow={setSideBarShow} setProceed={setProceed} />
                            }

                            {
                                email && email.email !== "tarbiyah@gmail.com" && email.email !== "mentor@gmail.com" && email.email !== "manager@gmail.com" && <>
                                    <NavLink to="/timeline" >
                                        <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/timeline' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/timeline' ? '14px' : ''}` }}>
                                            <TimelineIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                            Timeline Management
                                        </li>
                                    </NavLink>
                                    <NavLink onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} to="/Calendar" >
                                        <li style={{ backgroundColor: `${location.pathname === '/Calendar' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/Calendar' ? '14px' : ''}` }}>
                                            <EventIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                            Upcomming Events
                                        </li>
                                    </NavLink>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default AsideNavbar
