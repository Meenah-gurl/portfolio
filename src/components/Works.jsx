import React, { useState } from 'react'

export const Works = () => {
    const [showTab, setshowTab]=useState(true)
    // const [showTab2, setshowTab2]=useState(false)
    
    
    // const handleTab =(e)=>{
    //     setshowTab(e);
    // }
    
   
  return (
    <div className='px-4 py-8 space-y-3'>
        <div className='pt-5'>
            <span className='font-poppins font-bold flex flex-col justify-center items-center text-slate-900 text-lg'>
                <h1 className='flex justify-center items-center'>MY LATEST WORKS</h1>
                <span className='flex flex-row justify-center items-center'>
                    <hr className='border- w-8 border-gray-400' />
                    <i className='ri-vip-crown-2-fill text-purple-500'></i>
                    <hr className='border- w-8 border-gray-400' />
                </span>
                <p className='text-center md:text-lg text-base max-w-lg text-gray-600 font-normal'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem eum a placeat quos illo,</p>
            </span>
        </div>
        <div className='max-w-6xl mx-auto space-y-8'>
            <div className='flex font-poppins text-slate-900 font-semibold justify-center items-start'>
                <ul  className='nav nav-pills flex flex-row gap-3'>
                    {/* <li className='nav-item hover:border-b-2 hover:border-purple-500 hover:transition-all duration-300'>
                        <button  onClick={()=>setshowTab((current) => !current)}>All</button>
                    </li> */}
                    <li  className='hover:border-b-2 hover:border-purple-500 hover:transition-all duration-300'>
                        <button  onClick={()=>setshowTab((prev) => !prev)} >Web Design</button>
                    </li>
                    <li  className='hover:border-b-2 hover:border-purple-500 hover:transition-all duration-300'>
                        <button  onClick={()=>setshowTab((prev) => !prev)}>UI Design</button>
                    </li>
                </ul>
            </div>
            <div>
                {/* section all */}

                {
                    showTab ?
                    <div>
                        <div className='flex lg:flex-row md:flex-col flex-col md:grid-cols-2 grid-cols-1 gap-3 justify-center items-center'>
                            {/* first grid */}
                            <div className='bg-red-600 h-80 w-full rounded-md'>
                                <div className=' rounded-md'>
                                    vnmzjanf
                                </div>
                            </div>
                            {/* second grid */}
                            <div className='flex flex-col space-y-3'>
                                <div className='flex flex-row gap-4'>
                                    <div className='bg-yellow-200 h-40 w-40 rounded-md'>
                                        fdfd
                                    </div>
                                    <div className='bg-green-200 h-40 w-40 rounded-md'>
                                        fdfd
                                    </div>
                                </div>
                                <div className='flex flex-row gap-4'>
                                    <div className='bg-yellow-200 h-40 w-40 rounded-md'>
                                        fdfd
                                    </div>
                                    <div className='bg-green-200 h-40 w-40 rounded-md'>
                                        fdfd
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    : 
                    <div>
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-4 font-poppins'>
                            <div className='flex flex-col space-2 py-3 px-3'>
                                <div>
                                    <img src="/src/assets/figma1.png" className='w-96 rounded-md' alt="" />
                                </div>
                                <div className='font-bold font-poppins flex flex-row '>
                                    <span className='flex-grow'>Fund Raising</span>
                                    <span className='text-sm text-white rounded-lg bg-black py-1 px-1 text-center'>Figma</span>
                                </div>
                                <p className='max-w-xs text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis magnam ab f</p>
                                <div className='flex justify-end items-center'>
                                  <a href="https://www.figma.com/file/Tk2kVzYmR9EUJlSbLQtptr/FraisingPrototype?node-id=0%3A1" className='text-xs text-blue-600'>Link to Project</a>
                                </div>
                            </div>

                            <div className='flex flex-col space-2 py-3 px-3'>
                                <div>
                                    <img src="/src/assets/figma1.png" className='w-96 rounded-md' alt="" />
                                </div>
                                <div className='font-bold font-poppins flex flex-row '>
                                    <span className='flex-grow'>Fund Raising</span>
                                    <span className='text-sm text-white rounded-lg bg-black py-1 px-1 text-center'>Figma</span>
                                </div>
                                <p className='max-w-xs text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis magnam ab f</p>
                                <div className='flex justify-end items-center'>
                                  <a href="https://www.figma.com/file/Tk2kVzYmR9EUJlSbLQtptr/FraisingPrototype?node-id=0%3A1" className='text-xs text-blue-600'>Link to Project</a>
                                </div>
                            </div>

                            <div className='flex flex-col space-2 py-3 px-3'>
                                <div>
                                    <img src="/src/assets/figma1.png" className='w-96 rounded-md' alt="" />
                                </div>
                                <div className='font-bold font-poppins flex flex-row '>
                                    <span className='flex-grow'>Fund Raising</span>
                                    <span className='text-sm text-white rounded-lg bg-black py-1 px-1 text-center'>Figma</span>
                                </div>
                                <p className='max-w-xs text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse perferendis magnam ab f</p>
                                <div className='flex justify-end items-center'>
                                  <a href="https://www.figma.com/file/Tk2kVzYmR9EUJlSbLQtptr/FraisingPrototype?node-id=0%3A1" className='text-xs text-blue-600'>Link to Project</a>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                }
                
            </div>
        </div>
    </div>
  )
}

export default Works