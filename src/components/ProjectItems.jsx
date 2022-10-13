import React from "react";
import { FaGithub } from "react-icons/fa";
// import imageData from "../data/imageData";


const ProjectItems = ({ title, para, imgURL, url, reverse, setReverse, isCorrect }) => {
    return (
        <div>

            <div className={`flex flex-col justify-center items-center md:flex-row gap-10 md:gap-20 py-10} ${(isCorrect ? 'md:flex-row' : 'md:flex-row-reverse')}`}>
                <div data-aos={`${isCorrect ? 'fade-right' : 'fade-left '}`} data-aos-duration='300' className="w-full md:w-6/12">

                    <h1 className="text-base md:text-[30px]  font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400 py-5"> {title} </h1>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5" > {para} </p>

                    <a href={url} target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaGithub size={18} className="font-bold  duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700 dark:text-gray-300" />
                    </a>

                </div>

                <img src={imgURL} alt="project1" className="relative w-full  md:w-6/12 rounded-xl object-cover saturate-0 hover:saturate-100 dark:saturate-100 duration-300 ease-in-out shadow-lg"
                    data-aos={`${isCorrect ? 'fade-left' : 'fade-right '}`} data-aos-duration='300' />
            </div>

            {/* <div className="flex flex-col justify-center items-center md:flex-row gap-10 md:gap-20 pt-14 pb-20">
                <div data-aos="fade-right" data-aos-duration='300' className="w-full md:w-6/12">

                    <h1 className="text-[18px] font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400"> {title} </h1>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5" > {para} </p>

                    <a href={url} target={"_blank"} rel="noreferrer" role={"button"}>
                        <FaGithub size={18} className="font-bold  duration-300 ease-in cursor-pointer hover:fill-gray-600 dark:hover:fill-sky-700 dark:text-gray-300" />
                    </a>

                </div>

                <img src={project2} alt="project1" className="w-full md:w-6/12 rounded-xl object-cover saturate-0 hover:saturate-100 dark:saturate-100 duration-300 ease-in-out shadow-lg"
                    data-aos="fade-left" data-aos-duration='300' />
            </div> */}
        </div>
    )
}

export default ProjectItems;