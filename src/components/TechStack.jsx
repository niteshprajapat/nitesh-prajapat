import React from "react";
import SectionTitle from "./SectionTitle";

import techData from "../data/techData";
import TechItem from "./TechItem";

const TechStack = () => {
    return (
        <div className="py-12">
            <SectionTitle
                data={"A brief list of tech goodies I've been using"}
                id={"tech"}
            />

            <div className="grid grid-cols-3 md:grid-cols-5  lg:grid-cols-10 gap-10  my-20 duration-200 text-center">
                {techData.map((tech) => (
                    <TechItem
                        key={tech.title}
                        title={tech.title}
                        icon={tech.icon}

                        className="dark:hover:fill-sky-500"
                    />
                ))}
            </div>
        </div>
    )
}

export default TechStack;