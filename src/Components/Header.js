import React from 'react'
// import { Link } from 'react-router-dom'
import Logo from "../assets/Tazkiyah Logo.jpg"

export const Header = ({ finalGoal }) => {
    // const [show, setShow] = useState(false)
    return (
        // <nav class="bg-white border-gray-200 dark:bg-gray-900">
        //     <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link to="/" class="flex items-center">
        //             <img src={Logo} class="h-20 mr-3" alt="Flowbite Logo" />
        //             <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tazkiyah</span>
        //         </Link>
        //         <button onClick={() => { setShow(!show) }} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        //             <span class="sr-only">Open main menu</span>
        //             <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //         <div class={`${show ? '' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
        //             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        //                 {/* <li>
        //                     <Link to="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        //                 </li> */}
        //                 <li>
        //                     <Link to="/goal" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Set Goal</Link>
        //                 </li>
        //                 {
        //                     finalGoal.length !== 0 && <li>
        //                         <Link to="/view/goal" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">View Goal</Link>
        //                     </li>
        //                 }
        //                 <li>
        //                     <Link to="/login" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/contact" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        //                 </li>
        //                 {/* <li>
        //                     <Link to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</Link>
        //                 </li>
        //                 <li>
        //                     <Link to="/" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
        //                 </li> */}
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
        <>
            {/* <div class="preloader">
                <div class="loader">
                    <div class="loader-outter"></div>
                    <div class="loader-inner"></div>

                    <div class="indicator">
                        <svg width="16px" height="12px">
                            <polyline id="back" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                            <polyline id="front" points="1 6 4 6 6 11 10 1 12 6 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div> */}

            <header class="header" >
                <div class="topbar">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 col-md-5 col-12">
                                <ul class="top-link">
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Doctors</a></li>
                                    <li><a href="/">Contact</a></li>
                                    <li><a href="/">FAQ</a></li>
                                </ul>
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
                                        <a href="index.html"><img style={{ height: "100px", width: "auto" }} className='logos m-0 p-0' src={Logo} alt="#" /></a>
                                    </div>
                                    <div class="mobile-nav"></div>
                                </div>
                                <div class="col-lg-7 col-md-9 col-12">
                                    <div class="main-menu">
                                        <nav class="navigation">
                                            <ul class="nav menu">
                                                <li class="active"><a href="/">Home <i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="index.html">Home Page 1</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/">Doctos </a></li>
                                                <li><a href="/">Services </a></li>
                                                <li><a href="/">Pages <i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="404.html">404 Error</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/">Blogs <i class="icofont-rounded-down"></i></a>
                                                    <ul class="dropdown">
                                                        <li><a href="blog-single.html">Blog Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="contact.html">Contact Us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="col-lg-2 col-12">
                                    <div class="get-quote">
                                        <a href="appointment.html" class="btn">Book Appointment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}