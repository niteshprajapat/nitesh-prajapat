import React, { useEffect, useState } from "react";

import Aos from "aos";
import 'aos/dist/aos.css'

import {BsSunFill, BsMoonFill } from 'react-icons/bs';
import About from "./components/About";

import HeroSection from "./components/HeroSection";
import TechStack from "./components/TechStack";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

const App = () =>{

    const [theme, setTheme] = useState(null)

    useEffect( () =>{
        if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            setTheme('dark')
        }else{
            setTheme('light')
        }
    }, [])

    useEffect( () =>{
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    const handleThemeSwitch = () =>{
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }


    useEffect(() =>{
        Aos.init({
            once: true,
            easing: 'ease-in-out'
        })
    })

    return(
        <div>
            <button
                onClick={handleThemeSwitch}
                type="button"
                className="fixed z-10 top-6 right-10 bg-transparent p-4 "
            >
                {theme === 'dark' ? <BsSunFill  size={25} className="fill-yellow-500 hover:fill-yellow-200"/> : <BsMoonFill  size={25} className="fill-black hover:fill-slate-600"/>}
            </button>


            <div className="bg:white dark:bg-slate-900 bg-noise">
                <div className="max-w-[80%] mx-auto w-11/12">
                    <HeroSection />
                    <TechStack />
                    <About />
                    <Projects />
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App;