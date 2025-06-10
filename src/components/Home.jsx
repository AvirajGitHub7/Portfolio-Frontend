
import React, { useState, useEffect } from 'react';

function Home() {
const [theme, settheme] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
});

 const DOM_elements=document.documentElement; 
  useEffect(() => {
    if (theme === "dark") {
      DOM_elements.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      DOM_elements.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white  max-w-screen-2xl mx-auto md:px-20 px-0 navbar bg-base-100 shadow-sm fixed z-50 top ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

      <ul  
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Parent</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Portfolio</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu text-xl font-bold  menu-horizontal px-1">
      <li><a href="#home">Home</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </div>

   

  <div className="navbar-end space-x-6">
    <label className="swap swap-rotate ">
  {/* this hidden checkbox controls the state */}
  <input onClick={()=>settheme(theme==="dark"?"light":"dark")} type="checkbox" className="theme-controller" value="synthwave" />

  {/* sun icon */}
  <svg
    className="swap-on h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
  </svg>

  {/* moon icon */}
  <svg
    className="swap-off h-10 w-10 fill-current"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24">
    <path
      d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
  </svg>
    </label>

    <a className="btn text-xl">Login</a>
  </div>
     </div> 

     <div className="details">
         <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-4 dark:bg-gray-900 dark:text-white">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Aviraj Seal </h1>
       <p className="text-lg text-gray-600 max-w-xl dark:text-gray-400">
        I'm a passionate Web Developer skilled in MERN stack, currently pursuing B.Tech in CSE. I love building modern, responsive websites and exploring new technologies.
        </p>
        <a href="#contact" className="mt-4 btn btn-primary">Get in Touch</a>
        </section>
     </div>
    </>
  )
}

export default Home
