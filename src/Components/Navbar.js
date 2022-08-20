import React, { useState } from "react";

const Navbar = () => {
  var location=window.location.pathname;
  const [nav, setNav] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-white p-6">

        <div className="block sm:hidden">
          <button onClick={() => setNav(!nav)} className="flex items-center px-3 py-2 border rounded text-yellow-400 border-yellow-400 hover:text-white hover:bg-yellow-400 bg-white hover:border-yellow-400">
            <svg className="fill-current  h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Home</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-grow  sm:w-auto">

          <div className={`${nav ? "" : "hidden"}  sm:flex sm:items-center text-lg sm:text-xl sm:justify-center text-black`}>
            <a href="/" className={`${location === "/" ? "underline decoration-4 decoration-yellow-400 underline-offset-4 " : "hover:text-yellow-400"} bg-white block mt-4 sm:inline-block ms:mt-0 mr-4`}>
              Home
            </a>
            <a href="/about" className={`${location === "/about" ? "underline decoration-4 decoration-yellow-400 underline-offset-4  " : "hover:text-yellow-400"} block mt-4 sm:inline-block ms:mt-0 mr-4`}>
              About
            </a>
            <a href="/projects" className={`${location === "/projects" ? "underline decoration-4 decoration-yellow-400 underline-offset-4 " : "hover:text-yellow-400"} block mt-4 sm:inline-block ms:mt-0 mr-4`}>
              Projects
            </a>
            <a href="/contact" className={`${location === "/contact" ? "underline  decoration-4 decoration-yellow-400 underline-offset-4 " : "hover:text-yellow-400"} block mt-4 sm:inline-block ms:mt-0 mr-4`}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;