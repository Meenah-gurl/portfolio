import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'

const AppLayout = () => {
  return (
    <div>
        <PageHeader />
        <Footer/>


        <div>
          <Outlet />
        </div>
        
    </div>
  )
}

export default AppLayout