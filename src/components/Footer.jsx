import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
function Footer() {
  return (
    <div>
       <footer className="bg-neutral text-neutral-content p-10">
  <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-6">
    
    {/* Left Side - Info */}
    <div className="text-center md:text-left">
      <h2 className="text-xl font-semibold">Aviraj Seal</h2>
      <p className="text-sm opacity-80">MERN Stack Developer • Anime Lover</p>
      <p className="text-sm mt-1">© {new Date().getFullYear()} All rights reserved</p>
    </div>

    {/* Center - Links */}
    <nav className="flex gap-6 text-sm font-medium">
      <a className="link link-hover" href="#about">About</a>
      <a className="link link-hover" href="#projects">Projects</a>
      <a className="link link-hover" href="#contact">Contact</a>
    </nav>

    {/* Right Side - Social Icons */}
    <div className="flex text-2xl gap-4">
      <a href="https://github.com/AvirajGitHub7" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/aviraj-seal/" target="_blank" rel="noreferrer">
        <FaLinkedin />
      </a>
      <a href="mailto:avirajseal07@gmail.com">
        <SiGmail />
      </a>
    </div>

  </div>
</footer>

    </div>
  )
}

export default Footer
