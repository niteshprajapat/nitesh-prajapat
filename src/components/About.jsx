import React from "react";
import SectionTitle from "./SectionTitle";

import DiplayPicture from '../image/image.jpg'

const About = () => {
    return (
        <div>
            <SectionTitle id={"about"} data={"About me"} />


            <div className="flex flex-col justify-center items-start md:flex-row gap-10 md:gap-20 pt-14 pb-20">

                <div data-aos="fade-right" data-aos-duration='200' className="w-full md:w-6/12">

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5">
                        Hey , thanks for reading by. This is me in a highly edited picture of mine where i look good which i am not.
                        I am Nitesh.
                    </p>

                    <span className="text-[18px] font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400"> what the name signify?</span>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5 " >
                        “Nitesh” in sanskrit signifies “Follower/Master of the right path” and i am following it daily by learning and evolving myself.
                    </p>

                    <span className="text-[18px] font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400"> some personal interest</span>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5" >
                        I love to spend time with myself and thinking about future and goals. I too love to capture picture while travelling and trekking. I would definetely start travelling around and making stories .
                    </p>

                    <span className="text-[18px] font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400"> the schooling story</span>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5" >
                        i studied the secondary and sr. secondary from the different school. It happened well , great sets of friends and so many memories attached out there.
                    </p>

                    <span className="text-[18px] font-semibold  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600  dark:from-sky-200 dark:to-blue-400"> the college story</span>

                    <p className="text-sm text-gray-800 dark:text-gray-400 tracking-[0.1rem] my-5" >
                        getting into Computer Science & Engineering which i had no idea how i will do by just having an interest of computers.
                        starting was much difficult but at the ending I started loving this.
                    </p>


                </div>

                <img src={DiplayPicture} alt="Nitesh Prajapat" className="w-full md:w-5/12 rounded-xl object-cover saturate-0 duration-300 ease-in-out transform  hover:saturate-100 dark:saturate-100"
                    data-aos="fade-left" data-aos-duration='200'
                />

            </div>

        </div>
    )
}

export default About;