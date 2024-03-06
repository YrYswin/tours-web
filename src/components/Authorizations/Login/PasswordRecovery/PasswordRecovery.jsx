import React, { useState } from 'react'

import key from '../../../../assets/svg/ForgotIcon.svg'
import check from '../../../../assets/svg/check.svg'
import emailIcon from '../../../../assets/svg/emailIcon.svg'

import './PasswordRecovery.css'

function PasswordRecovery() {
   const [step, setStep] = useState(1)
   const [email, setEmail] = useState('')
   const [message, setMessage] = useState('')
   const [newPassword, setNewPassword] = useState('')

   const handleEmailSubmit = (e) => {
      e.preventDefault()
      setStep(2)
   }

   const handleMessageSubmit = (e) => {
      e.preventDefault()
      setStep(3)
   }

   const handlePasswordSubmit = (e) => {
      e.preventDefault()
      setStep(4)
   }

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   }

   const handleMessageChange = (e) => {
      setMessage(e.target.value);
   }

   const handlePasswordChange = (e) => {
      setNewPassword(e.target.value);
   }

   const renderStep = () => {
      switch (step) {
         case 1:
            return (
               <form className='containerRecovery' onSubmit={handleEmailSubmit}>
                  <div className="imageRecovery">
                     <img src={key} alt="check" />
                     <h3>Forgot Password</h3>
                  </div>
                  <div className="contentRecovery">
                     <p>No worries, we'll send you reset instructions.</p>
                     <label htmlFor="email">Email Address</label>
                     <input
                        type="email" id="email" value={email}
                        placeholder='Enter your email address'
                        onChange={handleEmailChange} required />
                  </div>
                  <div className="buttonRecovery">
                     <button type='submit' className='continiue'>Reset Password</button>
                     <button className='back'>Back to login</button>
                  </div>
               </form>
            )
         case 2:
            return (
               <form className='containerRecovery' onSubmit={handleMessageSubmit}>
                  <div className="imageRecovery">
                     <img src={emailIcon} alt="check" />
                     <h3>Forgot Password</h3>
                  </div>
                  <div className="contentRecovery">
                     <p>A message has been sent to your email address with instructions on how to reset your password.</p>
                     <label htmlFor="message">Enter the code from the email</label>
                     <input type="text" id="message" value={message} onChange={handleMessageChange} required />
                  </div>
                  <div className="buttonRecovery">
                     <button type='submit' className='continiue'>Reset Password</button>
                     <button className='back'>Back to login</button>
                  </div>
               </form>
            )
         case 3:
            return (
               <form className='containerRecovery' onSubmit={handlePasswordSubmit}>
                  <div className="imageRecovery">
                     <img src={key} alt="check" />
                     <h3>Set New Password</h3>
                  </div>
                  <div className="contentRecovery">
                     <p>Your new password must be different from previously used passwords.</p>
                     <label htmlFor="newPassword">New Password</label>
                     <input type="password" id="newPassword" value={newPassword} placeholder='Enter your password' onChange={handlePasswordChange} required />
                     <label htmlFor="newPassword">Confirm Password</label>
                     <input type="password" id="newPassword" value={newPassword} placeholder='Enter your password' onChange={handlePasswordChange} required />
                  </div>
                  <div className="buttonRecovery">
                     <button type='submit' className='continiue'>Reset Password</button>
                     <button className='back'>Back to login</button>
                  </div>
               </form>
            )

         case 4:
            return <div className='containerRecovery'>
               <div className="imageRecovery">
                  <img src={check} alt="check" />
                  <h3>Password Reset</h3>
               </div>
               <div className="contentRecovery">
                  <p>Your password has been successfuly reset.</p>
                  <p>Click below to login in magicially.</p>
               </div>
               <div className="buttonRecovery">
                  <button className='continiue'>Continiue</button>
                  <button className='back'>Back to login</button>
               </div>
            </div>
         default:
            return null
      }
   }
   return (
      <div className='passwordRecovery'>
         <div className="forgot-password-container">
            {renderStep()}
         </div>
      </div>
   )
}

export default PasswordRecovery