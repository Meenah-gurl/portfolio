import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Register = () => {
const [showPassword, togglePassword] = useState(false)

  return (
    <div>
        <div className='bg-white rounded-3xl w-80 flex-col space-y-5 font-poppins'>
            <div className='flex justify-around py-3'>
                <div className=' flex justify-center items-center'>
                <NavLink to="/login" activeClassname="active">
                    <div className='text-gray-400 cursor-pointer'>Login</div>
                </NavLink>
                </div>
                <NavLink to="/register" activeClassname="active">
                    <div className='text-gray-400 cursor-pointer'>Register</div>
                </NavLink>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='rounded-lg w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500'></div>
            </div>
            <div className='px-4 py-4'>
                <form action="" method="get" className='space-y-3'>
                    <div className='w-full'>
                        <input type="text" className='rounded-2xl bg-gray-300 px-2 py-1 w-full' placeholder='Fullname' />
                    </div>
                    <div className='w-full'>
                        <input type="text" className='rounded-2xl bg-gray-300 px-2 py-1 w-full' placeholder='Email' />
                    </div>
                    <div className='w-full flex bg-gray-300 rounded-2xl'>
                        <div className='flex-grow'>
                            <input type={showPassword ? 'text':'password'} className='rounded-2xl bg-gray-300 px-2 py-1 w-full border-none outline-none' placeholder='Password' required />
                        </div>
                        <div className='pr-4 pt-1 cursor-pointer' onClick={ () => togglePassword((prev) => !prev) }>
                            <i className='ri-eye-close-line text-gray-800' {...showPassword ? 'block':'hidden'}></i>
                        </div>
                    </div>
                    
                    <Link>
                        <div className='text-center text-sm cursor-pointer font-semibold text-gray-400 mt-3'>Already have an account</div>
                    </Link>
                    <Link className='flex justify-center items-center'>
                        <div className='w-40 cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex justify-center items-center'>
                         Register
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register
