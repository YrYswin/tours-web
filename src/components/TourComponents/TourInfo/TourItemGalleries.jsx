import React from 'react'

import './TourItemGalleries.css'

function TourItemGalleries({ data }) {
   return (
      <div className='tourItemGalleries'>
         <div className="commentsTitle">
            <h1>Gallery</h1>
            <div className='arrow'>
               <div className="backPlace">
                  <svg width="50.000000" height="50.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle id="Ellipse 1" cx="25.000000" cy="25.000000" r="25.000000" fill="#FA8B02" fillOpacity="1.000000" />
                     <path id="Vector" d="M27.5 18L20.5 25L27.5 32" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="1.500000" stroklinejoin="round" stroklinecap="round" />
                  </svg>
               </div>
               <div className="nextPlace">
                  <svg width="50.000000" height="50.000000" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <circle id="Ellipse 1" cx="25.000000" cy="25.000000" r="25.000000" fill="#FA8B02" fillOpacity="1.000000" />
                     <path id="Vector" d="M22.5 18L29.5 25L22.5 32" stroke="#FFFFFF" strokeOpacity="1.000000" strokeWidth="1.500000" stroklinejoin="round" stroklinecap="round" />
                  </svg>
               </div>
            </div>
         </div>

         <div className="galleryContainer">
            <img src={data.image} alt="hehe" />
            <img src={data.image} alt="hehe" />
            <img src={data.image} alt="hehe" />
            <img src={data.image} alt="hehe" />
         </div>
      </div>
   )
}

export default TourItemGalleries