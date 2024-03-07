import React from 'react'
import { Link } from 'react-router-dom'

import dateIcon from '../../../assets/svg/dateIcon.svg'
import peopleIcon from '../../../assets/svg/private.svg'
import placeIcon from '../../../assets/image/kyrgyzstan.jpg'
import buttonArrowIcon from '../../../assets/svg/buttonArrow.svg'

function TourPackage({ data }) {
   return (
      <div className='popularItem'>
         <div className="pictureContainer">
            <img src={placeIcon} alt="place" />
         </div>
         <div className="infoItem">
            <h3>{data.country}, {data.city}</h3>
            <span>from ${data.price}</span>
            <div className="timePeople">
               <div>
                  <img src={dateIcon} alt="date" />
                  <p>{data.regular}</p>
               </div>
               <div>
                  <img src={peopleIcon} alt="people" />
                  <p>{data.numberOfGroup} PP</p>
               </div>
            </div>
            <div className="description">
               <p>{data.description} ...</p>
            </div>
            <button> <Link to={`/tour/${data.id}`}>Read More </Link><img src={buttonArrowIcon} alt="buttonArrow" /></button>
         </div>
      </div>
   )
}

export default TourPackage