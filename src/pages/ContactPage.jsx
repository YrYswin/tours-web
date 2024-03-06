import React from 'react'

import Getintouch from '../components/ContactComponents/Getintouch/Getintouch'
import MapsContact from '../components/ContactComponents/MapsContact/MapsContact'

function ContactPage() {
   return (
      <div className='container'>
         <Getintouch />
         <MapsContact />
      </div>
   )
}

export default ContactPage