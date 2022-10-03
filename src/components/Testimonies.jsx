import React, { useState } from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import "@splidejs/splide/dist/css/splide.min.css";
import TestiForm from './TestiForm';


export const Testimonies = () => {
    const [testify, openTestify]= useState(false)

  return (
    <>
    <div className='' id='tesBanner'>
        <Splide options={{
            type: 'loop',
            rewind:true, 
            autoplay: true,
            perMove: 1,
            perPage: 1, 
            gap: '3rem',
            arrows: false,
            pagination: false,
            autoScroll: {
                pauseOnHover: true,
                pauseOnFocus: false,
                // rewind: false,
                speed: 2
            },
        
        }}
        extensions={{ AutoScroll }}
        >
            <SplideSlide>
                <div className='flex flex-col justify-center items-center py-16 space-y-4'>
                    <div className='text-white text-6xl'>
                        <i class="ri-double-quotes-l"></i>
                    </div>
                    <div className='text-md max-w-2xl text-white font-poppins font-normal'>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quam voluptate architecto deserunt expedita voluptas commodi molestias. Enim laborum vitae ipsa commodi. Veniam fuga</p>
                    </div>
                    <div className='bg-white rounded-full h-12 w-12'>
                        <img src="/src/assets/momma.png" className='rounded-full h-12 w-12' alt="" />
                    </div>
                    <div className='text-white font-poppins font-medium text-center'>
                        <p>Pheobe Thurderman</p>
                        <p>Business Owner</p>
                    </div>
                </div>
            </SplideSlide>
            <SplideSlide>
                <div className='flex flex-col justify-center items-center py-16 space-y-4'>
                    <div className='text-white text-6xl'>
                        <i class="ri-double-quotes-l"></i>
                    </div>
                    <div className='text-md max-w-2xl text-white font-poppins font-normal'>
                        <p className='text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta quam voluptate architecto deserunt expedita voluptas commodi molestias. Enim laborum vitae ipsa commodi. Veniam fuga</p>
                    </div>
                    <div className='bg-white rounded-full h-12 w-12'>
                        <img src="/src/assets/momma.png" className='rounded-full h-12 w-12' alt="" />
                    </div>
                    <div className='text-white font-poppins font-medium text-center'>
                        <p>Max Thurderman</p>
                        <p>Business Owner</p>
                    </div>
                </div>
            </SplideSlide>
        </Splide>
        
        <div>
            <div className='text-white flex justify-end items-center px-4 py-4'>
                <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                   <button onClick={() => openTestify((prev) => !prev)}> { testify ? "Thanks" : "Testify" } </button>
                </div>
            </div>
        </div>
    </div>
    { testify ?
        <div className='flex justify-center items-center'>
            <TestiForm />
        </div>
    : ''
    }
    </>
  )
}

export default Testimonies
