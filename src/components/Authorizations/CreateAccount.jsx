import React, { useState } from 'react'

import exite from '../../assets/svg/exite.svg'

import './CreateAccount.css'

export default function CreateAccount({ changePopup }) {
   const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
   })

   const handleChange = (event) => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
   }
   return (
      <div className='createAccount'>
         <div className="createrMenu">
            <h2>Create Account</h2>
            <div className="close">
               <img onClick={() => changePopup('')} src={exite} alt="exite" />
            </div>
            <form action="submit">
               <label htmlFor="name">Name and Surname</label>
               <input
                  type="text" placeholder='Enter your name and nurname'
                  name='name' value={user.name}
                  onChange={handleChange}
               />

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

               <div className="checkAgree">
                  <input type="checkbox" />
                  <p>I agree with Terms and Privacy</p>
               </div>
               <div className="submitBtn">
                  <button type='submit'>Sign Up</button>
               </div>
            </form>
            <p>or</p>
            <div className="submitWithGoogle">
               <button>Sign Up with Google</button>
               <h5>Already have an account? <p onClick={() => changePopup('login')}>Login</p></h5>
            </div>
         </div>
      </div>
   )
}