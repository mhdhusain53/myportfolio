import React from "react";

const About = () => {

    return (
        <div>
            <div>
                <div>
                    <img src="images/myphoto.png" className="hover:shadow-2xl rounded-full m-auto w-4/5 sm:3/5 md:w-1/2 lg:w-2/5" />
                </div>
                <div>
                    <p className="md:text-xl text-lg font-light text-center mt-6 px-8 md:px-12">
                        Hey, I am
                        <span className=" font-medium text-xl md:text-2xl"> Mohammed Husain</span>
                        <br />
                        a Information Technology Engineer,
                        and a frontend and backend web developer, with a year of experience. I have develop many websites using MERN technology.</p>
                </div>
            </div>

            <hr className="border-t-2 border-yellow-400 w-2/3 m-auto my-14 -dotted" />


            <div className="">
                <h1 className="text-center text-4xl font-light mt-8">Educational History</h1>
                <p className="text-base font-extralight text-center mb-6">Learning and Living</p>
                <div>
                    <div className="flex  my-2 shadow-lg hover:shadow-2xl m-4 p-2 md:mx-24 md:py-4 ">{/*  primary */}
                        <div className="ml-4 w-2/5 text-lg items-center flex justify-centermd:text-xl  font-normal text-center">
                            B.E., Information Technology
                        </div>
                        <div className="w-3/5 text-sm md:text-base text-center  p-2 mx-4">
                            Pune Institute of Computer Technology, Pune
                            <br />
                            2021 - 2024(Expected)
                        </div>
                    </div>
                    <div className="flex my-4 shadow-lg hover:shadow-2xl m-4 p-2 md:mx-24 md:py-6 ">{/*  secondary */}
                        <div className="ml-4 w-2/5 text-lg flex items-center justify-center md:text-xl font-normal text-center ">
                            HSC (XII), Science
                        </div>
                        <div className="w-3/5 text-sm md:text-base text-center  p-2 mx-4">
                            Mayur College, Dhule (2020)
                            <br />
                            Percentage: 79.08%
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-yellow-400 w-2/3 m-auto my-14 -dotted" />

            <div>
                <h1 className="text-center text-4xl font-light ">Trainings and Courses</h1>
                <p className="text-base font-extralight text-center mb-6">Completed online via Udemy</p>

                <div>
                    <div className="flex  my-4 shadow-lg hover:shadow-2xl m-4 p-2 md:mx-24 md:py-6 ">{/*  primary */}
                        <div className="ml-4 w-2/5 text-sm flex items-center justify-center md:text-xl  font-normal text-center">
                            Complete Web Development Bootcamp.
                            <br />
                            ( May 2021 - Present )
                        </div>
                        <div className="w-3/5 text-sm md:text-base text-center  p-2 mx-4">
                            A Udemy course of Web Development by Dr. Angela Yu. In this course, I am learnt about languages such as HTML, CSS, JavaScript and also Node.js and Express.js.
                        </div>
                    </div>
                    <div className="flex my-4 shadow-lg hover:shadow-2xl m-4 p-2 md:mx-24 md:py-6 ">{/*  secondary */}
                        <div className="ml-4 w-2/5 text-sm flex items-center justify-center md:text-xl font-normal text-center ">
                            The Complete 2021 Flutter Development Bootcamp With Dart
                            <br />
                            ( Mar 2022 - Present )
                        </div>
                        <div className="w-3/5 text-sm md:text-base text-center  p-2 mx-4">
                            In this course I am learning about Flutter and Dart by making some small projects under guidance of Dr. Angela Yu.
                        </div>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-yellow-400 w-2/3 m-auto my-14 -dotted" />



            <div className="">
                <h1 className="text-center text-4xl font-light ">Skills</h1>
                <div className="md:m-20 md:mt-6 m-4 p-4 shadow-lg hover:shadow-2xl">
                    <div className="flex my-3">{/*  primary */}
                        <div className="underline decoration-yellow-400 underline-offset-4	ml-4 w-1/5  md:w-1/3 text-lg  md:text-xl items-center justify-center flex font-normal text-center">
                            FrontEnd
                        </div>
                        <div className=" w-4/5 md:w-2/3 text-sm md:text-lg text-center  p-2 mx-4">
                            <span className="px-3" > HTML </span>
                            <span className="px-3" > CSS </span>
                            <span className="px-3" > Tailwind CSS </span>
                            <span className="px-3" > JavaScript </span>
                            <span className="px-3" > React </span>
                        </div>

                    </div>
                    <div className="flex   my-3 ">{/*  primary */}
                        <div className="underline decoration-yellow-400 underline-offset-4 ml-4 w-1/5  md:w-1/3 text-lg  md:text-xl items-center justify-center flex font-normal text-center">
                            BackEnd
                        </div>
                        <div className="w-4/5 md:w-2/3 text-sm md:text-lg text-center  p-2 mx-4">
                            <span className="px-3" > Node </span>
                            <span className="px-3" > Express </span>
                            <span className="px-3" > Mongoose </span>

                        </div>

                    </div>
                    <div className="flex  my-3   ">{/*  primary */}
                        <div className="underline decoration-yellow-400 underline-offset-4 ml-4 w-1/5  md:w-1/3 text-lg  md:text-xl items-center justify-center flex font-normal text-center">
                            Database
                        </div>
                        <div className="w-4/5 md:w-2/3 text-sm md:text-lg text-center  p-2 mx-4">
                            <span className="px-3" > Mongodb </span>

                        </div>

                    </div>
                    <div className="flex  my-3  ">{/*  primary */}
                        <div className="underline decoration-yellow-400 underline-offset-4 ml-4 w-1/5 text-lg md:w-1/3 md:text-xl items-center justify-center flex font-normal text-center">
                            Programming Languages
                        </div>
                        <div className="w-4/5 md:w-2/3 text-sm md:text-lg text-center  p-2 mx-4">
                            <span className="px-3" > C++ </span>
                            <span className="px-3" > JAVA </span>
                            <span className="px-3" > Python </span>

                        </div>

                    </div>

                </div>
            </div>

            <div className="text-center mb-4 mt-12 md:mt-2">
                <a href ="./myresume_19_8_22.pdf" className="  text-yellow-400 border-yellow-400 text-2xl shadow-lg hover:shadow-2xl  p-4" attributes-list download ="MohammedHusainResume" > Download Resume </a>  
            </div>
        </div>
    )
}

export default About;