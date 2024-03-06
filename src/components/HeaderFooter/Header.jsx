import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import CreateAccount from '../Authorizations/CreateAccount'
import Login from '../Authorizations/Login/Login'
import PasswordRecovery from '../Authorizations/Login/PasswordRecovery/PasswordRecovery'

import backgroundHome from '../../assets/image/background.png'
import aboutBackground from '../../assets/image/aboutBachground.png'
import logo from '../../assets/svg/logo.svg'

import './Header.css'

function Header() {
   const [activePage, setActivePage] = useState('home')
   const [modal, setModal] = useState('')

   function changeActive(message) {
      setActivePage(message)
   }

   function changePopup(message) {
      setModal(message)
   }
   return (
      <div className={activePage === 'tour' || 'contact' ? 'header colorContrast' : 'header'}>
         <div className="logoBox">
            <img src={logo} alt="logo" />
         </div>
         <div className="pagesBox">
            <Link className={activePage === 'home' ? 'activeClass' : ''} onClick={() => changeActive('home')} to='/'>Home</Link>
            <Link className={activePage === 'about' ? 'activeClass' : ''} onClick={() => changeActive('about')} to='/about'>About Us</Link>
            <Link className={activePage === 'tour' ? 'activeClass' : ''} onClick={() => changeActive('tour')} to='/tour'>Tour Package</Link>
            <Link className={activePage === 'contact' ? 'activeClass' : ''} onClick={() => changeActive('contact')} to='/contact'>Contact Us</Link>
         </div>
         <div className="authorizationBox">
            <select name="language" id="language">
               <option value="eng">Eng</option>
               <option value="rus">Rus</option>
               <option value="kgs">Kgs</option>
            </select>
            <button className='loginBtn' onClick={() => changePopup('login')}>Login</button>
            <button className='signupBtn' onClick={() => changePopup('signup')}>Sign Up</button>
         </div>

         {modal === 'signup' && <CreateAccount changePopup={changePopup} />}
         {modal === 'login' && <Login changePopup={changePopup} />}
         {modal === 'recovery' && <PasswordRecovery changePopup={changePopup} />}

         <div className="background">
            {activePage === 'home' && <img src={backgroundHome} alt="" />}
            {activePage === 'about' && <img src={aboutBackground} alt="" />}
            {activePage === 'tour' && ''}
            {activePage === 'contact' && ''}
         </div>
      </div>
   )
}

export default Header