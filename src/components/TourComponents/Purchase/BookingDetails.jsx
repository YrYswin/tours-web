import React from 'react'

import './BookingDetails.css'

function BookingDetails() {
   return (
      <div className="bookingDetailParameters">
         <h2>When you will visit?</h2>
         <input type="date" />
         <h2>Wich time</h2>
         <input type="datetime-local" />
         <h1>Select Your Tickets</h1>
         <div className='discount'>
            <li>Free for kids under 6 and disabled visitors (74%+)</li>
            <li>Pregnant women, families with strollers, and visitors on crutches can buy priority tickets at the venue</li>
         </div>
         <div className="ageDetails">
            <div>
               <div className='ageTitle'>
                  <h3>Adult (18+)</h3>
                  <span>€34.00</span>
               </div>
               <div className='counter'>
                  <div className="minus">-</div>
                  <div className="count">0</div>
                  <div className="plus">+</div>
               </div>
            </div>

            <div>
               <div className='ageTitle'>
                  <h3>Child (6-17)</h3>
                  <li>With valid ID</li>
                  <li>Only in combination with: Adult(18+)</li>
                  <span>€22.00</span>
               </div>
               <div className='counter'>
                  <div className="minus">-</div>
                  <div className="count">0</div>
                  <div className="plus">+</div>
               </div>
            </div>

            <div>
               <div className='ageTitle'>
                  <h3>Infant (0-5)</h3>
                  <li>Only in combination with Adult (18+)</li>
                  <span>Free</span>
               </div>
               <div className='counter'>
                  <div className="minus">-</div>
                  <div className="count">0</div>
                  <div className="plus">+</div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BookingDetails