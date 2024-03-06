import React from 'react'

import date from '../../../assets/svg/dateIcon.svg'
import people from '../../../assets/svg/private.svg'
import place from '../../../assets/image/kyrgyzstan.jpg'

function PopularItem() {
   return (
      <div className='popularItem'>
         <div className="pictureContainer">
            <img src={place} alt="place" />
         </div>
         <div className="infoItem">
            <h3>Kyrgyzstan, my home</h3>
            <span>from $34</span>
            <div className="timePeople">
               <div>
                  <img src={date} alt="date" />
                  <p>Every day</p>
               </div>
               <div>
                  <img src={people} alt="people" />
                  <p>3-10 PP</p>
               </div>
            </div>
            <div className="description">
               <p>A tour of the city and its surroundings led by a proffecional guide ...</p>
            </div>
         </div>
      </div>
   )
}

export default PopularItem