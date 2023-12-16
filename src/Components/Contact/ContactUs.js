import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom';
import shape from '../../assets/shape.png'
import email from '../../assets/email.png'
import location from '../../assets/location.png'
import phone from '../../assets/phone.png'
import logo from '../../assets/Tazkiyah Logo Bg.png'
export const ContactUs = () => {
    const inputs = document.querySelectorAll(".input");

    function focusFunc() {
        let parent = this.parentNode;
        parent.classList.add("focus");
    }

    function blurFunc() {
        let parent = this.parentNode;
        if (this.value === "") {
            parent.classList.remove("focus");
        }
    }

    inputs.forEach((input) => {
        input.addEventListener("focus", focusFunc);
        input.addEventListener("blur", blurFunc);
    });

    return (
        <div class="containerssss">
            <span class="big-circle"></span>
            <img src={shape} class="square" alt="" />
            <div class="form">
                <div class="contact-info">
                    <h3 class="title">Let's get in touch</h3>
                    <img src={logo} className='logos' alt="" />
                    {/* <p class="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum adipisci recusandae praesentium dicta!
                    </p> */}

                    <div class="info">
                        <div class="information">
                            <img src={location} class="icon" alt="" />
                            <p>92 Cherry Drive Uniondale, NY 11553</p>
                        </div>
                        <div class="information">
                            <img src={email} class="icon" alt="" />
                            <p>lorem@ipsum.com</p>
                        </div>
                        <div class="information">
                            <img src={phone} class="icon" alt="" />
                            <p>123-456-789</p>
                        </div>
                    </div>

                    <div class="social-media">
                        <p>Connect with us :</p>
                        <div class="social-icons">
                            <Link to="/">
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                            <Link to="/">
                                <i class="fab fa-twitter"></i>
                            </Link>
                            <Link to="/">
                                <i class="fab fa-instagram"></i>
                            </Link>
                            <Link to="/">
                                <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="contact-form">
                    <span class="circle one"></span>
                    <span class="circle two"></span>

                    <form className='form1' action="index.html" autocomplete="off">
                        <h3 class="title">Contact us</h3>
                        <div class="input-container">
                            <input style={{fontSize: "14px", color: "#fff", padding: "10px 20px"}} type="text" name="name" class="input" />
                            <label for="">Username</label>
                            <span>Username</span>
                        </div>
                        <div class="input-container">
                            <input style={{fontSize: "14px", color: "#fff", padding: "10px 20px"}} type="email" name="email" class="input" />
                            <label for="">Email</label>
                            <span>Email</span>
                        </div>
                        <div class="input-container">
                            <input style={{fontSize: "14px", color: "#fff", padding: "10px 20px"}} type="tel" name="phone" class="input" />
                            <label for="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div class="input-container textarea">
                            <textarea style={{fontSize: "14px", color: "#fff", padding: "10px 20px"}} name="message" class="input"></textarea>
                            <label for="">Message</label>
                            <span>Message</span>
                        </div>
                        <div className='flex justify-center items-start mt-3'>
                            <input style={{fontSize: "16px", padding: "10px 40px", backgroundColor: "rgb(27, 71, 119)", color: "#fff"}} type="submit" value="Send" class="btn" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}