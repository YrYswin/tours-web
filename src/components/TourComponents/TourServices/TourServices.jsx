import React from 'react'

import ItemTourService from './ItemTourService'

import './TourServices.css'

function TourServices() {
   return (
      <div className='tourServices'>
         <div className="titleServices">
            <h1>Services</h1>
         </div>
         <div className="tourServicesContainer">

            <ItemTourService />
            <ItemTourService />
            <ItemTourService />
            <ItemTourService />
            <ItemTourService />
            <ItemTourService />

         </div>
      </div>
   )
}

export default TourServices