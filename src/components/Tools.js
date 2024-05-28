"use client";

import Image from "next/image";
import Section from "./Section";

export default function Tools() {
  return (
    <Section id="tools" title="Tools">
      <div className="relative flex justify-between items-start -mt-52">
        {/* Left Side */}
        <div className="relative w-1/2 flex flex-col items-center">
          <div
            className="absolute left-40 top-0 z-10"
            style={{
              transform: "translateX(-50%)",
              width: "600px",
              height: "600px",
            }}
          >
            <Image
              src="/LeftHand.svg"
              alt="Left Hand"
              width={600}
              height={600}
              className="left-hand"
            />
          </div>
          <div className="relative w-full h-full mt-[600px] -mr-72">
            <Image
              src="/LeftFlask.svg"
              alt="Left Flask"
              width={250}
              height={250}
              objectFit="contain"
              className="left-flask"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="relative w-1/2 flex flex-col items-center">
          <div
            className="absolute right-40 top-0 z-10"
            style={{
              transform: "translateX(50%)",
              width: "600px",
              height: "600px",
            }}
          >
            <Image
              src="/RightHand.svg"
              alt="Right Hand"
              width={600}
              height={600}
              className="right-hand"
            />
          </div>
          <div className="relative w-full h-full mt-[600px] -mr-[450px]">
            <Image
              src="/RightFlask.svg"
              alt="Right Flask"
              width={250}
              height={250}
              objectFit="contain"
              className="right-flask"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
