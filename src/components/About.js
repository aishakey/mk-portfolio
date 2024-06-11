"use client";

import Section from "./Section";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    const initStackCardsEffect = (element) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          window.addEventListener("scroll", () => animateStackCards(element));
        } else {
          window.removeEventListener("scroll", () =>
            animateStackCards(element)
          );
        }
      });
      observer.observe(element);
    };

    const animateStackCards = (element) => {
      const top = element.getBoundingClientRect().top;
      const items = element.getElementsByClassName("js-stack-cards__item");
      for (let i = 0; i < items.length; i++) {
        const scrolling = items[i].getBoundingClientRect().top - top;
        if (scrolling > 0) {
          items[i].style.transform = `translateY(${scrolling * 0.1}px) scale(${
            1 - scrolling * 0.001
          })`;
        }
      }
    };

    const stackCards = document.getElementsByClassName("js-stack-cards");
    if (stackCards.length > 0) {
      Array.from(stackCards).forEach((card) => {
        initStackCardsEffect(card);
      });
    }
  }, []);

  return (
    <Section id="about" title="My Story">
      <ul className="stack-cards js-stack-cards -mt-4 md:mt-0">
        <li className="stack-cards__item js-stack-cards__item relative bg-[#C5F7FF] border-4 border-[#02A3DC] rounded-xl p-4 mb-6 mx-4 lg:mx-44 md:mx-24 h-auto lg:py-12 flex flex-col md:flex-row items-center justify-center overflow-hidden">
          <Image
            src="/blob1_1.svg"
            alt="Blob 1"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          />
          <Image
            src="/blob1_2.svg"
            alt="Blob 2"
            width={110}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2 hidden md:block"
          />
          <div className="w-full md:w-1/3 h-auto flex items-center justify-center mb-4 md:mb-0 order-1">
            <Image
              src="/dev_avatar.svg"
              alt="Developer Avatar"
              width={150}
              height={75}
              className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-52 xl:h-52"
            />
          </div>
          <div className="w-full md:w-2/3 h-auto flex flex-col justify-center text-center md:text-left order-2">
            <h2 className="text-lg md:text-xl text-center md:mb-4 mb-2">
              Code Mode
            </h2>
            <p className="text-xs md:text-sm-custom lg:text-base-custom font-normal leading-5 md:leading-6 lg:leading-6 xl:leading-7 px-2 md:px-4 lg:px-4 xl:px-6 z-10">
              Hey! I'm the one behind the keyboard, turning designs into dynamic
              web experiences. With expertise in both{" "}
              <span className="text-[#02A3DC] font-semibold">UI/UX</span> design
              and{" "}
              <span className="text-[#02A3DC] font-semibold">full stack</span>{" "}
              development, I create user-friendly and visually appealing digital
              solutions. I have skills in both frontend and backend development,
              utilizing{" "}
              <span className="text-[#02A3DC] font-semibold">
                JavaScript, React, Next.js, Tailwind, Node.js, Express,
              </span>{" "}
              and <span className="text-[#02A3DC] font-semibold">MongoDB</span>{" "}
              to build seamless and responsive web applications.
            </p>
          </div>
        </li>
        <li className="stack-cards__item js-stack-cards__item relative bg-[#D5E2FF] border-4 border-[#7FA6FF] rounded-xl p-4 mb-6 mx-4 lg:mx-44 md:mx-24 h-auto lg:py-12 flex flex-col md:flex-row items-center justify-center overflow-hidden">
          <Image
            src="/blob2_1.svg"
            alt="Blob 3"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          />
          <Image
            src="/blob2_2.svg"
            alt="Blob 4"
            width={110}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2 hidden md:block"
          />
          <div className="w-full md:w-1/3 h-auto flex items-center justify-center mb-4 md:-pt-6 md:pl-8 md:mb-0 order-1">
            <Image
              src="/chem_avatar.svg"
              alt="Chemistry Avatar"
              width={150}
              height={75}
              className="w-[130px] h-[130px] md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-52 xl:h-52"
            />
          </div>
          <div className="w-full md:w-2/3 h-auto flex flex-col justify-center text-center md:text-left order-2">
            <h2 className="text-lg md:text-xl text-center md:mb-4 mb-2">
              In The Lab{" "}
            </h2>
            <p className="text-xs md:text-sm-custom lg:text-base-custom font-normal leading-5 md:leading-6 lg:leading-6 xl:leading-7 px-2 md:px-4 lg:px-4 xl:px-6 z-10">
              With a robust background in{" "}
              <span className="text-[#5087FF] font-semibold">Chemistry</span>, I
              worked in a prestigious US lab specializing in research and
              innovation. I developed{" "}
              <span className="text-[#5087FF] font-semibold">
                analytical thinking, attention to detail, data analysis, and
                project management skills.
              </span>{" "}
              These abilities enhance my role as a full stack developer,
              allowing me to handle coding challenges with{" "}
              <span className="text-[#5087FF] font-semibold">precision</span>{" "}
              and a{" "}
              <span className="text-[#5087FF] font-semibold">
                methodical approach.
              </span>
            </p>
          </div>
        </li>
        <li className="stack-cards__item js-stack-cards__item relative bg-[#FFE1F2] border-4 border-[#FF48B0] rounded-xl p-4 mb-6 mx-4 lg:mx-44 md:mx-24 h-auto lg:py-12 flex flex-col md:flex-row items-center justify-center overflow-hidden">
          <Image
            src="/blob3_1.svg"
            alt="Blob 5"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2 hidden md:block"
          />
          <Image
            src="/blob3_2.svg"
            alt="Blob 6"
            width={110}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2 hidden md:block"
          />
          <div className="w-full md:w-1/3 h-auto flex items-center justify-center md:pl-20 mb-4 md:mb-0 order-1">
            <Image
              src="/tennis_avatar.svg"
              alt="Tennis Avatar"
              width={150}
              height={75}
              className="ml-6 w-[140px] h-[140px] md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56"
            />
          </div>
          <div className="w-full md:w-2/3 h-auto flex flex-col justify-center text-center md:text-left order-2">
            <h2 className="text-lg md:text-xl text-center md:mb-4 mb-2">
              Game On
            </h2>
            <p className="text-xs md:text-sm-custom lg:text-base-custom font-normal leading-5 md:leading-6 lg:leading-6 xl:leading-7 px-2 md:px-4 lg:px-4 xl:px-6 z-10">
              As a former professional tennis player from Russia, I moved to the
              US at 17 to play{" "}
              <span className="text-[#FF48B0] font-semibold">
                D1 college tennis.{" "}
              </span>
              Playing at a high level taught me{" "}
              <span className="text-[#FF48B0] font-semibold">
                discipline, strategic thinking, teamwork,
              </span>{" "}
              and helped me assimilate into American culture. These skills help
              me tackle coding challenges and collaborate effectively on
              projects, bringing{" "}
              <span className="text-[#FF48B0] font-semibold">
                determination
              </span>{" "}
              and a{" "}
              <span className="text-[#FF48B0] font-semibold">
                winning mindset
              </span>{" "}
              to every development task.
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
