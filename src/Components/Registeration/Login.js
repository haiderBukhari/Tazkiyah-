import React, { useRef } from 'react'
import './Registeration.css'
import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/Tazkiyah Logo Bg.png'

export const LoginUser = () => {
  let email = useRef(), password = useRef();
  let navigate = useNavigate();
  return (
    <>
      <div data-aos="fade-down"
        data-aos-duration="1000" className='main-login flex'>
        <div className="left-login">
          <div className="sign-in mt-10 px-10 ">
            <p className='signin dark:text-white text-center font-normal'>Sign In</p>
          </div>
          <form className="below-name mt-5 ml-10">
            <label className='font dark:text-white font-normal' htmlFor="name">Email</label>
            <input onChange={(e) => email.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="name" id
              ="name" placeholder='Email ' ref={email} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => password.current.value = e.target.value} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={password} />
            <button type="submit" className='btn-signin'>Sign In</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <div className="forgot">
              <p onClick={()=>{navigate('/register')}} className='mt-5 font-normal text-lg dark:text-gray-300 cursor-pointer ease-in duration-300 forgetpass' >Forget Password</p>
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login">
          <img src={Logo} className='logoimg' alt="" />
            <h1 className='font-extrabold text-white welcome'>Welcome to Login</h1>
            <p className='text-gray-100 font-lg my-4  font-semibold'>Do not have an Account</p>
            <button onClick={() => navigate('/register')} className='signbtn'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}