import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import CreateAccount from '../Authorizations/CreateAccount'
import Login from '../Authorizations/Login/Login'
import PasswordRecovery from '../Authorizations/Login/PasswordRecovery/PasswordRecovery'

import backgroundHome from '../../assets/image/background.png'
import aboutBackground from '../../assets/image/aboutBachground.png'
import defaultAvatar from '../../assets/svg/defaultAvatar.svg'
import logo from '../../assets/svg/logo.svg'

import './Header.css'

function Header() {
   const [modal, setModal] = useState('')
   const [activePage, setActivePage] = useState('');
   const { token, user } = useSelector((state) => state.user)

   const location = useLocation();
   useEffect(() => {
      const path = location.pathname.split('/')[1];
      setActivePage(path);
   }, [location]);

   function changePopup(message) {
      setModal(message)
   }

   return (
      <div className='header'>
         <div className="logoBox">
            <img src={logo} alt="logo" />
         </div>
         <div className={activePage === '' || activePage === 'about' ? 'pagesBox white' : 'pagesBox'}>
            <Link className={activePage === '' ? 'activeClass' : ''} to='/'>Home</Link>
            <Link className={activePage === 'about' ? 'activeClass' : ''} to='/about'>About Us</Link>
            <Link className={activePage === 'tour' ? 'activeClass' : ''} to='/tour'>Tour Package</Link>
            <Link className={activePage === 'contact' ? 'activeClass' : ''} to='/contact'>Contact Us</Link>
         </div>
         <div className="authorizationBox">
            <select name="language" id="language">
               <option value="eng">Eng</option>
               <option value="rus">Rus</option>
               <option value="kgs">Kgs</option>
            </select>
            {
               token ? (
                  <Link to='/account-page'>
                     <img src={user?.avatar ? user?.avatar : defaultAvatar} alt="" />
                  </Link>
               ) :
                  <div className="authorizationBtn">
                     <button className='loginBtn' onClick={() => changePopup('login')}>Login</button>
                     <button className='signupBtn' onClick={() => changePopup('signup')}>Sign Up</button>
                  </div>
            }
         </div>

         {modal === 'signup' && <CreateAccount changePopup={changePopup} />}
         {modal === 'login' && <Login changePopup={changePopup} />}
         {modal === 'recovery' && <PasswordRecovery changePopup={changePopup} />}

         <div className="background">
            {activePage === '' && <img src={backgroundHome} alt="" />}
            {activePage === 'about' && <img src={aboutBackground} alt="" />}
         </div>
      </div>
   )
}

export default Header