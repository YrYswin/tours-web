import React from 'react'

import TourPackage from './TourPackage'

import './TourPackages.css'

import data from '../../../data/toursData'
const { tours } = data

function TourPackages() {
   return (
      <div className='tourPackages'>
         <div className="tourTitle">
            <h1>Tour Packages</h1>
         </div>
         <div className="tourPackagesContainer">

            {
               tours.map((item) => (
                  <TourPackage key={item.id} data={item} />
               ))
            }

         </div>
      </div>
   )
}

export default TourPackages