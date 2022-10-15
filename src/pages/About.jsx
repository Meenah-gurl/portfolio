import React from 'react'
import {Link} from 'react-router-dom'
import BriefAbout from '../components/BriefAbout'
import Service from '../components/Service'
import Testimonies from '../components/Testimonies'

const About = () => {
  return (
    <>
    <div className=''>
      <div className='max-w-6xl mx-auto'>
        <div className='flex md:flex-row flex-col gap-4'>
          {/* section one */}
          <div className='flex-grow md:px-0 px-4'>
            <div className='flex flex-col md:justify-start md:items-start justify-center items-center space-y-4 md:pt-52 pt-20'>
              <div className='font-poppins flex flex-col md:justify-start md:items-start justify-center items-center'>
                <h4 className='text-md text-slate-900 font-semibold pl-3'>Know more</h4>
                <h1 className='text-purple-500 text-5xl md:text-6xl font-bold'>About Me</h1>
                <p className='md:text-base text-sm md:text-start text-center max-w-md pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore commodi deserunt qui recusandae consequatur impedit maiores reiciendis atque tenetur,</p>
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                    Hire me
                </div>
                <Link>
                  <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                      Download CV
                  </div>
                </Link>
              </div>
              {/* <div className='backdrop-blur-2xl w-28 h-28 relative left-96 rounded-full opacity-60 shadow-pink-500 shadow-xl bg-transparent'></div> */}
            </div>
          </div>
          {/* end of section one */}

          {/* section two */}
          <div className=''>
            <div className='pt-20'>
                <div>
                  <img src="/src/assets/mesmile.jpg" className='rounded-tl-full rounded-tr-full w-[600px]' alt="" />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purple-900 py-1'></div>
    </div>

    <BriefAbout/>
      <div className=''>
        gdrtyurtyu
      </div>
    <Service/>
    <Testimonies/>
    </>
  )
}

export default About