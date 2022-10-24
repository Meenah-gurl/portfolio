import { useState } from "react";
import {Link, Outlet} from 'react-router-dom'
import BriefAbout from '../components/BriefAbout'
import Testimonies from "../components/Testimonies";
import Service from '../components/Service'
import Works from "../components/Works";
import ContactForm from "../components/ContactForm";


let Home = () => {
    const [counter, setCount] = useState(0);


    return (
        <>
            <div className="text-slate-900  lg:pt-28 py-24 pt-16 md:px-2 px-2">
                <div className="flex lg:flex-row flex-col  gap-6 max-w-6xl mx-auto ">
                    <div className="flex-grow flex flex-col w-full pt-20  space-y-5 lg:justify-start lg:items-start  justify-center items-center">
                        <div className='text-xs w-40 transistion-all text-white px-2  py-1 bg-slate-900 rounded flex justify-center items-center'>
                            Welcome to my portfolio
                        </div>

                        <div className="cd-headline clip is-full-width space-y-2 flex flex-col md:justify-start md:items-start justify-center items-center">
                            <h1 className="font-poppins text-3xl md:text-5xl font-semibold">Hi, i'm Sani Amina a </h1>
                            <h1 className="cd-words-wrapper font-poppins text-3xl md:text-5xl font-semibold text-purple-500">
                                <b className="is-visible">Fontend Developer</b> 
                                {/* <b className="">UI/UX Designer</b> 
                                <b className="">Web Content Writer</b>  */}
                            </h1>
                            <p className="text-slate-900 text-base max-w-sm md:text-left text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum labore maxim</p>
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
                    <div className="relative" id="bannerSide">
                        <div>
                            <img src="/src/assets/mewhite.png" className="md:w-[50vh] w-[40vh] lg:relative lg:left-3 md:mx-auto" alt="" />
                        </div>
                    </div>
                    {/* <div className="">
                        <img src="/src/assets/Bimage1.png"  className="lg:relative -top-18 -left-24" alt="No Image" />
                    </div> */}
                </div>
            </div>

            <BriefAbout/>
            <Service/>
            <Works/>
            <Testimonies/>
            <ContactForm/>
            {/* <Outlet/> */}
           
        </>
    )
}

export default Home;