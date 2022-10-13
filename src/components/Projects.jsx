import React from "react";

import SectionTitle from "./SectionTitle";
import ProjectItems from "./ProjectItems";

// import imageData from '../data/imageData'

import project1 from '../image/Project1.PNG'
import project2 from '../image/Project2.PNG'
import project3 from '../image/Project3.PNG'
import project4 from '../image/Project4.PNG'
import { useState } from "react";

const Projects = () => {
    const [reverse, setReverse] = useState(false)



    return (



        <div className="my-20">
            <SectionTitle
                id={"project"}
                data={"Stuff I've built"}
            />


            <div className="flex flex-col justify-center items-start  gap-10 md:gap-20 pt-14 pb-20">

                <ProjectItems
                    title={"Real Estate WebApp"}
                    para={"This project developed under the Html, Css and some sort of JavaScript"}
                    url={"https://github.com/niteshprajapat/RealEstate"}
                    imgURL={project1}
                    reverse={reverse}
                    isCorrect={true}
                />

                <ProjectItems
                    title={"Google Meet Automation"}
                    para={"Google Meet is developed using Python and selenium. This project can automatically join using email. And it  able to share screen as well as login/logout "}
                    url={"https://github.com/niteshprajapat/RealEstate"}
                    imgURL={project2}
                    reverse={reverse}
                    isCorrect={false}
                />

                <ProjectItems
                    title={"Spotify Automation"}
                    para={"Spotify. This is developed using python, selenium, pyautogui. User have all right. He/She can create account, login/logout. User have rights to create a playlist or add a song to playlist. User can login via email as well as phone numbers "}
                    url={"https://github.com/niteshprajapat/RealEstate"}
                    imgURL={project3}
                    reverse={reverse}
                    isCorrect={true}
                />

                {/* <ProjectItems 
                    title={"Real Estate WebApp"}
                    para={"This project developed under the Html, Css and some sort of JavaScript"}
                    url={"https://github.com/niteshprajapat/RealEstate"}
                    imgURL={project4}
                    reverse={reverse}
                    setReverse={setReverse}
                />                
                            */}




            </div>



        </div>
    )
}

export default Projects;