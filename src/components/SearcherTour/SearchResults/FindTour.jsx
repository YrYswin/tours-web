import React from 'react'

import kyrgyzstan2 from '../../../assets/image/kyrgyzstan2.jpg'
import date from '../../../assets/svg/findResult/date.svg'
import time from '../../../assets/svg/findResult/time.svg'
import group from '../../../assets/svg/findResult/group.svg'
import transportation from '../../../assets/svg/findResult/transportation.svg'
import duration from '../../../assets/svg/findResult/duration.svg'
import guide from '../../../assets/svg/findResult/guide.svg'
import language from '../../../assets/svg/findResult/language.svg'
import ticket from '../../../assets/svg/findResult/ticket.svg'

function FindTour() {
   return (
      <div className='findTour'>
         <div className="findtourImage">
            <img src={kyrgyzstan2} alt="kyrgyzstan2" />
         </div>
         <div className="findtourTitle">
            <h1>Lucca Bike</h1>
            <div className="findtourInfo">
               <div>
                  <li>
                     <img src={date} alt="date" />
                     <p><strong>Date:</strong> Tuesday, 02 Oct 2022</p>
                  </li>
                  <li>
                     <img src={time} alt="time" />
                     <p><strong>Time:</strong> 15:00 PM</p>
                  </li>
                  <li>
                     <img src={group} alt="group" />
                     <p><strong>Number of Group:</strong> 15-30</p>
                  </li>
                  <li>
                     <img src={transportation} alt="transportation" />
                     <p><strong>Transportation:</strong> Bus</p>
                  </li>
               </div>

               <div>
                  <li>
                     <img src={duration} alt="duration" />
                     <p><strong>Duration:</strong> 15 hours and 45 minutes</p>
                  </li>
                  <li>
                     <img src={guide} alt="guide" />
                     <p><strong>Guide Service:</strong> Included</p>
                  </li>
                  <li>
                     <img src={language} alt="language" />
                     <p><strong>Language:</strong> English, Italian</p>
                  </li>
                  <li>
                     <img src={ticket} alt="ticket" />
                     <p><strong>Entry Fees:</strong> Optional</p>
                  </li>
               </div>

               <div>
                  <h5>from <span>53 €</span></h5>
                  <div className="buttonGroup">
                     <button className='viewBtn'>View tour</button>
                     <button className='bookBtn'>Book Now</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default FindTour