import React from 'react'

import dateIcon from '../../assets/svg/dateIcon.svg'
import search from '../../assets/svg/search.svg'
import taxiIcon from '../../assets/svg/taxiIcon.svg'
import timeIcon from '../../assets/svg/timeIcon.svg'
import tourIcon from '../../assets/svg/tourIcon.svg'

function PublicTours() {
   return (
      <div className='searchParameters'>
         <label>
            <p>
               <img src={dateIcon} alt="dateIcon" />Date
            </p>
            <input type="date" name="datePublic" id="datePublic" />
            {/* <select name="time" id="time">
                           <option value="1:00">1:00</option>
                           <option value="2:00">2:00</option>
                           <option value="3:00">3:00</option>
                           <option value="4:00">4:00</option>
                        </select> */}
         </label>

         <label htmlFor="timePublic">
            <p>
               <img src={timeIcon} alt="timeIcon" />Time
            </p>
            <select name="timePublic" id="timePublic">
               <option value="1:00">1:00</option>
               <option value="2:00">2:00</option>
               <option value="3:00">3:00</option>
               <option value="4:00">4:00</option>
               <option value="5:00">5:00</option>
               <option value="6:00">6:00</option>
               <option value="7:00">7:00</option>
            </select>
         </label>

         <label htmlFor="tourPublic">
            <p>
               <img src={tourIcon} alt="tourIcon" />Tour
            </p>
            <select name="tourPublic" id="tourPublic">
               <option value="1">Lucca Bike Tour</option>
               <option value="2">Book a bike</option>
               <option value="3">Toure in the outside of Lucca</option>
               <option value="4">Wine Testing on Tuscany</option>
               <option value="5">Cinque Terre Tour</option>
               <option value="6">Siena and Surroundings</option>
               <option value="7">Pizza & Lucca</option>
               <option value="8">Italy Special Trips</option>
            </select>
         </label>

         <label htmlFor="taxiPublic">
            <p>
               <img src={taxiIcon} alt="taxiIcon" />Transportation
            </p>
            <select name="taxiPublic" id="taxiPublic">
               <option value="bus">minivan and Bus</option>
               <option value="transfers">Transfers & NCC</option>
               <option value="luxery">Luxery Experience</option>
            </select>
         </label>
         <div className="searchSubmit">
            <img src={search} alt="search" />
         </div>
      </div>
   )
}

export default PublicTours