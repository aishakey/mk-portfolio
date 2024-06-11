"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Project({
  imageSrc,
  name,
  subtitle,
  githubLink,
  liveDemoLink,
  email,
  password,
  description,
}) {
  const [hovered, setHovered] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="flex flex-col md:flex-row justify-center items-center md:items-start p-4 -mt-6 md:mt-0 md:p-8 w-full max-w-4xl mx-auto"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex justify-center w-full md:mr-28 md:w-1/2">
        <Image
          src={imageSrc}
          alt={name}
          className="rounded-md"
          width={320}
          height={320}
        />
      </div>
      <div className="flex flex-col items-center md:items-start w-full md:w-1/2 mt-4 md:mt-0 md:ml-16 text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center">
          <h2 className="text-xl font-semibold font-custom-paragraph">
            {name}
          </h2>
          <button
            onClick={() => setShowDescription(!showDescription)}
            className="hidden md:inline-block text-dark-blue font-light text-xs ml-4 -mb-1 underline"
          >
            Read more
          </button>
        </div>
        <h3 className="text-lg font-semibold mt-2">{subtitle}</h3>
        <div className="flex mt-4 space-x-4 justify-center md:justify-start order-3 md:order-3">
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <Image src="/github_logo.svg" alt="GitHub" width={35} height={35} />
          </a>
          <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
            <Image src="/demo.svg" alt="Live Demo" width={35} height={35} />
          </a>
          {email && password && (
            <div className="relative flex items-center">
              <Image
                src={hovered ? "/unlocked_password.svg" : "/password.svg"}
                alt="Password"
                width={35}
                height={35}
                className="transition duration-300 transform hover:scale-110"
              />
              {hovered && (
                <div className="absolute top-0 left-8 flex flex-col gap-2 ml-2">
                  <div className="bg-white p-2 border-2 border-dark-blue rounded-xl shadow-md flex flex-col items-start">
                    <div className="flex items-center">
                      <span className="text-dark-blue text-xs font-bold mr-1">
                        Email:
                      </span>
                      <span className="text-dark-blue text-xs">{email}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <span className="text-dark-blue text-xs font-bold mr-1">
                        Password:
                      </span>
                      <span className="text-dark-blue text-xs">{password}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {(showDescription || isMobile) && (
          <p className="text-base md:text-lg px-8 md:px-0 mb-8 md:mb-0 text-dark-blue font-normal md:font-medium mt-6 order-4 md:order-2">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
