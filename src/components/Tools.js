"use client";
import { useEffect } from "react";
import Image from "next/image";
import Section from "./Section";
import { gsap } from "gsap";

export default function Tools() {
  useEffect(() => {
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
        { left: "70%", bottom: "10%" },
        { left: "20%", bottom: "9%" },
        { left: "26%", bottom: "29%" },
        { left: "56%", bottom: "32%" },
        { left: "38%", bottom: "50%" },
        { left: "42%", bottom: "70%" },
        { left: "46%", bottom: "8%" },
      ];

      const rightBubblePositions = [
        { left: "20%", bottom: "10%" },
        { left: "24%", bottom: "30%" },
        { left: "70%", bottom: "14%" },
        { left: "52%", bottom: "34%" },
        { left: "40%", bottom: "70%" },
        { left: "38%", bottom: "50%" },
        { left: "46%", bottom: "9%" },
      ];

      const createRippleEffect = (flaskId) => {
        const flask = document.getElementById(flaskId);
        const ripple = document.createElement("div");
        ripple.className = "ripple";
        flask.appendChild(ripple);
        gsap.to(ripple, {
          scale: 2,
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            flask.removeChild(ripple);
          },
        });
      };

      leftDrops.forEach((drop, index) => {
        const delay = index * 1; // 1 second delay between each drop

        leftTimeline.to(
          `#${drop.id}`,
          {
            y: 230, // Adjust based on flask position
            duration: 1,
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
              createRippleEffect("leftFlask");
              gsap.to(`#${drop.id}`, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  // Show the corresponding bubble
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
        const delay = index * 1; // 1 second delay between each drop

        rightTimeline.to(
          `#${drop.id}`,
          {
            y: 230, // Adjust based on flask position
            duration: 1,
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
              createRippleEffect("rightFlask");
              gsap.to(`#${drop.id}`, {
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                  // Show the corresponding bubble
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

      // Set bubble positions manually
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
  }, []);

  return (
    <Section id="tools" title="Tools">
      <div className="relative -mt-40 overflow-x-hidden">
        {/* Hands Container for larger screens */}
        <div className="hidden lg:flex relative h-[600px] justify-center">
          <div className="absolute left-0 -ml-16">
            <Image
              src="/LeftHand.svg"
              alt="Left Hand"
              width={540}
              height={540}
            />
          </div>
          <div className="absolute right-0 -mr-16">
            <Image
              src="/RightHand.svg"
              alt="Right Hand"
              width={540}
              height={540}
            />
          </div>
        </div>

        {/* Flasks Container for larger screens */}
        <div className="hidden lg:flex justify-center gap-[396px] -mt-24">
          <div id="leftFlask" className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container">
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
                  style={{
                    transform: "scale(0)",
                  }}
                />
              ))}
            </div>
            <Image
              src="/left-flask.svg"
              alt="Left Flask"
              width={220}
              height={220}
              className="flask-image"
            />
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                id={`leftDrop${i + 1}`}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 drop"
                style={{
                  width: "30px",
                  height: "42px",
                }}
              ></div>
            ))}
          </div>
          <div id="rightFlask" className="relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container">
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
                    style={{
                      transform: "scale(0)",
                    }}
                  />
                )
              )}
            </div>
            <Image
              src="/right-flask.svg"
              alt="Right Flask"
              width={220}
              height={220}
              className="flask-image"
            />
            {Array.from({ length: 7 }, (_, i) => (
              <div
                key={i}
                id={`rightDrop${i + 1}`}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 drop"
                style={{
                  width: "30px",
                  height: "42px",
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Tools Container for smaller screens */}
        <div className="lg:hidden flex justify-center items-center h-screen">
          <div className="grid grid-cols-4 gap-2">
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
                    width={60}
                    height={60}
                    className="mb-2"
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
