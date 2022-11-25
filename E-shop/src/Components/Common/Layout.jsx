import React from 'react'
import { Outlet } from 'react-router-dom'


import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <div className='main-container w-100'>
      <NavBar />
          <Outlet/>
      <Footer />
    </div>
  )
}

export default Layout