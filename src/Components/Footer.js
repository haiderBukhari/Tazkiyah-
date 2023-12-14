import React from 'react'
// import { Link } from 'react-router-dom'
import './style.css'
export const Footer = () => {
    return (
        <footer id="footer" class="footer ">
            <div class="footer-top">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-footer">
                                <h2>About Us</h2>
                                <p>Tazkiyah Empower mentees for their learning and holistic development.</p>
                                {/* <ul class="social">
                                    <li><a href="/"><i class="icofont-facebook"></i></a></li>
                                    <li><a href="/"><i class="icofont-google-plus"></i></a></li>
                                    <li><a href="/"><i class="icofont-twitter"></i></a></li>
                                    <li><a href="/"><i class="icofont-vimeo"></i></a></li>
                                    <li><a href="/"><i class="icofont-pinterest"></i></a></li>
                                </ul> */}
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-footer f-link">
                                <h2>Quick Links</h2>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Home</a></li>
                                            <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Tazkiyah Vision</a></li>
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Services</a></li> */}
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Our Cases</a></li> */}
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Other Links</a></li> */}
                                        </ul>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-12">
                                        <ul>
                                            <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Login/Register</a></li>
                                            <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li>
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Testimonials</a></li> */}
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>FAQ</a></li> */}
                                            {/* <li><a href="/"><i class="fa fa-caret-right" aria-hidden="true"></i>Contact Us</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-footer">
                                <h2>Goal</h2>
                                <p>Enable mentees to develop their vision of life in line with their ideology and purpose of life.</p>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-12">
                            <div class="single-footer">
                                <h2>Updates Informations</h2>
                                <p>Subscribe to Tazkiyah Important Updates</p>
                                <form action="mail/mail.php" method="get" target="_blank" class="newsletter-inner">
                                    <input name="email" placeholder="Email Address" class="common-input" onfocus="this.placeholder = ''"
                                        onblur="this.placeholder = 'Your email address'" required="" type="email" />
                                    <button class="button"><i class="icofont icofont-paper-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright color-blue">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 col-md-12 col-12">
                            <div class="copyright-content">
                                <p>© Copyright 2023  |  All Rights Reserved by Tazkiyah </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}