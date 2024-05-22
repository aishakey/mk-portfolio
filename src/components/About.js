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
    <Section id="about" title="About">
      <ul className="stack-cards js-stack-cards">
        <li className="stack-cards__item js-stack-cards__item relative bg-[#C5F7FF] border-4 border-[#02A3DC] rounded-xl p-4 mb-6 mx-36 h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/blob1_1.svg"
            alt="Blob 1"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/blob1_2.svg"
            alt="Blob 2"
            width={160}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2"
          />
          <div className="w-1/3 h-full  flex items-center justify-center">
            <Image
              src="/dev_avatar.svg"
              alt="Developer Avatar"
              width={200}
              height={100}
            />
          </div>
          <div className="w-2/3 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
              From Figma to Full Stack
            </h2>
            <p className="font-normal leading-7 px-8">
              Blending design with development, my approach to coding is deeply
              rooted in a technical and aesthetic foundation. Proficient in the
              MERN stack, I specialize in translating Figma designs into
              functional, user-centric applications. My work reflects a seamless
              fusion of form and function, where each line of code is both an
              execution of strategy and a brushstroke of creativity.
            </p>
          </div>
        </li>
        <li className="stack-cards__item js-stack-cards__item relative bg-[#D5E2FF] border-4 border-[#7FA6FF] rounded-xl p-4 mb-4 mx-36 h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/blob2_1.svg"
            alt="Blob 3"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/blob2_2.svg"
            alt="Blob 4"
            width={160}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2"
          />
          <div className="w-1/3 ml-8 h-full flex items-center justify-center">
            <Image
              src="/chem_avatar.svg"
              alt="Chemistry Avatar"
              width={210}
              height={100}
            />
          </div>
          <div className="w-2/3 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Blending Chemistry with Code
            </h2>
            <p className="font-normal leading-7 px-8">
              With a couple of chemistry degrees in my pocket and a knack for
              material science, I spent some quality time in one of the top U.S.
              labs. There, I played with complex compounds and dived deep into
              data, all powered by a love for math. These skills turned out to
              be just the right mix for software development, where I now blend
              precision with creativity to cook up innovative solutions.
            </p>
          </div>
        </li>
        <li className="stack-cards__item js-stack-cards__item relative bg-[#FFE1F2] border-4 border-[#FF48B0] rounded-xl p-4 mb-4 mx-36 h-96 flex items-center justify-center overflow-hidden">
          <Image
            src="/blob3_1.svg"
            alt="Blob 5"
            width={200}
            height={100}
            className="absolute top-5 left-5 -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src="/blob3_2.svg"
            alt="Blob 6"
            width={160}
            height={80}
            className="absolute bottom-5 right-10 translate-x-1/2 translate-y-1/2"
          />
          <div className="w-1/3 h-full ml-8 flex items-center justify-center">
            <Image
              src="/tennis_avatar.svg"
              alt="Tennis Avatar"
              width={190}
              height={95}
            />
          </div>
          <div className="w-2/3 h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Game, Set, Match
            </h2>
            <p className="font-normal leading-7 px-8">
              Tennis was my first passion, taking me from the courts of Russia
              to the competitive arenas of America. It taught me more than just
              the game; it instilled discipline, adaptability, and the spirit of
              teamwork. These lessons go beyond sports, influencing my approach
              to every project and challenge in my professional life.
            </p>
          </div>
        </li>
      </ul>
    </Section>
  );
}
