import React from "react";

const SectionTitle = ({id, data}) =>{
    return(
        <div className="mb-10">
            <h1 id={id && id} className="text-xl md:text-2xl lg:text-4xl py-3 font-bold tracking-[0.1rem]  text-transparent bg-clip-text bg-gradient-to-tr from-gray-900 to-gray-600 dark  dark:from-sky-300 dark:to-blue-600" > {data} </h1>
        </div>
    )
}

export default SectionTitle;