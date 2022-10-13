import React from "react";

import techData from "../data/techData";

const TechItem = ({title, icon}) =>{
    return(
        <div className=" p-5 hover:-translate-y-2 transform transition duration-100 ease-in-out ">
            <div className="w-8 h-8 mb-3 cursor-pointer">
                {icon}
            </div>
            {/* <h1> {title} </h1> */}
        </div>
    )
}

export default TechItem;