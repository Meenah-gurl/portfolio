import React from 'react'
import {Link} from 'react-router-dom'

export const briefabout = () => {
  return (
    <div className='py-4 px-4'>
        <div className=''>
            <span className='font-poppins font-bold flex flex-col justify-center items-center text-slate-900 text-lg'>
                <h1 className='flex justify-center items-center'>ABOUT ME</h1>
                <span className='flex flex-row justify-center items-center'>
                    <hr className='border- w-8 border-gray-400' />
                    <i className='ri-user-3-fill text-purple-500'></i>
                    <hr className='border- w-8 border-gray-400' />
                </span>
                <p className='text-center md:text-lg text-base max-w-lg text-gray-600 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eum a placeat quos illo,</p>
            </span>
            <div className='max-w-4xl mx-auto py-14'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 md:gap-3 gap-6 mx-auto'>
                    {/* first grid */}
                    <div className='flex flex-row md:justify-center'>
                        <div className='bg-white shadow-md shadow-gray-400 w-60 flex justify-center items-center'>
                            <img src="/src/assets/me.png" className=' h-80' alt="" />
                        </div>
                        <div className='bg-purple-500 w-20 h-60 relative top-12'>
                            <div className='flex flex-col justify-center items-center py-6 gap-2 text-white'>
                                <Link>
                                    <div className='rounded-full h-8 w-8 border-gray-400 border flex justify-center items-center'>
                                        <i className='ri-facebook-fill'></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='rounded-full h-8 w-8 border-gray-400 border flex justify-center items-center'>
                                        <i className='ri-twitter-fill'></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='rounded-full h-8 w-8 border-gray-400 border flex justify-center items-center'>
                                        <i className='ri-instagram-fill'></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='rounded-full h-8 w-8 border-gray-400 border flex justify-center items-center'>
                                        <i className='ri-google-fill'></i>
                                    </div>
                                </Link>
                                <Link>
                                    <div className='rounded-full h-8 w-8 border-gray-400 border flex justify-center items-center'>
                                        <i class="ri-linkedin-fill"></i>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* second grid */}
                    <div className='flex  flex-col '>
                        <div className='-mt-2'>
                            <h1 className='font-bold font-poppins text-lg justify-center flex'>Hello, i am Amina</h1>
                        </div>
                        <div className='flex md:flex-row gap-3 justify-center py-2'>
                            <div className='flex flex-row'>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='font-poppins font-bold text-xl text-purple-500'>30+</span>
                                    <span className='font-medium md:text-l text-sm text-gray-600'>Clients</span>
                                </div>
                                <hr className='border rotate-90 w-10 flex justify-center relative top-7' />
                            </div>
                           
                            <div className='flex flex-row'>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='font-poppins font-bold text-xl text-purple-500'>12+</span>
                                    <span className='font-medium md:text-l text-sm text-gray-600'>Job Completed</span>
                                </div>
                                <hr className='border rotate-90 w-10 flex justify-center relative top-7' />
                            </div>
                            <div className='flex flex-row'>
                                <div className='flex flex-col justify-center items-center'>
                                    <span className='font-poppins font-bold text-xl text-purple-500'>30k</span>
                                    <span className='font-medium md:text-l text-sm text-gray-600'>Clients</span>
                                </div>
                                {/* <hr className='border rotate-90 w-10 flex justify-center relative top-7' /> */}
                            </div>
                        </div>
                        <div className='flex flex-col gap-2 pt-4 justify-center items-center'>
                            <div className='space-y-1'>
                                <div className='font-poppins font-semibold text-sm'>
                                    Web Development
                                </div>
                                <div className='relative'>
                                    <div className='bg-gray-400 rounded-full h-1 w-96 relative'></div>
                                    <div className='bg-purple-500 rounded-full relative -top-1 h-1 w-80'></div>
                                    <div className='relative -top-10 left-80 rounded-tl-md rounded-tr-md rounded-br-md bg-slate-900 w-7 h-7 flex justify-center text-white'>80</div>
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <div className='font-poppins font-semibold text-sm'>
                                    UI/UX Designer
                                </div>
                                <div className='relative'>
                                    <div className='bg-gray-400 rounded-full h-1 w-96 relative'></div>
                                    <div className='bg-purple-500 rounded-full relative -top-1 h-1 w-64'></div>
                                    <div className='relative -top-10 left-64 rounded-tl-md rounded-tr-md rounded-br-md bg-slate-900 w-7 h-7 flex justify-center text-white'>70</div>
                                </div>
                            </div>
                            <div className='space-y-1'>
                                <div className='font-poppins font-semibold text-sm'>
                                   Web Content Writer
                                </div>
                                <div className='relative'>
                                    <div className='bg-gray-400 rounded-full h-1 w-96 relative'></div>
                                    <div className='bg-purple-500 rounded-full relative -top-1 h-1 w-56'></div>
                                    <div className='relative -top-10 left-56 rounded-tl-md rounded-tr-md rounded-br-md bg-slate-900 w-7 h-7 flex justify-center text-white'>64</div>
                                </div>
                            </div>
                        </div>
                        <Link className='flex justify-start items-start pl-6'>
                            <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                                Download CV
                            </div>
                        </Link>
                    </div>
                </div>
            </div> 
       </div>
    </div>
  )
}

export default briefabout