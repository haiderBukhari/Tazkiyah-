import './style.css'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import FlagIcon from '@mui/icons-material/Flag';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AssessmentIcon from '@mui/icons-material/Assessment';
import TimelineIcon from '@mui/icons-material/Timeline';
import EventIcon from '@mui/icons-material/Event';
import RandomPerson from '../../assets/img/avatar.png'
import { NavLink, useLocation } from 'react-router-dom';
export const AsideNavbar = () => {
    let location = useLocation();
    return (
        <nav class="pcoded-navbar" >
            <div class="navbar-wrapper">
                <div className='main-head'>
                    <h1 className='ml-2 text-white'>Tazkiyah</h1>
                </div>
                <div className='nav-img'>
                    <img src={RandomPerson} alt="" srcset="" />
                    <div>
                        <h1 style={{ color: '#fff' }}>Babbar</h1>
                        <p style={{ color: '#fff', fontSize: '12px', marginTop: '3px' }}>babbar@gmail.com</p>
                    </div>
                </div>
                <div className='services'>
                    <p style={{ color: '#fff', fontSize: '17px', marginBottom: '4px' }}>Navigation: </p>
                    <ul>
                        <NavLink to="/goal">
                            <li style={{ backgroundColor: `${location.pathname === '/goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/goal' ? '14px' : ''}` }}>
                                <SelfImprovementIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                Self Development
                            </li>
                        </NavLink>
                        <NavLink to="/view-goal" >
                            <li style={{ backgroundColor: `${location.pathname === '/view-goal' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/view-goal' ? '14px' : ''}` }}>
                                <FlagIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                View Goal
                            </li>
                        </NavLink>
                        <NavLink to="/ebook" >
                            <li style={{ backgroundColor: `${location.pathname === '/ebook' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/ebook' ? '14px' : ''}` }}>
                                <MenuBookIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                EBook
                            </li>
                        </NavLink>
                        <a href="/" >
                            <li style={{ backgroundColor: `${location.pathname === '/' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/' ? '14px' : ''}` }}>
                                <NotificationsIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                Notifications
                            </li>
                        </a>
                        <NavLink to="/performance" >
                            <li style={{ backgroundColor: `${location.pathname === '/performance' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/performance' ? '14px' : ''}` }}>
                                <AssessmentIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                Performance Analytics
                            </li>
                        </NavLink>
                        <NavLink to="/timeline" >
                            <li style={{ backgroundColor: `${location.pathname === '/timeline' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '/timeline' ? '14px' : ''}` }}>
                                <TimelineIcon style={{ fontSize: '30px', marginRight: '20px' }} />
                                Timeline Management
                            </li>
                        </NavLink>
                        <NavLink to="/timeline" >
                            <li style={{ backgroundColor: `${location.pathname === '' ? '#3f6184' : ''}`, borderRadius: `${location.pathname === '' ? '14px' : ''}` }}>
                                <EventIcon style={{ fontSize: '30px', marginRight: '20px' }} />
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
