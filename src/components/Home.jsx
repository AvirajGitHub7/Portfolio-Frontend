import React from 'react'
function Home() {
  return (
    <>
      <div className=" max-w-screen-2xl mx-auto md:px-20 px-0 navbar bg-base-100 shadow-sm fixed z-50 top ">
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
  <div className="navbar-end">
    <a className="btn text-xl">Login</a>
  </div>
     </div> 

     <div className="details">
         <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Aviraj Seal </h1>
       <p className="text-lg text-gray-600 max-w-xl">
        I'm a passionate Web Developer skilled in MERN stack, currently pursuing B.Tech in CSE. I love building modern, responsive websites and exploring new technologies.
        </p>
        <a href="#contact" className="mt-4 btn btn-primary">Get in Touch</a>
        </section>
     </div>
    </>
  )
}

export default Home
