import React from 'react'

export const Service = () => {
  return (
    <div id='services'>
        <div className='py-8 px-4'>
            <div>
                <span className='font-poppins font-bold flex flex-col justify-center items-center text-slate-900 text-lg'>
                    <h1 className='flex justify-center items-center'>MY SERVICES</h1>
                    <span className='flex flex-row justify-center items-center'>
                        <hr className='border- w-8 border-gray-400' />
                        <i className='ri-service-fill text-purple-500'></i>
                        <hr className='border- w-8 border-gray-400' />
                    </span>
                
                </span>
            </div>
            <div className='max-w-4xl mx-auto py-10 space-y-3'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    {/* first column */}
                    <div className=' rounded-md' id='serviceimage'>
                        <div className='bg-pink-500 opacity-90 rounded-md py-4 px-3 text-slate-900'>
                            <div className='flex flex-col space-y-1 '>
                                <div>
                                    <i className="ri-cellphone-fill text-2xl"></i>
                                </div>
                                <div className=''>
                                    <h1 className='font-bold font-poppins'>UX Researcher</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur. Aspernatur ut consequatur officia accusantium quam quas.</p>
                                </div>
                                <div className='font-bold font-poppins cursor-pointer transistion-all duration-300'>
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second column */}
                    <div className=' rounded-md' id='serviceimage2'>
                        <div className='bg-yellow-500 opacity-90 rounded-md py-4 px-3 text-slate-900'>
                            <div className='flex flex-col space-y-1 '>
                                <div>
                                    <i className="ri-code-s-slash-fill text-2xl"></i>
                                </div>
                                <div className=''>
                                    <h1 className='font-bold font-poppins'>Frontend Developer</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur. Aspernatur ut consequatur officia accusantium quam quas.</p>
                                </div>
                                <div className='font-bold font-poppins cursor-pointer transistion-all duration-300'>
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-3'>
                    {/* first column */}
                    <div className=' rounded-md' id='serviceimage3'>
                        <div className='bg-purple-500 opacity-90 rounded-md py-4 px-3 text-slate-900'>
                            <div className='flex flex-col space-y-1 '>
                                <div>
                                    <i className="ri-edit-fill text-2xl"></i>
                                </div>
                                <div className=''>
                                    <h1 className='font-bold font-poppins'>Web Content Writer</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur. Aspernatur ut consequatur officia accusantium quam quas.</p>
                                </div>
                                <div className='font-bold font-poppins cursor-pointer transistion-all duration-300'>
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* second column */}
                    <div className='rounded-md' id='serviceimage4'>
                        <div className='bg-gray-500 opacity-90 rounded-md py-4 px-3 text-slate-900'>
                            <div className='flex flex-col space-y-1 '>
                                <div>
                                    <i className="ri-pencil-ruler-2-line text-2xl"></i>
                                </div>
                                <div className=''>
                                    <h1 className='font-bold font-poppins'>UI/UX Designer</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, pariatur. Aspernatur ut consequatur officia accusantium quam quas.</p>
                                </div>
                                <div className='font-bold font-poppins cursor-pointer transistion-all duration-300'>
                                    Learn more
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        {/* extra component */}
        <div className='bg-gray-400 py-10'>
           <div className='flex flex-col justify-center items-center font-poppins font-semibold space-y-1'>
                <h2 className='md:text-3xl text-xl text-white'> Have any project in mind</h2>
                <hr className='border-b-2 border-white w-24' />
           </div>
            <div className='flex py-5 justify-center items-center'>
                <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                    Hire me
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
