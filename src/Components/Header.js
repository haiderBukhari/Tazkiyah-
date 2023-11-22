import React from 'react'
import './style.css'
import Logo from "../assets/Tazkiyah Logo.jpg"
import { Link } from 'react-router-dom'
import DehazeIcon from '@mui/icons-material/Dehaze';

export const Header = ({ setSideBarShow, sidebarshow, isLogin, setIsLogin, showclose }) => {
    return (
        <>
            <header class="header header10101" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12 pt-3 pb-2">
                            </div>
                            <div class="col-lg-6 col-md-7 col-12">
                                <ul class="top-contact">
                                    {/* <li><i class="fa fa-phone"></i>+880 1234 56789</li> */}
                                    <li><i class="fa fa-envelope"></i><Link to="mailto:support@yourmail.com">support@yourmail.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-inner">
                    <div class="container containe" style={{ position: 'relative' }}>
                        <div class="inner">
                            <div class="row rowww">
                                <div class="col-lg-3 col-md-3 col-12 p-0 m-0">
                                    <div class="logo p-0 m-0">
                                        <Link to="/"><img style={{ height: "100px", width: "auto" }} className='logos m-0 p-0' src={Logo} alt="#" /></Link>
                                    </div>
                                </div>
                                <div class="">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li class="active" ><a href="/" style={{ fontSize: '16px' }}>Home <i class=""></i></a>
                                                </li>
                                                <li><a href="/" style={{ fontSize: '16px' }}>Tazkiyah Vision </a></li>
                                                {/* <li><Link to="/goal">Services <i class="icofont-rounded-down"></i></Link>
                                                    <ul class="dropdown">
                                                        <li><Link to="/goal">Self Development</Link></li>
                                                        <li><Link to="/view-goal">View Goal</Link></li>
                                                        <li><Link to="/ebook">EBook</Link></li>
                                                        <li><Link to="/">Notifications</Link></li>
                                                        <li><Link to="/performance">Performance Analytics</Link></li>
                                                        <li><Link to="/timeline">Timeline Mangement</Link></li>
                                                        <li><Link to="/timeline">Upcomming Events</Link></li>
                                                    </ul>
                                                </li> */}
                                                {
                                                    !isLogin ? <li><Link to="/login" style={{ fontSize: '16px' }}>Login</Link></li> : <li><a href="/" onClick={() => { setIsLogin(false) }} style={{ fontSize: '16px' }}>Logout</a></li>
                                                }
                                                {/* <li><Link to="/contact">Contact Us</Link></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                    {
                                        isLogin && showclose && <DehazeIcon onClick={() => { setSideBarShow(!sidebarshow) }} style={{ fontSize: '35px', color: '#537292', position: 'absolute', right: '20px', top: '30px', cursor: 'pointer', zIndex: '10' }} />
                                    }
                                </div>
                                <div className="user-detail m-auto text-3xl">
                                    <p className='mr-6'></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}