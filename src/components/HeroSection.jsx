import React from "react";


import { FaInstagram, FaTwitter, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div data-aos="fade-down" data-aos-duration='800' className="flex flex-col justify-center items-center  w-full h-screen">
            <div className="text-center max-w-[70%]">

                <h3 className="uppercase text-xs md:text-sm  font-semibold text-gray-700 dark:text-gray-400 tracking-[0.5rem]">hi, my name is </h3>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text  dark:from-sky-300 dark:to-blue-600 my-2 py-2
                
                
                bg-gradient-to-tr from-gray-900 to-gray-600 
                ">Nitesh Prajapat.</h1>
                <h1 className="text-4xl md:text-5xl lg:text-7xl my-1 py-1 font-bold text-transparent bg-clip-text  dark:from-sky-300 dark:to-blue-600 md:my-2 md:py-2
                
                
                bg-gradient-to-tr from-gray-900 to-gray-600 "
                >I am a front-end dev.</h1>

                <p className="text-sm font-normal text-gray-700 dark:text-gray-400 tracking-[0.1rem] my-5"> A normal human b3ing who love's to code </p>

                <div className="flex justify-center items-center gap-10 mt-16 text-black  dark:text-gray-300 ">


                    <a href="https://github.com/niteshprajapat/" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaGithub size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a>



                    {/* <a href="https://instagram.com/niteshprajapat7918" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaInstagram size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a> */}

                    <a href="https://twitter.com/nitesh7918" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaTwitter size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a>

                    <a href="https://www.linkedin.com/in/nitesh-prajapat-429a811a0" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaLinkedinIn size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a>

                    {/* <a href="https://dribbble.com/niteshprajapat7918/" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaDribbble size={25}  className="font-bold hover:-translate-y-3 duration-300 ease-in  cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a> */}

                </div>

            </div>
        </div>
    )
}

export default HeroSection;