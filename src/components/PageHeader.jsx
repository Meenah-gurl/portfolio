import React from 'react'
import { Link } from 'react-router-dom'
import DarkTheme from './DarkTheme'

const PageHeader = () => {
  return (
    <>
      
      <div className="p-2 bg-white">
             <div className="max-w-7xl mx-auto text-slate-900 flex-col md:flex-row flex gap-1 items-center">
                <div className='font-poppins'>Sani Amina</div>
                <div className="md:flex-row flex flex-col flex-grow justify-center items-center font-poppins font-medium gap-2">
                    <Link to="/">
                      <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                        <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                        <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Home</span>
                        {/* <div className='absolute top-0 -inset-full h-full z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine'></div> */}
                      </div>
                    </Link>
                    <Link to="/About">
                      <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                        <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                        <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>About</span>
                      </div>
                    </Link>
                    <Link to="/Portfolio">
                      <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                        <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                        <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Works</span>
                      </div>
                    </Link>
                    <Link to="/Contact">
                      <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                        <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                        <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Contact</span>
                      </div>
                    </Link>
                    <Link>
                      <div className='transistion-all text-white  p-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                        Download CV
                      </div>
                    </Link>
                </div>

                <div className='md:hidden block'>
                  <i className='ri-menu-4-fill relative top-1'></i>
                </div>
                
                <div className="flex  items-center md:justify-center justify-start">
                  <DarkTheme/>
                </div>
              </div>
      </div>
    </>
  )
}

export default PageHeader