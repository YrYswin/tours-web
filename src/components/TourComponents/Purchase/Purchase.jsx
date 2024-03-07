import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import BookingDetail from './BookingDetails'
import UserDetail from './UserDetail'
import Payment from './Payment'
import data from '../../../data/toursData'

import './Purchase.css'
const { tours } = data

function Purchase() {
   const [step, setStep] = useState(1)
   const { id } = useParams()
   const findProduct = tours.find((x) => x.id === parseInt(id))

   function nextStep(message) {
      if (step === 4) {
         setStep(1)
      } else {
         setStep(step + message)
      }
   }

   const renderStep = () => {
      switch (step) {
         case 1:
            return (
               <BookingDetail />
            )
         case 2:
            return (
               <UserDetail />
            )
         case 3:
            return (
               <Payment />
            )
         case 4:
            return (
               <div className='finish'>
                  Your order is Complete
                  <button><Link to='/'>Go to the Home Page</Link></button>
               </div>
            )
         default:
            return null
      }
   }
   return (
      <div className='purchaseContainer'>
         <div className="progressPurchase">
            <div className="progress">
               <div className="step">1</div>
               <div className="line"></div>
               <div className="step">2</div>
               <div className="line"></div>
               <div className="step">3</div>
            </div>
            <div className="titleProgress">
               <h2>Booking Details</h2>
               <h2>Your Details</h2>
               <h2>Payment</h2>
            </div>
         </div>
         <div className="stepContent">
            <div>
               {renderStep()}
            </div>


            <div className={step === 4 ? 'delete' : 'ticketOverview'}>
               <h1>Your Tickets Overview</h1>

               <div className="tourDetailContainer">
                  <img src={findProduct.image} alt="hehe" />
                  <div className="subInfo">
                     <h5>{findProduct.country}</h5>
                     <p>FRI, 23 DEC 2022</p>
                     <p>14:00</p>
                  </div>
               </div>

               <ul>
                  <li>
                     <div className='yrys'>
                        <div className='quantity'>2</div>
                        <p>Adult (18+)</p>
                     </div>
                     <div>
                        <span>€32.00</span>
                     </div>
                  </li>

                  <li>
                     <div className='yrys'>
                        <div className='quantity'>1</div>
                        <p>Adult (18+)</p>
                     </div>
                     <div>
                        <span>€32.00</span>
                     </div>
                  </li>

                  <li>
                     <div className='yrys'>
                        <div className='quantity'>1</div>
                        <p>Adult (18+)</p>
                     </div>
                     <div>
                        <span>€32.00</span>
                     </div>
                  </li>
               </ul>
               <div className="total">
                  <h1>Total Price</h1>
                  <span>€55.00</span>
               </div>
               <div className="bookinBuyBtn">
                  <button onClick={() => nextStep(1)}>Go te the next shop</button>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Purchase