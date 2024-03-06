import React from 'react'

import bike from '../../../assets/image/bike.png'
import guide from '../../../assets/image/guide.png'
import taxi from '../../../assets/image/taxi.png'
import bus from '../../../assets/image/bus.png'

import './AboutTransport.css'

function AboutTransport() {
   return (
      <div className='aboutTransport'>
         <div>
            <div className="imageTransport">
               <img src={bike} alt="bike" />
            </div>
            <div className="titleTransport">
               <h1>Bike and rickshaw rental</h1>
               <p>Book your quality vehicle quickly for an hour or all day!</p>
            </div>
         </div>
         <div>
            <div className="imageTransport">
               <img src={guide} alt="guide" />
            </div>
            <div className="titleTransport">
               <h1>Guided tour of the countryside</h1>
               <p>Live the real Lucchese experience by visiting the suburbs by bike!</p>
            </div>
         </div>
         <div>
            <div className="imageTransport">
               <img src={taxi} alt="taxi" />
            </div>
            <div className="titleTransport">
               <h1>Taxi and NCC service</h1>
               <p>Do you need not only a bike but also a driver? Then you have found the right place!</p>
            </div>
         </div>
         <div>
            <div className="imageTransport">
               <img src={bus} alt="bus" />
            </div>
            <div className="titleTransport">
               <h1>Bus Package</h1>
               <p>Do you need not only a bike but also a driver? Then you have found the right place!</p>
            </div>
         </div>
      </div>
   )
}
export default AboutTransport