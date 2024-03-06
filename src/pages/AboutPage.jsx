import React from 'react'
import OurTour from '../components/AboutComponents/OurTour/OurTour'
import WelcomeToSite from '../components/HomeComponents/WelcomeToSite/WelcomeToSite'
import Comments from '../components/HomeComponents/Comments/Comments'

import AboutWelcome from '../assets/image/AboutWelcome.png'
import Adventage from '../components/AboutComponents/Adventage/Adventage'

function AboutPage() {
   return (
      <div className='container'>
         <OurTour />
         <WelcomeToSite image={AboutWelcome} title='We Are The Center Of LuccaTo Offer You The Best'
            text='We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!' />
         <Adventage />
         <Comments />
      </div>
   )
}

export default AboutPage