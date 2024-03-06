import React from 'react'

import kawychki from '../../../assets/svg/kawychki.svg'
import people from '../../../assets/image/people.png'

function People() {
   return (
      <div className='people'>
         <div className="peopleImage">
            <img src={people} alt="people" />
            <h5>James Rouds</h5>
         </div>
         <div className="commentText">
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure
         </div>
         <img className='oneKawychki' src={kawychki} alt="kawychki" />
         <img className='twoKawychki' src={kawychki} alt="kawychki" />
      </div>
   )
}

export default People