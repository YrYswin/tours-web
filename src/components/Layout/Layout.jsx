import React from 'react'

import Header from '../HeaderFooter/Header'
import Footer from '../HeaderFooter/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
   return (
      <div>
         <Header />
         <Outlet />
         <Footer />
      </div>
   )
}

export default Layout