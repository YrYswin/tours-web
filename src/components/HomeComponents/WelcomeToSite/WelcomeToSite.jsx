import React from 'react'

import './WelcomeToSite.css'

function WelcomeToSite({ image, title, text }) {
   return (
      <div className='welcomeContainer'>
         <div className="welcomeImage">
            <img src={image} alt="welcomeImage" />
         </div>
         <div className="welcomeContent">
            <div className="welcomeTitle">
               <h5>WELCOME TO OUR SITE!</h5>
               <h1>{title}</h1>
            </div>
            <div className="welcomedescription">
               <p>{text}</p>
            </div>
            <div className="welcomeInfo">
               <div>
                  <span>20+</span>
                  <p>Years Experians</p>
               </div>
               <div>
                  <span>100+</span>
                  <p>Happy Customer</p>
               </div>
               <div>
                  <span>15+</span>
                  <p>Choise of Services</p>
               </div>
               <div>
                  <span>10+</span>
                  <p>Professional Guides</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default WelcomeToSite