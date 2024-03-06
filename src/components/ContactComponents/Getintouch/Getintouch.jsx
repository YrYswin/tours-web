import React from 'react'

import locactionIcon from '../../../assets/svg/locactionIcon.svg'
import phoneIcon from '../../../assets/svg/phoneIcon.svg'
import messageIcon from '../../../assets/svg/messageIcon.svg'
import './Getintouch.css'

function Getintouch() {
   return (
      <div className='getintouch'>
         <div className="contactContainer">
            <div className="contactTitle">
               <h1>Get In Touch!</h1>
               <p>Fill up the form and our Team will get back to you within 24 hours.</p>
            </div>

            <div className='ourData'>
               <div className="ourContact">
                  <img src={locactionIcon} alt="locactionIcon" />
                  <h5>Frucktovaya 32, Bishkek, Kyrgyzstan</h5>
               </div>

               <div className="ourAddress">
                  <img src={phoneIcon} alt="phoneIcon" />
                  <h5>+996 700 11 12 02</h5>
               </div>

               <div className="ourEmail">
                  <img src={messageIcon} alt="messageIcon" />
                  <h5>yryskeldi445@gmail.com</h5>
               </div>
            </div>
         </div>

         <div className="userContact">
            <form action="">
               <div className="inputContainerUser">
                  <label htmlFor="name">Name and Surname</label>
                  <input type="text" placeholder='Enter your name and surname' />
               </div>
               <div className="inputContainerUser">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" placeholder='Enter your email address' />
               </div>
               <div className="inputContainerUser">
                  <label htmlFor="message">Message</label>
                  <input type="text" placeholder='Enter your Message' />
               </div>
               <div className="btnFormUser">
                  <button type='submit'>Send message</button>
               </div>
            </form>
         </div>
      </div>
   )
}

export default Getintouch