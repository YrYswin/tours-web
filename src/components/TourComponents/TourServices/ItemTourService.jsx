import React from 'react'

import image from '../../../assets/image/TourServiceImg.png'
import buttonArrow from '../../../assets/svg/buttonArrow.svg'

function ItemTourService() {
   return (
      <div className='itemTourService'>
         <div className="imageContainer">
            <img src={image} alt="service" />
         </div>
         <div className="titleTourService">
            <h1>Bike and rickshaw rental</h1>
            <p>Book your quality vehicle quickly for an hour or all day!</p>
            <button>Read More <img src={buttonArrow} alt="buttonArrow" /></button>
         </div>
      </div>
   )
}

export default ItemTourService