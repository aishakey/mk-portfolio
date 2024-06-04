"use client";

import Image from "next/image";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="py-8 px-10 flex justify-between items-center relative">
      <div>
        <Image
          src="/logo.svg"
          width={80}
          height={40}
          alt="Logo"
          className="md:w-20 md:h-10 w-16 h-8"
        />
      </div>
      <div className="hidden md:flex space-x-12 justify-center flex-1 text-center">
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          Projects
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          About
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          Contact
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
      </div>
      <a
        href="/resume.pdf"
        target="_blank"
        className="hidden md:block text-main-pink border-2 border-main-pink rounded-2xl px-4 py-1"
      >
        Resume
      </a>
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          <Image
            src="/menu.svg"
            width={30}
            height={30}
            alt="Menu"
            className="mt-2"
          />
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 w-full bg-white flex flex-col items-center space-y-6 py-8 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ zIndex: 1000 }}
      >
        <div className="w-full flex justify-between items-center px-10">
          <Image src="/logo.svg" width={60} height={30} alt="Logo" />
          <button
            onClick={() => setIsOpen(false)}
            className="focus:outline-none"
          >
            <Image
              src="/close-btn.svg"
              width={20}
              height={20}
              alt="Close Menu"
            />
          </button>
        </div>
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          Projects
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
        <ScrollLink
          to="about"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          About
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth={true}
          duration={500}
          offset={-70}
          className="relative group text-dark-blue cursor-pointer"
          onClick={handleLinkClick}
        >
          Contact
          <span className="block absolute bottom-0 left-0 w-full h-0.5 bg-main-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
        </ScrollLink>
        <a
          href="/resume.pdf"
          target="_blank"
          className="text-main-pink border-2 border-main-pink rounded-2xl px-4 py-1"
          onClick={handleLinkClick}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
