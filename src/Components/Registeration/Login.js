import React, { useRef } from 'react'
import './Registeration.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Tazkiyah Logo Bg.png'
import { useDispatch } from "react-redux"
import { createAuth } from '../../features/authenticationSlice'
import axios from 'axios';
import ToastContainer, { FailedToast } from '../toast'

export const LoginUser = ({ isLogin, setIsLogin, forgetPasswordPopup, setForgetPasswordPopup }) => {
  let email = useRef(), password = useRef();
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const handleFormSubmit = (e) => {
    e.preventDefault();

    axios.get(`${process.env.REACT_APP_BACKEND_PORT}/register`, {
      params: {
        email: email.current.value.trim(),
        password: password.current.value,
      },
          headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    }).then((res) => {
      localStorage.setItem('User Credential', JSON.stringify(res.data.data))
      dispatch(createAuth( res.data.data[0] ));
      setIsLogin(true);
      ToastContainer("Successfully Logined")
      navigate('/notifications')

    }).catch(err => FailedToast(err.response.data.message));
  }
  return (
    <>
      <div data-aos="fade-down"
        data-aos-duration="1000" className='main-login flex'>
        <div className="left-login">
          <div className="sign-in mt-10 px-10 ">
            <p className='signin dark:text-white text-center font-normal'>Sign In</p>
          </div>
          <form onSubmit={handleFormSubmit} className="below-name mt-5 ml-10">
            <label className='font dark:text-white font-normal' htmlFor="name">Email</label>
            <input onChange={(e) => email.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="name" id
              ="name" placeholder='Email ' ref={email} required={true} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => password.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={password} required={true} />
            <button type="submit" className='btn-signin'>Sign In</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <div className="forgot">
              <p onClick={() => { setForgetPasswordPopup(true) }} className='mt-5 font-normal text-lg dark:text-gray-300 cursor-pointer ease-in duration-300 forgetpass' >Forget Password</p>
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login">
            <img style={{margin: "20px 0"}} src={Logo} className='logoimg' alt="" />
            <h1 className='font-extrabold text-gray-700 welcome'>Welcome to Login</h1>
            <p className='text-gray-700 font-lg my-4  font-semibold'>Do not have an Account</p>
            <button onClick={() => navigate('/register')} className='signbtn text-gray-700'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}