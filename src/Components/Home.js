import { useEffect, useState } from "react";
import React from "react";
import { projects } from "./data";

const Home = () => {
    const [state, setState] = useState("");
    var bio2 = `I’m Mohammed Husain, a Product Developer at Acuitas360 and a frontend web developer .

I’m passionate about solving problems, building impactful solutions, and leveraging modern technologies to drive innovation. As a tech enthusiast, I’m exploring the world of AI while utilizing my expertise in data tools and frontend development.`;
    useEffect(() => {
        var i = 0;
        var speed = 30;
        const typeWriter = () => {
            if (i <= bio2.length) {
                var v = bio2.slice(0, i);
                setState(v);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        typeWriter();

    }, [])


    const project = projects.map((data, index) => {
        if (index < 2) {
            return <div className="w-5/6 m-auto text-center shadow-lg hover:shadow-2xl my-6">
                <h1 className="text-xl font-normal">{data.title}l</h1>
                <hr className="border-b border-yellow-400 my-2 w-5/6 m-auto" />
                <p className="text-base p-2 ">
                    {data.desc}
                </p>
                <a href={data.link} target="_blank" className="text-lg hover:font-semibold  hover:text-yellow-400">Check It</a>
            </div>
        }
    })


    return (
        <div className="mt-6">
            <div className="md:flex">
                <div className="ml-3 md:w-2/5 mr-2">
                    <h1 className="text-center text-4xl mb-4">Mohammed Husain</h1>
                    <img src="./images/myphoto.png" className="w-96 m-auto items-center" />
                </div>
                <div className="md:w-3/5 m-4 mt-16 h-32">
                    <p className="md:text-lg text-base font-medium text-gray-600 md:p-8">Hey there,
                    <br/>
                    {state}</p>
                </div>
            </div>

            <hr className="border-t-2 border-yellow-400 w-2/3 m-auto my-14 -dotted" />


            <div className=" pb-4">
                <h1 className="text-center text-4xl pb-6 md:pb-2 font-light">
                    Previous Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2  place-items-center ">
                {project}
                  
                    {/* <div className="w-5/6 text-center shadow-lg hover:shadow-2xl mt-4 mb-4 md:mb-1">
                        <h1 className="text-xl font-normal">Tictactoe Game</h1>
                        <hr className="border-b border-yellow-400 my-2 w-5/6 m-auto" />
                        <p className="text-base p-2 ">
                            Tictactoe game is created using React.js with some modifications.
                        </p>
                        <a href="https://timepasstictactoe.herokuapp.com/" target="_blank" className="text-lg hover:font-semibold hover:text-yellow-400">Check It</a>
                    </div> */}

                </div>
                <div className="">
                    <a className="relative inline-block  bottom-0 left-1/2 sm:left-3/4 hover:fill-yellow-400 hover:text-yellow-400" href="/projects">
                        <p className="inline-block mr-2">Check More</p>
                        <svg className="w-4 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>
                    </a>
                </div>
            </div>


            <div className="hover:shadow-2xl w-3/4 m-auto shadow-lg hover:shadow-2xl my-12 py-4 items-center">
                <h1 className="text-center text-3xl font-light ">Get In Touch</h1>
                <hr className="border-b border-yellow-400 my-2 w-5/6 m-auto" />
                <div className="m-auto content-center text-center">
                    <p className="my-4">Wanna Need Help</p>
                    <a href="/contact" className="text-2xl hover:font-semibold hover:text-yellow-400">Contact Me</a>
                </div>
            </div>
            
            <div className="text-center text-xl hover:fill-yellow-400 hover:text-yellow-400">
                <a href="/about" className="pr-2" >Know more about me</a>
                <svg className="w-6 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z" /></svg>

            </div>

        </div>
    )

}

export default Home;