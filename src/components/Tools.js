"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { gsap } from "gsap";

export default function Tools() {
  const sectionRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const startAnimation = () => {
    if (window.innerWidth >= 1024) {
      const leftTimeline = gsap.timeline();
      const rightTimeline = gsap.timeline();

      const leftDrops = Array.from({ length: 7 }, (_, i) => ({
        id: `leftDrop${i + 1}`,
        color: "#A1EBF5",
        bubbleId: `leftBubble${i + 1}`,
      }));

      const rightDrops = Array.from({ length: 7 }, (_, i) => ({
        id: `rightDrop${i + 1}`,
        color: "#FDCBFA",
        bubbleId: `rightBubble${i + 1}`,
      }));

      const leftBubblePositions = [
        { left: "77%", bottom: "4%" },
        { left: "57%", bottom: "4%" },
        { left: "67%", bottom: "4%" },
        { left: "72%", bottom: "11%" },
        { left: "61%", bottom: "11%" },
        { left: "66%", bottom: "17%" },
        { left: "66%", bottom: "24%" },
      ];

      const rightBubblePositions = [
        { left: "36%", bottom: "4%" },
        { left: "17%", bottom: "4%" },
        { left: "27%", bottom: "4%" },
        { left: "21%", bottom: "11%" },
        { left: "32%", bottom: "12%" },
        { left: "25%", bottom: "17%" },
        { left: "27%", bottom: "24%" },
      ];

      leftDrops.forEach((drop, index) => {
        const delay = index * 0.7;

        leftTimeline.to(
          `#${drop.id}`,
          {
            y: 208,
            duration: 0.7,
            ease: "power1.in",
            onStart: () => {
              const dropElement = document.getElementById(drop.id);
              if (dropElement) {
                dropElement.innerHTML = `<svg width="30px" viewBox="0 0 30 42">
                  <path fill="${drop.color}" stroke="${drop.color}" stroke-width="1.5"
                    d="M15 3
                    Q16.5 6.8 25 18
                    A12.8 12.8 0 1 1 5 18
                    Q13.5 6.8 15 3z" />
                </svg>`;
              }
            },
            onComplete: () => {
              gsap.to(`#${drop.id}`, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  const bubble = document.getElementById(drop.bubbleId);
                  if (bubble) {
                    bubble.style.opacity = 1;
                    bubble.style.transform = `scale(1)`;
                  }
                },
              });
            },
          },
          delay
        );
      });

      rightDrops.forEach((drop, index) => {
        const delay = index * 0.7;

        rightTimeline.to(
          `#${drop.id}`,
          {
            y: 208,
            duration: 0.7,
            ease: "power1.in",
            onStart: () => {
              const dropElement = document.getElementById(drop.id);
              if (dropElement) {
                dropElement.innerHTML = `<svg width="30px" viewBox="0 0 30 42">
                  <path fill="${drop.color}" stroke="${drop.color}" stroke-width="1.5"
                    d="M15 3
                    Q16.5 6.8 25 18
                    A12.8 12.8 0 1 1 5 18
                    Q13.5 6.8 15 3z" />
                </svg>`;
              }
            },
            onComplete: () => {
              gsap.to(`#${drop.id}`, {
                opacity: 0,
                duration: 0.2,
                onComplete: () => {
                  const bubble = document.getElementById(drop.bubbleId);
                  if (bubble) {
                    bubble.style.opacity = 1;
                    bubble.style.transform = `scale(1)`;
                  }
                },
              });
            },
          },
          delay
        );
      });

      leftBubblePositions.forEach((pos, index) => {
        const bubble = document.getElementById(`leftBubble${index + 1}`);
        if (bubble) {
          bubble.style.left = pos.left;
          bubble.style.bottom = pos.bottom;
        }
      });

      rightBubblePositions.forEach((pos, index) => {
        const bubble = document.getElementById(`rightBubble${index + 1}`);
        if (bubble) {
          bubble.style.left = pos.left;
          bubble.style.bottom = pos.bottom;
        }
      });
    }
  };

  return (
    <Section id="tools" title="Tools" flowers={true}>
      <div className="overflow-hidden relative lg:-mt-32" ref={sectionRef}>
        {/* Combined Hand and Flask Images for larger screens */}
        <div className="absolute-images-container hidden lg:flex">
          {/* Left Combined Image */}
          <div className="left-container relative">
            <Image
              src="/LeftHandAndFlask.svg"
              alt="Left Hand and Flask"
              width={540}
              height={700}
              className="hand-flask-image"
            />
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                id={`leftDrop${i + 1}`}
                className="absolute drop"
                style={{
                  width: "30px",
                  height: "42px",
                  top: "461px",
                  left: "67%",
                }}
              ></div>
            ))}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container"
              id="leftFlask"
            >
              {[
                "node",
                "mongodb",
                "express",
                "aws",
                "rest",
                "jwt",
                "postman",
              ].map((logo, i) => (
                <Image
                  key={i}
                  id={`leftBubble${i + 1}`}
                  src={`/${logo}.svg`}
                  alt={`${logo} logo`}
                  className="absolute opacity-0 bubble"
                  width={40}
                  height={40}
                  style={{ transform: "scale(0)" }}
                />
              ))}
              <div id="steam-left" className="steam-container">
                <div id="anima1">
                  <span style={{ "--i": ".5" }}></span>
                  <span style={{ "--i": ".3" }}></span>
                  <span style={{ "--i": "1.5" }}></span>
                  <span style={{ "--i": "2.5" }}></span>
                  <span style={{ "--i": ".1" }}></span>
                  <span style={{ "--i": ".1" }}></span>
                  <span style={{ "--i": "1.5" }}></span>
                  <span style={{ "--i": "1" }}></span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Combined Image */}
          <div className="right-container relative">
            <Image
              src="/RightHandAndFlask.svg"
              alt="Right Hand and Flask"
              width={540}
              height={700}
              className="hand-flask-image"
            />
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                id={`rightDrop${i + 1}`}
                className="absolute drop"
                style={{
                  width: "30px",
                  height: "42px",
                  top: "461px",
                  left: "27.5%",
                }}
              ></div>
            ))}
            <div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container"
              id="rightFlask"
            >
              {["css", "html", "js", "react", "nextjs", "tw", "figma"].map(
                (logo, i) => (
                  <Image
                    key={i}
                    id={`rightBubble${i + 1}`}
                    src={`/${logo}.svg`}
                    alt={`${logo} logo`}
                    className="absolute opacity-0 bubble"
                    width={40}
                    height={40}
                    style={{ transform: "scale(0)" }}
                  />
                )
              )}
              <div id="steam-right" className="steam-container">
                <div id="anima1">
                  <span style={{ "--i": ".5" }}></span>
                  <span style={{ "--i": ".3" }}></span>
                  <span style={{ "--i": "1.5" }}></span>
                  <span style={{ "--i": "2.5" }}></span>
                  <span style={{ "--i": ".1" }}></span>
                  <span style={{ "--i": ".1" }}></span>
                  <span style={{ "--i": "1.5" }}></span>
                  <span style={{ "--i": "1" }}></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools Container for smaller screens */}
        <div className="lg:hidden flex justify-center items-center px-4">
          <div className="grid grid-cols-4 gap-4">
            {[
              ["node", "mongodb", "express"],
              ["aws", "rest", "jwt", "postman"],
              ["css", "html", "js", "react"],
              ["nextjs", "tw", "figma"],
            ].map((column, columnIndex) => (
              <div
                key={columnIndex}
                className={`flex flex-col items-center ${
                  columnIndex === 0 || columnIndex === 3 ? "mt-8" : ""
                }`}
              >
                {column.map((logo, i) => (
                  <Image
                    key={i}
                    src={`/${logo}.svg`}
                    alt={`${logo} logo`}
                    width={75}
                    height={75}
                    className="mb-4"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
