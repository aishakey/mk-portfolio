"use client";
import React from "react";
import Image from "next/image";
import Eyes from "./Eyes";
import { SparklesCore } from "./ui/sparkles";
import styles from "./Eyes.module.css";

const Hero = () => {
  return (
    <div className="relative min-h-screen md:min-h-[600px] md:mt-0">
      <SparklesCore
        className="absolute w-full h-full inset-0 z-0"
        background="transparent"
        minSize={1.4}
        maxSize={3.8}
        particleDensity={100}
        particleColor="#9BF1FF"
      />
      <div className="text-center relative z-10 mb-10">
        <div className="inline-block">
          <Image
            src="/avatar.svg"
            alt="Hero Avatar"
            width={380}
            height={190}
            className="avatar mx-auto"
          />
          <div className={styles.eyes}>
            <Eyes />
          </div>
        </div>
        <h1 className="sm:text-3xl text-2xl font-semibold sm:pb-4 pb-2">
          Hi, my name is Maria Key
        </h1>
        <h4 className="sm:text-xl text-lg">
          And I am a creative full stack developer
        </h4>
      </div>
      <div className="flex justify-center md:mt-8">
        <div className="arrow-wave">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
