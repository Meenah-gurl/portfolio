import React from 'react'
import {Link} from 'react-router-dom'

const ContactForm = () => {
  return (
    <div className='py-20'>
      <div>
        <div className='md:max-w-4xl w-auto mx-auto'>
          <div className='bg-gray-50 shadow-sm flex  justify-center items-center md:h-[450px] h-auto px-3 p'>
            <div className='flex  md:flex-row flex-col justify-center items-center px-3'>
              <div className='border-4 border-slate-900 rounded-lg  px-4 py-4 space-y-4 shadow-md'>
                <div className='font-bold font-poppins text-2xl max-w-sm'>
                  <h2 className='max-w-lg'>Fill the form</h2>
                  <h2 className='text-purple-500 '>to contact me</h2>
                </div>
                <div className='flex md:flex-row flex-col gap-20'>
                  <form action="" className='space-y-3 flex-grow' method="get">
                    <div className='flex flex-row gap-4'>
                      <div>
                        <input type="text" placeholder='firstname' className='border-b-2 outline-none px-3 py-3 bg-gray-50 border-gray-200' />
                      </div>
                      <div>
                        <input type="text" placeholder='lastname' className='border-b-2 outline-none px-3 py-3 bg-gray-50 border-gray-200' />
                      </div>
                    </div>
                    <div>
                      <input type="email" placeholder='email' className='w-full border-b-2 outline-none px-3 py-3 bg-gray-50 bg-transparent border-gray-200' />
                    </div>
                    <div>
                      <textarea name="" id="" placeholder='message' className='w-full border-b-2 outline-none px-3  bg-gray-50 bg-transparent border-gray-200'></textarea>
                    </div>
                    <Link className='pl-3'>
                      <div className='w-40 cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                          Submit
                      </div>
                    </Link>
                  </form>

                  <div className='flex justify-center items-center'>
                    <div className='flex flex-col font-poppins'>
                      <h2 className='font-medium font-poppins'>Need Specfic help!</h2>
                      <Link><i className='ri-mail-fill relative px-1 top-1'></i>aminasani.as64@gmail.com</Link>
                      <span><i className='ri-phone-fill relative px-1 top-1'></i> 09034364675 - 09054030637</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm