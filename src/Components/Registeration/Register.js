import React, { useRef} from 'react'
import './Registeration.css'
import { useNavigate } from 'react-router-dom'

export const RegisterUser = () => {
  let name = useRef(), email = useRef(), pass = useRef();
  let navigate = useNavigate();
  return (
    <>
      <div data-aos="fade-up"
        data-aos-duration="1000" className='main-login flex'>
        <div className="left-login l-login dark:bg-slate-800 rounded-tl-3xl rounded-bl-3xl">
          <div className="sign-in mt-10 px-10 ">
            <p className='signin font-light dark:text-white text-center'>Sign Up</p>
            {/* <i className="fa-brands fa-google fa-beat text-gray-600 google dark:text-white"></i> */}
          </div>
          <form className="below-name mt-5 ml-10">
            <label className='mt-2 font dark:text-white' htmlFor="name">USERNAME</label>
            <input onChange={(e) => { name.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="text" name="emial" id
              ="name" placeholder='User Name' ref={name} />
            <label className='font dark:text-white' htmlFor="name">Email</label>
            <input onChange={(e) => { email.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500  dark:placeholder:text-white' type="email" name="name" id
              ="name" placeholder='Email' ref={email} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">PASSWORD</label>
            <input onChange={(e) => { pass.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Password' ref={pass} />
            <label className='font dark:text-white mt-3' htmlFor="pass ">CONFIRM PASSWORD</label>
            <input onChange={(e) => { pass.current.value = e.target.value }} className='bg-gray-200 dark:bg-slate-500 dark:placeholder:text-white' type="password" name="pass" id="pass" placeholder='Confirm Password' ref={pass} />

            <button type="submit" className='btn-signin'>Sign Up</button>
            <div className="google-signin flex justify-center mt-4 mr-4">
            </div>
            <hr className='hr-resourse' />
          </form>
        </div>
        <div className="right-login-main">
          <div className="right-login r-login">
            <h1 className='font-extrabold text-white welcome1'>Welcome to Register</h1>
            <p className='text-gray-100 font-lg my-4  font-semibold'>Already have an account</p>
            <button onClick={() => { navigate('/login') }} className='signbtn'>Sign In</button>
          </div>
        </div>
      </div>
    </>
  )
}