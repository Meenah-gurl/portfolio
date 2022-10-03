import React from 'react'
import {Link} from 'react-router-dom'

const TestiForm = () => {
  return (
    <div className=''>
        <div className='bg-white rounded-tr-2xl rounded-bl-2xl px-4 py-4 shadow-lg shadow-purple-200 relative -top-[420px]'>
            <div className='space-y-3'>
                <h1 className='font-poppins text-lg font-bold'>Testify</h1>
                <div className='flex flex-col gap-4'>
                    <form action="" method="post" className='space-y-3 w-full'>
                        <div className='grid grid-col-2 gap-3'>
                            <div className=''>
                                <input type="text" placeholder='your name' className=' border  border-gray-400 w-full px-2 rounded-2xl py-1' />
                            </div>
                            <div className=''>
                                <input type="email" placeholder='email' className=' border border-gray-400 w-full px-2 rounded-2xl py-1' />
                            </div>
                        </div>
                        <div className='grid grid-col-2 gap-3'>
                            <div className=''>
                                <input type="text" placeholder='occupation' className=' border border-gray-400 w-full px-2 rounded-2xl py-1 ' />
                            </div>
                            <div className=''>
                                <input type="file" className=' border border-gray-400 px-2 rounded-2xl py-1' />
                            </div>
                        </div>
                        <div className='flex flex-row gap-3'>
                            <div className=''>
                              <textarea name="" placeholder='enter your messge' id="" cols="30"  className='border border-gray-400 rounded-2xl px-2'></textarea>
                            </div>
                        </div>

                        <Link className='flex  md:justify-center items-center'>
                            <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                                Send Message
                            </div>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TestiForm