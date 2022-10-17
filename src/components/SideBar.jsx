import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-52 border-r border-gray-300 h-screen py-10 px-4 font-poppins space-y-7'>
        <div className='flex flex-row gap-4'>
            <div className='rounded-full h-4 w-4 bg-purple-500 relative top-1'></div>
            <div>vnvzbd</div>
        </div>

        <div className='flex flex-col gap-6'>
            <Link activeClassName="activeSidebar">
                <div className='flex gap-4'>
                    <div className='rounded-full flex justify-center items-center bg-white h-6 w-6'>
                        <i className='ri-dashboard-fill'></i>
                    </div>
                    <div>Dashboard</div>
                </div>
            </Link>

            <Link activeClassName="activeSidebar">
                <div className='flex gap-4'>
                    <div className='rounded-full flex justify-center items-center bg-white h-6 w-6'>
                        <i className='ri-upload-cloud-fill'></i>
                    </div>
                    <div>Upload Works</div>
                </div>
            </Link>

            <Link activeClassName="activeSidebar">
                <div className='flex gap-4'>
                    <div className='rounded-full flex justify-center items-center bg-white h-6 w-6'>
                        <i className='ri-user-smile-fill'></i>
                    </div>
                    <div>View Testimonies</div>
                </div>
            </Link>

            <Link activeClassName="activeSidebar">
                <div className='flex gap-4'>
                    <div className='rounded-full flex justify-center items-center bg-white h-6 w-6'>
                        <i className='ri-message-3-fill'></i>
                    </div>
                    <div>Message</div>
                </div>
            </Link>

            <Link activeClassName="activeSidebar">
                <div className='flex gap-4'>
                    <div className='rounded-full flex justify-center items-center bg-white h-6 w-6'>
                        <i className='ri-settings-3-fill'></i>
                    </div>
                    <div>Settings</div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default SideBar