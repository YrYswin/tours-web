import React, { useState } from 'react'

import PublicTours from './PublicTours'
import PrivateTours from './PrivateTours'



import './SearcherTour.css'

function SearcherTour() {
   const [content, setContent] = useState('public')

   const changeContent = (cont) => {
      setContent(cont)
   }
   return (
      <div className='searcherTour content'>
         <div className="searchTitle">
            <h1>Enjoy in the best way!</h1>
            <p>Enjoy our services for you trip anytime</p>
         </div>
         <div className="searchContainer">
            <div className="searchContent">
               <div className="searchBy">
                  <div
                     onClick={() => changeContent('public')}
                     className={content === 'public' ? 'activePublic' : ''}
                  >
                     Public Tour
                  </div>
                  <div
                     onClick={() => changeContent('private')}
                     className={content === 'private' ? 'activePrivate' : ''}
                  >
                     Private Tour
                  </div>
               </div>
               {content === 'public' && <PublicTours />}
               {content === 'private' && <PrivateTours />}
            </div>
         </div>
      </div>
   )
}

export default SearcherTour