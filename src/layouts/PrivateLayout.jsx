import React from 'react'
import Dashboard from '../Auth/Dashboard'
import SideBar from '../components/SideBar'

export const PrivateLayout = () => {
  return (
    <div className='select-none h-full bg-gradient-to-r from-purple-300 to-pink-400 bg-opacity-25 bg-transparent py-2 mb-0 md:px-0 px-4 '>
        <div className='max-w-7xl mx-auto rounded-xl border border-gray-300'>
            <div className='flex flex-row gap-4'>
                <div className='md:block hidden'>
                    <SideBar/>
                </div>
                <div>
                    <Dashboard/>
                </div>
            </div>
        </div>
    </div>
  )
}


export default PrivateLayout
