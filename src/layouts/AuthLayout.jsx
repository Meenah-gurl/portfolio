import React from 'react'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
  return (
    <div className="h-screen" id='authbanner'>
      <div className="bg-purple-500 bg-opacity-80 w-full h-screen flex items-center justify-center">
        <div className="">
          <Outlet />
        </div>
      </div>
      </div>
  )
}

export default AuthLayout
