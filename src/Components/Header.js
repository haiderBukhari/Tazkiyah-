import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
import Logo from "../assets/Tazkiyah Logo.jpg"
import { useNavigate } from 'react-router-dom'

export const Header = ({ finalGoal }) => {
    let navigate = useNavigate();
    return (
        <>
            <header class="header" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12">

                            </div>
                            <div class="col-lg-6 col-md-7 col-12">
                                <ul class="top-contact">
                                    <li><i class="fa fa-phone"></i>+880 1234 56789</li>
                                    <li><i class="fa fa-envelope"></i><a href="mailto:support@yourmail.com">support@yourmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header-inner">
                    <div class="container">
                        <div class="inner">
                            <div class="row">
                                <div class="col-lg-3 col-md-3 col-12 p-0 m-0">
                                    <div class="logo p-0 m-0">
                                        <a href="/"><img style={{ height: "100px", width: "auto" }} className='logos m-0 p-0' src={Logo} alt="#" /></a>
                                    </div>
                                    <div class="mobile-nav"></div>
                                </div>
                                <div class="col-lg-7 col-md-9 col-12">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li class="active"><a href="/">Home <i class=""></i></a>
                                                </li>
                                                <li><a href="/">Tazkiyah Vision </a></li>
                                                <li><a href="/goal">Services <i class="icofont-rounded-down"></i></a>
                                                <ul class="dropdown">
                                                        <li><a href="/goal">Set Goal</a></li>
                                                        <li><a onClick={()=>{navigate('/set/goal')}} href="/set/goal">View Goal</a></li>
                                                        <li><a href="/ebook">EBook</a></li>
                                                        <li><a href="/">Notifications</a></li>
                                                        <li><a href="/performance">Performance Analytics</a></li>
                                                        <li><a href="/timeline">Timeline Mangement</a></li>
                                                        <li><a href="/timeline">Upcomming Events</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/login">Login</a></li>
                                                <li><a href="/contact">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-12">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}