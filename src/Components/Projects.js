import React from "react";
import { projects } from "./data";
const Projects = () => {

    const project = projects.map((data) => {
        return <div className="w-5/6 m-auto px-2 text-center shadow-lg hover:shadow-2xl my-6">
            <h1 className="sm:text-xl text-lg font-normal">{data.title}</h1>
            <hr className="border-b border-yellow-400 my-2 w-5/6 m-auto" />
            <p className="sm:text-base text-sm p-2 ">
                {data.desc}
            </p>
            <a href={data.link} target="_blank" className="sm:text-lg text-base font-medium hover:font-semibold  hover:text-yellow-400">Check It</a>
        </div>
    })

    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-light my-12">
                    Previous Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2  place-items-center mb-8">
                    {project}
                </div>
            </div>
        </div>
    )
}

export default Projects;