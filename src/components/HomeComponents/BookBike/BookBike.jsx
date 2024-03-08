import React from 'react'

import bikePicture from '../../../assets/image/bikePicture.png'

import './BookBike.css'

function BookBike() {
   return (
      <div className='bookBike'>
         <div className="bookContainer">
            <h1>Book Now Bike</h1>
            <div className="bookContent">
               <div className='formBookBike'>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>
                  <div className='inputContainer'>
                     <h3>Name and Surname</h3>
                     <input
                        type='text' name='name' placeholder='Enter your Name and Surname' autoComplete='name'
                     />
                  </div>


               </div>
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