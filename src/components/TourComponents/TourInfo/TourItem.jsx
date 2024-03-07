import React from 'react'
import { Link } from 'react-router-dom'

import './TourItem.css'

function TourItem({ data }) {
   return (
      <div className='tourItem'>
         <div className="imagesToursContainer">
            <div className="mainImage">
               <img src={data.image} alt="country" />
            </div>
            <div className="miniImage">
               {/* {
                  data.images.map((img, index) => (
                     <img key={index} src={img.image} alt="country" />
                  ))
               } */}
               <img src={data.image} alt="country" />
               <img src={data.image} alt="country" />
               <img src={data.image} alt="country" />
            </div>
         </div>

         <div className="infoTourContainer">
            <div className="infoTourContent">
               <h1>{data.country}, {data.city}</h1>
               <h5>from <span>{data.price}$</span></h5>
               <p>{data.description}</p>
            </div>
            <div className="dateTourContent">
               <h5>Select date</h5>
            </div>
            <div className="timeTourContent">
               <label htmlFor="time">Time</label>
               <input type="number" name='time' placeholder='Select the time' />
            </div>
            <div className="btnTourContent">
               <button> <Link to={`/tour/${data.id}/purchase`}>Buy Now</Link></button>
            </div>
         </div>
      </div>
   )
}

export default TourItem