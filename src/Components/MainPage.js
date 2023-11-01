import React from 'react'
import './style.css'
import slider1 from '../assets/img/slider2.jpg'
import slider2 from '../assets/img/slider.jpg'
import slider3 from '../assets/img/slider3.jpg'

export const MainPage = () => {
    return (
        <div>
            <section class="slider">
                <div class="hero-slider">
                    <div  class="single-slider" style={{ backgroundImage: `url(${slider1})` }}>
                        <div class="container ccocooc">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="/" class="btn">Get Appointment</a>
                                            <a href="/" class="btn primary">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-slider" style={{ backgroundImage: `url(${slider2})` }}>
                        <div class="container ccocooc">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="/" class="btn">Get Appointment</a>
                                            <a href="/" class="btn primary">About Us</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="single-slider" style={{ backgroundImage: `url(${slider3})` }}>
                        <div class="container ccocooc">
                            <div class="row">
                                <div class="col-lg-7">
                                    <div class="text">
                                        <h1>We Provide <span>Medical</span> Services That You Can <span>Trust!</span></h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed nisl pellentesque, faucibus libero eu, gravida quam. </p>
                                        <div class="button">
                                            <a href="/" class="btn">Get Appointment</a>
                                            <a href="/" class="btn primary">Conatct Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section class="schedule">
                <div class="container">
                    <div class="schedule-inner">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-12 ">
                                <div class="single-schedule first">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="fa fa-ambulance"></i>
                                        </div>
                                        <div class="single-content">
                                            <span>Lorem Amet</span>
                                            <h4>Emergency Cases</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-12">
                                <div class="single-schedule middle">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="icofont-prescription"></i>
                                        </div>
                                        <div class="single-content">
                                            <span>Fusce Porttitor</span>
                                            <h4>Doctors Timetable</h4>
                                            <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
                                            <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-12 col-12">
                                <div class="single-schedule last">
                                    <div class="inner">
                                        <div class="icon">
                                            <i class="icofont-ui-clock"></i>
                                        </div>
                                        <div class="single-content">
                                            <span>Donec luctus</span>
                                            <h4>Opening Hours</h4>
                                            <ul class="time-sidual">
                                                <li class="day">Monday - Fridayp <span>8.00-20.00</span></li>
                                                <li class="day">Saturday <span>9.00-18.30</span></li>
                                                <li class="day">Monday - Thusday <span>9.00-15.00</span></li>
                                            </ul>
                                            <a href="/">LEARN MORE<i class="fa fa-long-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}