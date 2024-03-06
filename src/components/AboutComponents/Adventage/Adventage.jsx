import React from 'react'

import map from '../../../assets/svg/map.svg'
import achivment from '../../../assets/svg/achivment.svg'
import guid from '../../../assets/svg/miniSvg/2.2.svg'
import guaranteed from '../../../assets/svg/miniSvg/4.3.svg'

import './Adventage.css'

function Adventage() {
   return (
      <div className='adventage'>
         <div>
            <div className="imageAdvantage">
               <img src={map} alt="map" />
            </div>
            <h3>Complete Packages For All Your Wishes</h3>
         </div>
         <div>
            <div className="imageAdvantage">
               <img src={achivment} alt="achivment" />
            </div>
            <h3>Over 30 Years of Experience</h3>
         </div>
         <div>
            <div className="imageAdvantage">
               <img src={guid} alt="guid" />
            </div>
            <h3>Expert Guides For You</h3>
         </div>
         <div>
            <div className="imageAdvantage">
               <img src={guaranteed} alt="guaranteed" />
            </div>
            <h3>Guaranteed fun and the bets price</h3>
         </div>
      </div>
   )
}

export default Adventage