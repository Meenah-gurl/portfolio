import { useState } from "react";
import {Link} from 'react-router-dom'

let Home = () => {
    const [counter, setCount] = useState(0);


    return (
        <>
            <div className=" dark:bg-gray- text-slate-900 overflow-hidden py-24 bg-re-600">
               <div className="flex overflow-hidden max-w-7xl mx-auto ">
                <div className="flex-grow flex flex-col space-y-4">
                    <div className='text-xs w-40 transistion-all text-white px-2  py-1 bg-slate-900 rounded flex justify-center items-center'>
                        Welcome to my portfolio
                    </div>

                    <div className="space-y-2">
                        <h1 className="font-poppins text-5xl font-semibold">Hi, i'm Sani Amina a </h1>
                        <h1 className="font-poppins text-5xl font-semibold text-purple-500">Frontend Developer</h1>
                        <p className="text-slate-900 text-base max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore maxim</p>
                    </div>

                    <div className="flex gap-4">
                    <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                        Hire me
                    </div>
                    <Link>
                        <div className='cursor-pointer transistion-all duration-300 hover:text-purple-400 text-white px-2  py-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex justify-center items-center'>
                            Download CV
                        </div>
                    </Link>
                    </div>
                </div>
                {/* <div className="rounded-full w-96 h-96 bg-purple-500 overflow-hidden bg-opacity-20"></div> */}
               </div>
            </div>
        </>
    )
}

export default Home;