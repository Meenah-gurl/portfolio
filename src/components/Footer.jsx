import React from 'react'
import {Link} from 'react-router-dom'

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-purple-900 text-white py-24 px-6 space-y-2'>
      <div className='max-6xl mx-auto flex flex-col justify-center items-center space-y-3'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className='md:text-5xl text-2xl text-white font-poppins font-medium'>Let's discuss for a project</h1>
          <p className='max-w-md text-center md:text-lg text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit culpa debitis dolores illum ullam saepe,.</p>
        </div>
        <Link>
          <div className='transistion-all duration-300 hover:text-purple-400 text-white  px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
            Start talking
          </div>
        </Link>
      </div>

      <div className='pt-14 max-w-6xl mx-auto'>
        <div className='flex md:flex-row flex-col md:justify-start md:items-center justify-center items-center gap-3'>
          <div className='flex flex-row gap-4 flex-grow'>
            <Link to="/about">
              <div className='text-white font-poppins font-light text-lg hover:text-purple-400 transistion-all duration-300'>
                About
              </div>
            </Link>
            <Link to="/portfolio">
              <div className='text-white font-poppins font-light text-lg hover:text-purple-400 transistion-all duration-300'>
               Works
              </div>
            </Link>
            <Link to="/contact">
              <div className='text-white font-poppins font-light text-lg hover:text-purple-400 transistion-all duration-300'>
                Contact
              </div>
            </Link>
          </div>

          <div className='flex flex-row gap-4'>
            <Link>
              <div className='rounded-full h-10 w-10 border-purple-400 border flex justify-center items-center'>
                <i className='ri-facebook-fill'></i>
              </div>
            </Link>
            <Link>
              <div className='rounded-full h-10 w-10 border-purple-400 border flex justify-center items-center'>
                <i className='ri-twitter-fill'></i>
              </div>
            </Link>
            <Link>
              <div className='rounded-full h-10 w-10 border-purple-400 border flex justify-center items-center'>
                <i class="ri-linkedin-fill"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className='pt-12'>
        <hr className='' />
      </div>
      <div className='flex md:flex-row flex-col gap-1 justify-center items-center space-x-1'>
        <p>Powered by  &copy; {currentYear} Sani Amina</p>
        <p className='border-l-2  h-4 md:block hidden'></p>
        <p>Programmers City</p>
      </div>
    </div>
  )
}

export default Footer
