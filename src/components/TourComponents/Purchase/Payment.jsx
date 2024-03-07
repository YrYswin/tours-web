import React from 'react'

import './Payment.css'

function Payment() {
   return (
      <div className='payment'>
         <div className="paypalMethod">

            <div className='method'>
               <input type="checkbox" />
               <h1>PayPal</h1>
               <p>You will be redirected to the PayPal website after submitting your order</p>
            </div>
            <img src="" alt="" />

         </div>

         <div className="creditCartMethod">

            <div className='method'>
               <div>
                  <input type="checkbox" />
                  <h1>Pay with Credit Cart</h1>
               </div>
               <img src="" alt="" />

            </div>

            <div className="cartDetail">
               <div className="cartInput">
                  <label htmlFor="number">Cart Number</label>
                  <input type="number" name='number' placeholder='0000-0000-0000-0000' />
               </div>
               <div className="cartInput">
                  <label htmlFor="number">Cart Number</label>
                  <input type="number" name='number' placeholder='0000-0000-0000-0000' />
               </div>
               <div className="cartInput">
                  <label htmlFor="securityCode">Cart Number</label>
                  <input type="password number" name='securityCode' placeholder='0000-0000-0000-0000' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Payment