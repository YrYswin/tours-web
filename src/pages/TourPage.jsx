import React from 'react'
import TourPackages from '../components/TourComponents/TourPackages/TourPackages'
import TourServices from '../components/TourComponents/TourServices/TourServices'
import BookBike from '../components/HomeComponents/BookBike/BookBike'
import Comments from '../components/HomeComponents/Comments/Comments'

function TourPage() {
   return (
      <div className='container'>
         <TourPackages />
         <TourServices />
         <BookBike />
         <Comments />
      </div>
   )
}

export default TourPage