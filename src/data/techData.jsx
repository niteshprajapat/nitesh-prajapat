import React from "react";

import {FaReact, FaNodeJs, } from 'react-icons/fa'
import {SiTailwindcss, SiStyledcomponents, SiSelenium, SiPython, } from 'react-icons/si'
import {DiJavascript1, DiHtml5, DiCss3} from 'react-icons/di'


const techData = [
    {
        title: 'React JS',
        icon: <FaReact className="h-full w-full text-3xl font-extrabold  fill-black dark:fill-gray-300" />
    },
    {
        title: 'Node JS',
        icon: <FaNodeJs className="h-full w-full fill-black dark:fill-gray-300" />
    },
    
    {
        title: 'Python',
        icon: <SiPython className="h-full w-full fill-black dark:fill-gray-300" />
    },
    {
        title: 'JavaScript',
        icon: <DiJavascript1 className="h-full w-full fill-black dark:fill-gray-300" />
    },
    
    {
        title: 'Selenium',
        icon: <SiSelenium className="h-full w-full fill-black dark:fill-gray-300" />
    },
    
    {
        title: 'TailwindCss',
        icon: <SiTailwindcss className="h-full w-full fill-black dark:fill-gray-300" />
    },
    
    {
        title: 'Styled Components',
        icon: <SiStyledcomponents className="h-full w-full fill-black dark:fill-gray-300" />
    },
    

    {
        title: 'HTML',
        icon: <DiHtml5 className="h-full w-full fill-black dark:fill-gray-300" />
    },
    {
        title: 'CSS',
        icon: <DiCss3 className="h-full w-full fill-black dark:fill-gray-300" />
    },
    
]

export default techData;