import React from 'react'
import './style.css'
import Logo from "../assets/Tazkiyah Logo.jpg"
import { Link } from 'react-router-dom'
import img from '../assets/img/avatar.png'

export const Header = ({ finalGoal }) => {
    return (
        <>
            <header class="header header10101" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12">

                            </div>
                            <div class="col-lg-6 col-md-7 col-12">
                                <ul class="top-contact">
                                    <li><i class="fa fa-phone"></i>+880 1234 56789</li>
                                    <li><i class="fa fa-envelope"></i><Link to="mailto:support@yourmail.com">support@yourmail.com</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-inner">
                    <div class="container containe">
                        <div class="inner">
                            <div class="row rowww">
                                <div class="col-lg-3 col-md-3 col-12 p-0 m-0">
                                    <div class="logo p-0 m-0">
                                        <Link to="/"><img style={{ height: "100px", width: "auto" }} className='logos m-0 p-0' src={Logo} alt="#" /></Link>
                                    </div>
                                    <div class="mobile-nav"></div>
                                </div>
                                <div class="">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li class="active"><a href="/">Home <i class=""></i></a>
                                                </li>
                                                <li><a href="/">Tazkiyah Vision </a></li>
                                                <li><Link to="/goal">Services <i class="icofont-rounded-down"></i></Link>
                                                    <ul class="dropdown">
                                                        <li><Link to="/goal">Self Development</Link></li>
                                                        <li><Link to="/view-goal">View Goal</Link></li>
                                                        <li><Link to="/ebook">EBook</Link></li>
                                                        <li><Link to="/">Notifications</Link></li>
                                                        <li><Link to="/performance">Performance Analytics</Link></li>
                                                        <li><Link to="/timeline">Timeline Mangement</Link></li>
                                                        <li><Link to="/timeline">Upcomming Events</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link to="/login">Login</Link></li>
                                                {/* <li><Link to="/contact">Contact Us</Link></li> */}
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="user-detail m-auto">
                                    <p className='mr-6'>Tazkiyah Team</p>
                                    <ul className='nav flex'>
                                        <li><Link to="/goal"><img src={img} alt="" srcset="" /></Link>
                                            <ul class="dropdown flex">
                                                <li><Link to="/timeline">admin@tazkiyah.com</Link></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}