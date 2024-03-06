import React from 'react'

import specialGirl from '../../../assets/image/specialGirl.png'

import './SpecialOffers.css'

function SpecialOffers() {
   return (
      <div className='specialOffers'>
         <div className="specialContent">
            <h1>Get Special Offers for Organizations</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias sit nam vel magnam? Repellat maxime esse dignissimos veritatis, fugit unde.</p>
            <button>Contact Us</button>
         </div>
         <img src={specialGirl} alt="specialGirl" />
      </div>
   )
}

export default SpecialOffers