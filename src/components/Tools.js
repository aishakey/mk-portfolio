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

      const leftDrops = Array.from({ length: 6 }, (_, i) => ({
        id: `leftDrop${i + 1}`,
        color: "red",
        bubbleId: `leftBubble${i + 1}`,
      }));

      const rightDrops = Array.from({ length: 6 }, (_, i) => ({
        id: `rightDrop${i + 1}`,
        color: "blue",
        bubbleId: `rightBubble${i + 1}`,
      }));

      const leftBubblePositions = [
        { left: "70%", bottom: "8%" },
        { left: "20%", bottom: "9%" },
        { left: "36%", bottom: "24%" },
        { left: "54%", bottom: "40%" },
        { left: "34%", bottom: "50%" },
        { left: "42%", bottom: "70%" },
      ];

      const rightBubblePositions = [
        { left: "20%", bottom: "10%" },
        { left: "30%", bottom: "30%" },
        { left: "70%", bottom: "14%" },
        { left: "52%", bottom: "40%" },
        { left: "47%", bottom: "70%" },
        { left: "32%", bottom: "50%" },
      ];

      leftDrops.forEach((drop, index) => {
        const delay = index * 1; // 1 second delay between each drop

        // Set drop color dynamically
        document.getElementById(drop.id).style.backgroundColor = drop.color;

        leftTimeline.to(
          `#${drop.id}`,
          {
            y: 250, // Adjust based on flask position
            duration: 1,
            ease: "power1.in",
            onComplete: () => {
              gsap.to(`#${drop.id}`, {
                scaleY: 0,
                duration: 0.5,
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

        // Set drop color dynamically
        document.getElementById(drop.id).style.backgroundColor = drop.color;

        rightTimeline.to(
          `#${drop.id}`,
          {
            y: 250, // Adjust based on flask position
            duration: 1,
            ease: "power1.in",
            onComplete: () => {
              gsap.to(`#${drop.id}`, {
                scaleY: 0,
                duration: 0.5,
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
      <div className="relative -mt-40">
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
          <div className="left-flask relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  id={`leftBubble${i + 1}`}
                  className="absolute opacity-0 bubble"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "blue",
                    borderRadius: "50%",
                    transform: "scale(0)",
                  }}
                />
              ))}
            </div>
            <Image
              src="/flask.svg"
              alt="Left Flask"
              width={220}
              height={250}
              className="flask-image"
            />
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                id={`leftDrop${i + 1}`}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 drop"
                style={{ backgroundColor: "red" }}
              ></div>
            ))}
          </div>
          <div className="right-flask relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 fill-container">
              {Array.from({ length: 6 }, (_, i) => (
                <div
                  key={i}
                  id={`rightBubble${i + 1}`}
                  className="absolute opacity-0 bubble"
                  style={{
                    width: "30px",
                    height: "30px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    transform: "scale(0)",
                  }}
                />
              ))}
            </div>
            <Image
              src="/flask.svg"
              alt="Right Flask"
              width={220}
              height={250}
              className="flask-image"
            />
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                id={`rightDrop${i + 1}`}
                className="absolute top-0 left-1/2 transform -translate-x-1/2 drop"
                style={{ backgroundColor: "blue" }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
