import React from 'react'

import './UserDetail.css'

function UserDetail() {
   return (
      <div className='userDetail'>
         <h1>Who shall we send  these ticket to?</h1>
         <form action="">
            <div className="inputContainerUser">
               <label htmlFor="name">Name</label>
               <input type="text" name='name' placeholder='Enter your name' />
            </div>

            <div className="inputContainerUser">
               <label htmlFor="surname">Surname</label>
               <input type="text" name='surname' placeholder='Enter your surname' />
            </div>

            <div className="inputContainerUser">
               <label htmlFor="number">Telephone Number</label>
               <input type="number" name='number' placeholder='Enter your number' />
            </div>

            <div className="inputContainerUser">
               <label htmlFor="email">Email Address</label>
               <input type="email" name='email' placeholder='Enter your email address' />
            </div>
         </form>
      </div>
   )
}

export default UserDetail