// components/Hero.js
"use client";
import React from "react";
import Image from "next/image";
import Eyes from "./Eyes";
import { SparklesCore } from "./ui/sparkles";
import styles from "./Eyes.module.css";

const Hero = () => {
  return (
    <div className="min-h-screen relative">
      <SparklesCore
        className="absolute w-full h-full inset-0 z-0"
        background="transparent"
        minSize={1.4}
        maxSize={3.8}
        particleDensity={100}
        particleColor="#9BF1FF"
      />
      <div className="text-center relative z-10">
        <div className="inline-block">
          <Image
            src="/avatar.svg"
            alt="Hero Avatar"
            width={380}
            height={190}
            className="avatar mx-auto mb-4"
          />
          <div className={styles.eyes}>
            <Eyes />
          </div>
        </div>
        <h1 className="text-3xl font-semibold pb-4">
          Hi, my name is Maria Key
        </h1>
        <h4 className="text-xl">And I am a creative full stack developer</h4>
      </div>
    </div>
  );
};

export default Hero;
