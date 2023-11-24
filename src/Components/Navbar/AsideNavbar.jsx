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

export const AsideNavbar = ({ setProceed, corner, setcorner, sidebarshow, setSideBarShow, showclose }) => {
    let location = useLocation();
    const [closeSideBar, setCloseSidebar] = useState(sidebarshow && showclose)
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
        <nav class="pcoded-navbar" >
            <div class="navbar-wrapper">
                <div className='main-head'>
                    <h1 className='ml-2 text-white'>Tazkiyah</h1>
                </div>
                <div className='nav-img'>
                    <img src={RandomPerson} alt="" srcset="" />
                    <div>
                        <h1 style={{ color: '#fff' }}>User</h1>
                        <p style={{ color: '#fff', fontSize: '12px', marginTop: '3px' }}>user@gmail.com</p>
                    </div>
                </div>
                <div className='services'>
                    <p style={{ color: '#fff', fontSize: '17px', marginBottom: '4px' }}>Navigation: </p>
                    <ul>
                        <NavLink to="/goal">
                            <li onClick={() => { setCurrentGoal(initial); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/goal' ? '14px' : ''}` }}>
                                <SelfImprovementIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                Self Development
                                {
                                    location.pathname === '/goal' ? <ArrowDownwardIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> : <ArrowRightAltIcon style={{ fontSize: '30px', marginLeft: '10px' }} />
                                }
                            </li>
                        </NavLink>
                        {
                            location.pathname === '/goal' && <SubNavigations
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
                        <NavLink to="/view-goal" >
                            <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/view-goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/view-goal' ? '14px' : ''}` }}>
                                <FlagIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                View Goals
                            </li>
                        </NavLink>
                        <NavLink to="/ebook" >
                            <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/ebook' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/ebook' ? '14px' : ''}` }}>
                                <MenuBookIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                EBook
                            </li>
                        </NavLink>
                        <a href="/" >
                            <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/' ? '14px' : ''}` }}>
                                <NotificationsIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                Notifications
                            </li>
                        </a>
                        <NavLink to="/performance" >
                            <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/performance' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/performance' ? '14px' : ''}` }}>
                                <AssessmentIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                Performance Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/timeline" >
                            <li onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} style={{ backgroundColor: `${location.pathname === '/timeline' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/timeline' ? '14px' : ''}` }}>
                                <TimelineIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                Timeline Management
                            </li>
                        </NavLink>
                        <NavLink onClick={() => { closeSideBar && setSideBarShow(!sidebarshow); setProceed(false) }} to="/timeline" >
                            <li style={{ backgroundColor: `${location.pathname === '' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '' ? '14px' : ''}` }}>
                                <EventIcon style={{ fontSize: '30px', marginRight: '10px' }} />
                                Upcomming Events
                            </li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default AsideNavbar
