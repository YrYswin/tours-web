import React from 'react'

import Input from './Input'

import bikePicture from '../../../assets/image/bikePicture.png'

import './BookBike.css'

function BookBike() {
   return (
      <div className='bookBike'>
         <div className="bookContainer">
            <h1>Book Now Bike</h1>
            <div className="bookContent">
               <form>
                  <Input
                     label="Name and Surname" type='text'
                     name='name' place="Enter your name and surname"
                  />
                  <Input
                     label="Email Address" type='email'
                     name='email' place="Enter your email address"
                  />
                  <Input
                     label="Name and Surname" type='text'
                     name='surname' place="Enter your name and surname"
                  />
                  <Input
                     label="Name and Surname" type='text'
                     name='name' place="Enter your name and surname"
                  />
                  <Input
                     label="Name and Surname" type='text'
                     name='name' place="Enter your name and surname"
                  />
                  <Input
                     label="Name and Surname" type='text'
                     name='name' place="Enter your name and surname"
                  />

               </form>
               <div className="btnContainer">
                  <button type='submit'>Book Now</button>
               </div>
            </div>
         </div>
         <img src={bikePicture} alt="bike" />
      </div>
   )
}

export default BookBike