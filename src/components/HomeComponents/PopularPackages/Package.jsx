import React from 'react'

function Package({ img, img_1, img_2, img_3, img_4, title_1, title_2, title_3, title_4 }) {
   return (
      <div className='package'>
         <div className="packageImage">
            <img src={img} alt="" />
         </div>
         <div className="packageInfo">
            <h1>Bike/Rickshaw</h1>
            <div className="packagePrice">
               <p>€</p>
               <h5><span>20</span>/day</h5>
            </div>
            <div className="packageParams">
               <li><img src={img_1} alt="what?" /><p>{title_1}</p></li>
               <li><img src={img_2} alt="what?" /><p>{title_2}</p></li>
               <li><img src={img_3} alt="what?" /><p>{title_3}</p></li>
               <li><img src={img_4} alt="what?" /><p>{title_4}</p></li>
            </div>
            <div className="packageBtn">
               <button>Book Now</button>
            </div>
         </div>
      </div>
   )
}

export default Package