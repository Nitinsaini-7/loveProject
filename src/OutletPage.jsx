import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
// import { Component } from './components/Hero/Hero'


const OutletPage = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default OutletPage