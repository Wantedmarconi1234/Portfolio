import React, { useState } from "react";
import profileImage from "../../assets/portrait-2.jpg";
import { FaBars, FaTimes, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-[#1e1e2e] shadow-lg shadow-gray-900/50 z-50">
      <div className="flex items-center justify-between py-4 px-6 md:px-10">
        {/* Profile Picture */}
        <div className="flex items-center space-x-3">
          <img
            src={profileImage}
            width={50}
            height={50}
            alt="Profile"
            className="rounded-full border-2 border-gray-500"
          />
          <p className="text-lg font-semibold text-gray-300">F.A</p>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {["home", "about", "tech-stack", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="text-blue-400 font-bold"
              className="cursor-pointer text-gray-300 hover:text-blue-400 transition-all"
            >
              {section.replace("-", " ").charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* Social Icons & Mobile Menu Button */}
        <div className="flex items-center space-x-4 text-gray-300">
          <a 
            href="http://www.linkedin.com/in/fredrick-akuffo"
            target="blank"
          >
            <FaLinkedin className="cursor-pointer hover:text-blue-400 transition-all hidden md:inline" size={22} /></a>
          {/* <FaSquareXTwitter className="cursor-pointer hover:text-blue-400 transition-all hidden md:inline" size={22} /> */}

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden flex flex-col items-center bg-[#252535] text-gray-300 py-5 space-y-4 transition-all duration-300 ${
        isOpen ? "h-auto opacity-100" : "h-0 opacity-0 pointer-events-none"
      }`}>
        {["home", "about", "tech-stack", "projects", "contact"].map((section) => (
          <Link
            key={section}
            to={section}
            smooth={true}
            duration={500}
            spy={true}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-blue-400 text-lg transition-all"
          >
            {section.replace("-", " ").charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}

        {/* Social Icons in Mobile Menu */}
        <div className="flex space-x-5 mt-4">
          <FaLinkedin className="cursor-pointer hover:text-blue-400 transition-all" size={22} />
          {/* <FaSquareXTwitter className="cursor-pointer hover:text-blue-400 transition-all" size={22} /> */}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
