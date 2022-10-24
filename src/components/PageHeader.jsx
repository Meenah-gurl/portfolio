import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import DarkTheme from './DarkTheme'

const PageHeader = () => {
  const [showMenu,setShowMenu]=useState(false)
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation().pathname;

  useEffect(() => {
      if (document.documentElement.classList.contains('dark')) {
          setDarkMode(true);
      } else {
          setDarkMode(false);
      }
  }, [])
  

  let toggleDarkMode = () => {
      if (localStorage.theme === 'dark') {
          localStorage.removeItem('theme')
      } else {
          localStorage.setItem('theme', 'dark')
      }

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
          setDarkMode(true);
      } else {
          document.documentElement.classList.remove('dark')
          setDarkMode(false);
      }
  }
  return (
    <>
      
      <div className="p-4 bg-white fixed top-0 z-50 w-full">
        <div className="max-w-6xl mx-auto text-slate-900  md:flex-row flex gap- justify-center items-center">
          <div className='font-poppins flex flex-grow'>
            <img src="/src/assets/amina.png" className='w-72 absolute -top-16' alt="" />
          </div>
          <div className={showMenu ? 'fixed sm:block p-3 sm:p-0 sm:relative flex-col sm:flex-row top-0 right-0 flex-grow  w-screen sm:h-auto sm:w-auto bg-gray-700  sm:bg-transparent h-screen bg-opacity-20 sm:backdrop-blur-0 backdrop-blur-lg' : 'hidden fixed sm:block p-3 sm:p-0 sm:relative flex-col sm:flex-row top-0 right-0 flex-grow sm:h-auto sm:w-autobg-gray-300 bg-gray-700 sm:bg-transparent bg-opacity-40 sm:backdrop-blur-0 backdrop-blur-lg'} style={{'zIndex':'9999999999999999999999999999999999999'}}>
            <div className="bg-white sm:bg-transparent border sm:border-0 text-black sm:text-white rounded-md flex flex-col  sm:flex-row font-poppins font-medium ">
              <Link to="/">
                <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                  <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Home</span>
                  {/* <div className='absolute top-0 -inset-full h-full z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine'></div> */}
                </div>
              </Link>
              <a href='#about'>
                <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                  <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>About</span>
                </div>
              </a>
              <a href='#services'>
                <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                  <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Works</span>
                </div>
              </a>
              <a href='#contact'>
                <div className="group relative px-5 overflow-hidden transistion-all  p-1 hover:bg-white rounded flex justify-center items-center">
                  <span className='w-0 h-0 rounded bg-gradient-to-r from-purple-500 to-pink-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1'></span>
                  <span className='w-full text-slate-900 transition-colors duration-300 ease-in-out group-hover:text-white z-10'>Contact</span>
                </div>
              </a>
              <Link>
                <div className='transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                  Download CV
                </div>
              </Link>
            </div>
            <div className="pt-3 sm:hidden w-full flex justify-center items-center">
              <div onClick={() => setShowMenu(!showMenu)} className="w-9 text-black flex justify-center items-center cursor-pointer h-9 bg-white border rounded-full">
                  <i className="ri-close-fill"></i>
              </div>
            </div>
          </div>
        
          <div className='flex md:justify-start justify-end items-end gap-2 '>
            <button type='button' onClick={()=>setShowMenu(!showMenu)}  className='md:hidden block'>
              <i className='ri-menu-4-fill relative md:top-1 -top-1 '></i>
            </button>
            
            <div className="flex md:items-center md:justify-center justify-start">
              <button type='button' onClick={toggleDarkMode} className=" text-2xl relative md:-top-0 -top-1">
                  {darkMode ? '🌙' : '🌞'}
                  {/* {theme === 'dark'? '<i className="ri-moon-full"><i/>' : '<i className="ri-sun-fill"><i/>'} */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PageHeader