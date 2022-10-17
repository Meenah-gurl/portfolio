import React from 'react'

export const Dashboard = () => {
  return (
    
    <div className='md:relative md:left-50 min-h-screen font-poppins'>
      <div className='flex md:flex-row flex-col'>
        <div className='flex flex-col flex-grow md:w-[840px] w-full py-10 px-4 space-y-6 justify-items-center'>
          <div className='w-full rounded-full bg-white py-2 px-2 mx-auto'>
              No idea of what will be here yet
          </div>

          <div className='flex justify-center items-center'>
             <h1 className='text-lg text-gray-700'>Recent Testimonies</h1>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='bg-white px-4 py-4 rounded-lg h-40'>
              fzdfzdg
            </div>
            <div className='bg-white px-4 py-4 rounded-lg h-40'>
              fzdfzdg
            </div>
          </div>
        </div>
        <div className='md:border-l border-gray-400 h-screen py-10 px-4'>
          <div className='flex flex-row gap-4'>
            <div className='rounded-full  relative top-1'>
              <img src="/src/assets/mesmile.jpg" className='rounded-full h-8 w-8 relative -top-1' alt="" />
            </div>
            <div> Sani Amina </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}


export default Dashboard