import React, { useRef } from 'react'
import './Registeration.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Tazkiyah Logo Bg.png'
import ToastContainer, { FailedToast } from './../toast';
import axios from "axios"
import { useDispatch } from "react-redux"
import { createAuth } from '../../features/authenticationSlice'

export const RegisterUser = ({ setIsLogin }) => {
  let sapid = useRef(), email = useRef(), pass = useRef(), c_pass = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    if (!sapid.current.value || !email.current.value || !pass.current.value || !c_pass.current.value) {
      FailedToast("all fields are required")
      return;
    }
    else if (pass.current.value !== c_pass.current.value) {
      FailedToast("password must match with confirm password")
      return;
    }
    else if (!(/[@/$%#*&{}()]/.test(pass.current.value) && pass.current.value.length >= 6)) {
      FailedToast("Password must be at least 6 characters long and contain at least one of these @/$%#*&{}()");
      return;
    }

    axios.post(`${process.env.REACT_APP_BACKEND_PORT}/register`, {
      sapid: sapid.current.value,
      email: email.current.value,
      password: pass.current.value
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {
      ToastContainer("Successfully Registered")
      navigate('/login')
    }).catch(err => {
      if (err.response.data.message.includes("duplicate")) {
        FailedToast("Email already registered")
      } else {
        FailedToast(err.response.data.message)
      }
    }
    );
  }
  return (
    <>
      <div className='main-login flex pb-5'>
        <div className="left-login l-login dark:bg-slate-800 rounded-tl-3xl rounded-bl-3xl">
          <div className="sign-in mt-10 px-10">
            <p className='signin font-light dark:text-white text-center'>Sign Up</p>
            {/* <i className="fa-brands fa-google fa-beat text-gray-600 google dark:text-white"></i> */}
          </div>
          <form onSubmit={handleRegister} className="below-name mt-5 ml-10">
            <label className='mt-2 font dark:text-white' htmlFor="name">SAP ID</label>
            <input onChange={(e) => { sapid.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="emial" id
              ="name" placeholder='SAP ID' ref={sapid} required={true} />
            <label className='font dark:text-white' htmlFor="name">Email</label>
            <input onChange={(e) => { email.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500  dark:placeholder:text-white' type="email" name="name" id
              ="name" placeholder='Email' ref={email} required={true} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => { pass.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={pass} required={true} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">CONFIRM PASSWORD</label>
            <input onChange={(e) => { c_pass.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Confirm Password' ref={c_pass} required={true} />
            <button type="submit" className='btn-signin'>Sign Up</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login r-login">
            <img style={{ margin: "20px 0" }} src={Logo} className='logoimg' alt="" />
            <h1 className='font-extrabold text-gray-700 welcome1'>Welcome to Register</h1>
            <p className='text-gray-700 font-lg my-4  font-semibold'>Already have an account</p>
            <button onClick={() => { navigate('/login') }} className='signbtn'>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}