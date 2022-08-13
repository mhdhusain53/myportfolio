import React, { useState } from "react";
import axios from "axios";

const Contact = () => {

    const [state,setState]=useState({name:'',email:'',message:'',a:0})
    

    const setfinal=()=>{
        setState({name:state.name,email:state.email,message:'',a:0});

    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target.name.value,
        //     e.target.email.value,
        //     e.target.message.value);
        const data = {
            name: state.name,
            email: state.email,
            message: state.message
        }
        setState({name:state.name,email:state.email,message:'',a:1});

        setTimeout(setfinal,2950);
        let response = await fetch('https://desolate-brushlands-65843.herokuapp.com/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
            // body:data
        })
        // response = await response.json()
    }



    return (
        <div>
            <h1 className="text-center text-4xl font-light my-8">Contact</h1>

            <div className="grid grid-cols-1 md:grid-cols-2  place-items-center">
                <div className=" w-5/6 mb-8 md:mb-1 shadow-lg hover:shadow-2xl p-4">
                    <div className=" flex justify-center ">
                        <div className="sm:w-2/6 w-1/4 md:w-1/4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-6 w-8 inline" viewBox="0 0 512 512"><path d="M511.2 387l-23.25 100.8c-3.266 14.25-15.79 24.22-30.46 24.22C205.2 512 0 306.8 0 54.5c0-14.66 9.969-27.2 24.22-30.45l100.8-23.25C139.7-2.602 154.7 5.018 160.8 18.92l46.52 108.5c5.438 12.78 1.77 27.67-8.98 36.45L144.5 207.1c33.98 69.22 90.26 125.5 159.5 159.5l44.08-53.8c8.688-10.78 23.69-14.51 36.47-8.975l108.5 46.51C506.1 357.2 514.6 372.4 511.2 387z" /></svg>
                        </div>
                        <div className="sm:w-4/6 w-3/4 md:w-3/4 text-center">
                            <p className="inline lg:text-lg sm:text-lg md:text-base">+91 8767283614</p>
                            <hr className="border-b border-yellow-400 my-4 w-4/6 m-auto" />

                        </div>
                    </div>
                    <div className=" flex justify-center ">
                        <div className="sm:w-2/6 w-1/4 md:w-1/4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-6 w-8 inline" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z" /></svg>
                        </div>
                        <div className="sm:w-4/6 w-3/4 md:w-3/4 text-center">
                            <p className="inline lg:text-lg sm:text-lg md:text-base">mhdhusain53@gmail.com</p>
                            <hr className="border-b border-yellow-400 my-4 w-4/6 m-auto" />

                        </div>
                    </div>
                    <div className=" flex justify-center ">
                        <div className="sm:w-2/6 w-1/4 md:w-1/4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-6 w-8 inline" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z" /></svg>
                        </div>
                        <div className="sm:w-4/6 w-3/4  md:w-3/4 text-center">
                            <p className="inline lg:text-lg sm:text-lg md:text-base">Pune, India</p>
                            <hr className="border-b border-yellow-400 my-4 w-4/6 m-auto" />
                        </div>
                    </div>
                </div>


                <div className="w-5/6 shadow-lg hover:shadow-2xl px-4">
                    <form className="my-8" onSubmit={handleSubmit}>

                        <label for="name">Name:</label>
                        <input id="name" value={state.name} name="name" onChange={(e)=>{setState({name:e.target.value,email:state.email,message:state.message,a:0})}} type="text" className="p-1 w-3/4 mx-2 mb-6 shadow-lg text-base border-2 border-yellow-400" />

                        <label for="email">Email: </label>
                        <input id="email" name="email" value={state.email} type="email" onChange={(e)=>setState({name:state.name,email:e.target.value,message:state.message,a:0})} className="p-1 w-3/4 mx-2 shadow-lg  text-base border-2 border-yellow-400" required />

                        <label className="block mt-6 mb-1" for="message">Message: </label>
                        <textarea rows="5" type="text" id="message" value={state.message} onChange={(e)=>setState({name:state.name,email:state.email,message:e.target.value,a:0})} name="message" className="resize-none text-base p-1 w-full m-auto shadow-lg  border-2 border-yellow-400" required minLength={4}></textarea>

                        <button type="submit" className="inline-block m-auto bg-yellow-400 px-2 py-1  my-2 mt-4 rounded shadow-lg hover:shadow-xl text-lg">Send</button>
                        
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className={`w-8 inline-block ml-4 fill-green-500 ${state.a===1?'':'hidden'}`} viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/></svg> */}
                        <img className={`w-12 inline-block ml-4 fill-green-500 ${state.a===1?'':'hidden'}`} src="images/check.gif" />
                    </form>

                </div>
            </div>



        </div>
    )
}

export default Contact;