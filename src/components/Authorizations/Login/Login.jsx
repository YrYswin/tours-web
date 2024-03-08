import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { setToken } from '../../../redux/user/userSlice'

import exite from '../../../assets/svg/exite.svg'

import './Login.css'

const API = "https://api.escuelajs.co/api/v1/auth/login"

function Login({ changePopup }) {
   const [user, setUser] = useState({
      email: '',
      password: '',
   })

   const dispatch = useDispatch()
   const token = useSelector((state) => state.user.token)

   const handleChange = (event) => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
   }

   async function handleLogin() {
      try {
         const { data } = await axios.post(API, user)

         dispatch(setToken(data.access_token))

         console.log(data)
      } catch (error) {
         console.log(error)
      }
   }

   return (
      <div className='login'>
         <div className="signupMenu">
            <h2>Login</h2>
            <div className="close">
               <img onClick={() => changePopup('')} src={exite} alt="exite" />
            </div>
            <div className='form'>
               <h3>Name and Surname</h3>
               <input
                  type="email" placeholder='Enter your email address'
                  name='email' value={user.email}
                  onChange={handleChange}
               />

               <h3>Name and Surname</h3>
               <input
                  type="password" placeholder='Enter your password'
                  name='password' value={user.password}
                  onChange={handleChange}
               />

               <div onClick={() => changePopup('recovery')} className="forgot">Forgot your password?</div>

               <div className="submitBtn">
                  <button onClick={() => handleLogin()} type='submit'>Sign Up</button>
               </div>
            </div>
            <p>or</p>
            <div className="submitWithGoogle">
               <button>Sign Up with Google</button>
               <h5>Don't have an account? <p onClick={() => changePopup('signup')}>Sign Up</p></h5>
            </div>
         </div>
      </div>
   )
}

export default Login