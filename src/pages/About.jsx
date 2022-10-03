import React from 'react'

const About = () => {
  return (
    <div className='py-20'>
      <div className='max-w-6xl mx-auto'>
      <div className='flex md:flex-row flex-col gap-4'>
        {/* section one */}
        <div className='flex flex-grow justify-center items-center'>
          <div className='pt font-poppins'>
            <h4 className='text-md text-slate-900 font-semibold pl-3'>Know more</h4>
           <h1 className='text-purple-500 text-2xl md:text-6xl font-bold'>About Me</h1>
           <p className='text-md max-w-md pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores tempore commodi deserunt qui recusandae consequatur impedit maiores reiciendis atque tenetur,</p>
          </div>
        </div>
        {/* end of section one */}

        {/* section two */}
        <div className=''>
          <div className=''>
              <div>
                <img src="/src/assets/mesmile.jpg" className='rounded-tl-full rounded-tr-full w-[600px]' alt="" />
              </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default About