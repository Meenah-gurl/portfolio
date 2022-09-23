import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHeader from '../components/PageHeader'

const AppLayout = () => {
  return (
    <div>
        <PageHeader />


        <div>
          <Outlet />
        </div>
        
    </div>
  )
}

export default AppLayout