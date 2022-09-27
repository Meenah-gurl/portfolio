import React from 'react'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import DarkTheme from '../components/DarkTheme'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'

const AppLayout = () => {
  return (
        <>
        {/* <DarkTheme/> */}
        <div>
          <PageHeader />
          <div>
            <Outlet />
          </div>
          <Footer/>
        </div>
        
        </>
 
  )
}

export default AppLayout