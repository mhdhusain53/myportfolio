import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Footer from "./Footer";
import Contact from "./Contact";
import About from "./About";
import Projects from "./Projects";


const App = () => {

    const page = () => {
        switch (window.location.pathname) {
            case '/':
                return <Home />
                break;
            case '/about':
                return <About />;
                break;
            case '/projects':
                return <Projects />;
                break;
            case '/contact':
                return <Contact />
                break;
        }
    }

    return (
        <div>
            <div className="bgg w-full h-screen">
                {/* <img src="./images/bg.png" className="object-cover w-full h-full" /> */}
            </div>
            <div className="w-5/6 sm:w-3/4 mainframe m-auto py-10 md:py-16 ">
                <div className=" border-2 border-yellow-400  bg-white">
                    <Navbar />
                    {page()}
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default App;