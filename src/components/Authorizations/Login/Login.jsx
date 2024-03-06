import React, { useState } from 'react'

import exite from '../../../assets/svg/exite.svg'

import './Login.css'

function Login({ changePopup }) {
   const [user, setUser] = useState({
      email: '',
      password: '',
   })

   const handleChange = (event) => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
   }

   return (
      <div className='login'>
         <div className="signupMenu">
            <h2>Login</h2>
            <div className="close">
               <img onClick={() => changePopup('')} src={exite} alt="exite" />
            </div>
            <form action="">
               <label htmlFor="email">Name and Surname</label>
               <input
                  type="email" placeholder='Enter your email address'
                  name='email' value={user.email}
                  onChange={handleChange}
               />

               <label htmlFor="password">Name and Surname</label>
               <input
                  type="password" placeholder='Enter your password'
                  name='password' value={user.password}
                  onChange={handleChange}
               />

               <div onClick={() => changePopup('recovery')} className="forgot">Forgot your password?</div>

               <div className="submitBtn">
                  <button type='submit'>Sign Up</button>
               </div>
            </form>
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