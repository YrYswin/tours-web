import React from 'react'

import Package from './Package'

import zero from '../../../assets/svg/miniSvg/0.0.svg'
import one_a from '../../../assets/svg/miniSvg/1.1.svg'
import one_e from '../../../assets/svg/miniSvg/1.2.svg'
import one_o from '../../../assets/svg/miniSvg/1.3.svg'
import two_a from '../../../assets/svg/miniSvg/2.1.svg'
import two_e from '../../../assets/svg/miniSvg/2.2.svg'
import two_o from '../../../assets/svg/miniSvg/2.3.svg'
import three_a from '../../../assets/svg/miniSvg/3.1.svg'
import three_e from '../../../assets/svg/miniSvg/3.2.svg'
import three_o from '../../../assets/svg/miniSvg/3.3.svg'
import four_a from '../../../assets/svg/miniSvg/4.1.svg'
import four_e from '../../../assets/svg/miniSvg/4.2.svg'
import four_o from '../../../assets/svg/miniSvg/4.3.svg'
import bikeRickshaw from '../../../assets/image/bikeRickshaw.png'
import bikeTour from '../../../assets/image/bikeTour.png'
import busTrips from '../../../assets/image/busTrips.png'
import transfers from '../../../assets/image/transfers.png'

import './PopularPackages.css'

function PopularPackages() {
   return (
      <div className='popularPackages'>
         <div className="packagesTitle">
            <h1>The Most Popular Packages</h1>
         </div>
         <div className="packagesContainers">
            <Package
               img={bikeRickshaw} img_1={one_a} img_2={one_e} img_3={one_o} img_4={zero}
               name='BIKE / RICKSHAW' price={10} title_1='Your bike for a day' title_2='City App'
               title_3='Discount on Rickshaw' title_4='Guaranteed Support'
            />
            <Package
               img={bikeTour} img_1={two_a} img_2={two_e} img_3={two_o} img_4={zero}
               name='BIKE TOURS' price={30} title_1='A Mountain Bike Included' title_2='A Guide For You'
               title_3='Bottle of water' title_4='Guaranteed Support'
            />
            <Package
               img={busTrips} img_1={three_a} img_2={three_e} img_3={three_o} img_4={zero}
               name='BUS TRIP' price={45} title_1='Park ticket' title_2='Return bus'
               title_3='Companion' title_4='Guaranteed Support'
            />
            <Package
               img={transfers} img_1={four_a} img_2={four_e} img_3={four_o} img_4={zero}
               name='TRANSFER' price={10} title_1='Personal Driver' title_2='Wherever You Want'
               title_3='At the best price' title_4='Guaranteed Support'
            />
         </div>
      </div>
   )
}

export default PopularPackages