import React from "react";

import { FaInstagram, FaTwitter, FaDribbble, FaGithub, FaLinkedinIn } from 'react-icons/fa';
// import {BsSuitHeartFill} from 'react-icons/bs'


const Footer = () => {
    return (
        <div className="text-center py-16">
            <div data-aos="fade-down" data-aos-duration='400'>
                <p className="text-xl md:text-2xl font-semibold tracking-[0.05rem] text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600 dark:from-sky-300 dark:to-blue-600">I tried sneaking in my resume on the website <br /> but couldn't find a cool place so yeah.... </p>

                <div className="mt-5 mb-10">
                    <a className="inline-block text-gray-300 bg-gradient-to-tr from-gray-900 to-gray-600 hover:from-gray-900 hover:to-gray-700 dark:bg-gray-300   rounded py-2 px-4" href="https://drive.google.com/file/d/1cG9obkKMwWMajqIu3pvwEdSo6QLiZJMK/view?usp=sharing" target={"_blank"} rel="noreferrer" role={"button"} >Resume 📄</a>
                </div>
            </div>


            <div className="flex justify-center items-center gap-10 mt-12 mb-16 text-black  dark:text-gray-300 ">


                <a href="https://github.com/niteshprajapat/" target={"_blank"} rel="noreferrer" role={"button"} >
                    <FaGithub size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                </a>

                {/* <a href="https://instagram.com/niteshprajapat7918" target={"_blank"} rel="noreferrer">
                        <FaInstagram size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a> */}

                <a href="https://twitter.com/nitesh7918" target={"_blank"} rel="noreferrer">
                    <FaTwitter size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                </a>

                <a href="https://www.linkedin.com/in/nitesh-prajapat-429a811a0" target={"_blank"} rel="noreferrer">
                    <FaLinkedinIn size={25} className="font-bold hover:-translate-y-3 duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                </a>

                {/* <a href="https://dribbble.com/niteshprajapat7918/" target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaDribbble size={25}  className="font-bold hover:-translate-y-3 duration-300 ease-in  cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700" />
                    </a> */}

            </div>

            <div data-aos="fade-up" data-aos-duration='400' className="mt-14 mb-10">
                <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5">
                    Designed and build with 🖤  by <a className="text-base font-bold hover:underline hover:text-gray-600 dark:hover:text-sky-700" href="https://github.com/niteshprajapat/" target={"_blank"} rel="noreferrer"> Nitesh Prajapat</a>
                </p>
            </div>


        </div>
    )
}

export default Footer;