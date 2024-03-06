import React from 'react'

import TourPackage from './TourPackage'

import './TourPackages.css'

function TourPackages() {
   return (
      <div className='tourPackages'>
         <div className="tourTitle">
            <h1>Tour Packages</h1>
         </div>
         <div className="packagesContainer">

            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />
            <TourPackage />

         </div>
      </div>
   )
}

export default TourPackages