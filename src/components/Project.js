"use client";

import { useState } from "react";
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

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      className="flex justify-center items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row mb-16 p-4 gap-24 w-full md:w-2/3 relative group">
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative w-4/5">
            <Image
              src={imageSrc}
              alt={name}
              className="w-full transition duration-300 md:group-hover:opacity-30"
              width={300}
              height={300}
            />
            <button
              onClick={toggleDescription}
              className="hidden md:flex absolute inset-0 items-center justify-center text-white bg-main-pink shadow-sm h-10 w-24 rounded-xl font-medium text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                top: "46%",
                left: "51%",
                transform: "translate(-50%, -50%)",
              }}
            >
              About
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start">
          <h2 className="font-custom-paragraph font-semibold text-xl mb-1">
            {name}
          </h2>
          <h3 className="text-base mb-4">{subtitle}</h3>
          <div className="flex items-center gap-1">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Image
                src="/github_logo.svg"
                alt="GitHub"
                width={23}
                height={23}
              />
            </a>
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <Image src="/demo.svg" alt="Live Demo" width={30} height={28} />
            </a>
            {email && password && (
              <div className="relative flex items-center">
                <Image
                  src={hovered ? "/unlocked_password.svg" : "/password.svg"}
                  alt="Password"
                  width={25}
                  height={25}
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
                        <span className="text-dark-blue text-xs">
                          {password}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          <p className="text-lg mt-4 block md:hidden">{description}</p>
        </div>
      </div>

      {showDescription && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2 relative">
            <button
              onClick={toggleDescription}
              className="absolute top-4 right-4 text-xl text-gray-700"
            >
              x
            </button>
            <h2 className="font-semibold text-2xl mb-4">Description</h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
