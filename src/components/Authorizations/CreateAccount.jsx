import React, { useState } from 'react'
import axios from 'axios'

import exite from '../../assets/svg/exite.svg'

import './CreateAccount.css'

const API = "https://api.escuelajs.co/api/v1/users"

export default function CreateAccount({ changePopup }) {
   const [user, setUser] = useState({
      name: '',
      email: '',
      password: '',
      avatar: "https://i.imgur.com/5mPmJYO.jpeg",
   })

   const handleChange = (event) => {
      const { name, value } = event.target
      setUser({ ...user, [name]: value })
   }

   async function handleSubmit() {
      try {
         const res = await axios.post(API, user)
         console.log(res)
      } catch (error) {
         console.log(error)
      }
   }
   return (
      <div className='createAccount'>
         <div className="createrMenu">
            <h2>Create Account</h2>
            <div className="close">
               <img onClick={() => changePopup('')} src={exite} alt="exite" />
            </div>
            <div className='form'>
               <h3>Name and Surname</h3>
               <input
                  type="text" placeholder='Enter your name and nurname'
                  name='name' value={user.name}
                  onChange={handleChange}
               />

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

               <div className="checkAgree">
                  <input type="checkbox" />
                  <p>I agree with Terms and Privacy</p>
               </div>
               <div className="submitBtn">
                  <button onClick={() => handleSubmit()} type='submit'>Sign Up</button>
               </div>
            </div>
            <p>or</p>
            <div className="submitWithGoogle">
               <button>Sign Up with Google</button>
               <h5>Already have an account? <p onClick={() => changePopup('login')}>Login</p></h5>
            </div>
         </div>
      </div>
   )
}