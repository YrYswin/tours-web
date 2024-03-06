import React from 'react'

import contact from '../../assets/svg/contact.svg'
import email from '../../assets/svg/email.svg'
import facebook from '../../assets/svg/facebook.svg'
import instagram from '../../assets/svg/instagram.svg'
import logo from '../../assets/svg/logo.svg'
import location from '../../assets/svg/location.svg'
import twitter from '../../assets/svg/twitter.svg'

import './Footer.css'

function Footer() {
   return (
      <div className='footer'>
         <div className="logoBox">
            <img src={logo} alt="logo" />
         </div>
         <div className="infoFooter">
            <div>
               <h1>Services</h1>
               <ul>
                  <li>Bike and Rickshaw Rental</li>
                  <li>Guided Tours of Lucca</li>
                  <li>Guided Bike Tour of Lucca</li>
                  <li>Trip in the Tuscan Hills</li>
                  <li>Transportation With Luxary Cars</li>
                  <li>Wine Tours By Bus With Guide</li>
               </ul>
            </div>

            <div>
               <h1>Home</h1>
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Tour Packages</li>
               </ul>
            </div>

            <div>
               <h1>Help</h1>
               <ul>
                  <li>Terms of Use</li>
                  <li>Provicy Policy</li>
               </ul>
            </div>

            <div>
               <h1>Contacts</h1>
               <ul>
                  <li> <img src={location} alt="location" />Pizza Napaleone, Lucca, Tuscany</li>
                  <li><img src={email} alt="email" />+39 346 368 5708</li>
                  <li><img src={contact} alt="contact" />Italiainlimo@gmail.com</li>
               </ul>
            </div>

            <div>
               <h2>Social Media</h2>
               <div className="social">
                  <img src={twitter} alt="" />
                  <img src={facebook} alt="" />
                  <img src={instagram} alt="" />
               </div>
            </div>
         </div>
         <div className="copyright">
            <p>Copyright © 2022. All right reserved</p>
         </div>
      </div>
   )
}

export default Footer