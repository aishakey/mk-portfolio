"use client";

import Section from "./Section";
import Image from "next/image";
import Eyes from "./Eyes";
import styles from "./Eyes.module.css";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="text-center -mt-8 relative">
        <div className="inline-block">
          <Image
            src="/avatar.svg"
            alt="Hero Avatar"
            width={380}
            height={190}
            className="mx-auto mb-4"
          />
          <div className={styles.eyes}>
            <Eyes />
          </div>
        </div>
        <h1 className="text-3xl font-semibold pb-4">
          Hi, my name is Maria Key{" "}
        </h1>
        <h4 className="text-xl">And I am a creative full stack developer</h4>
      </div>
    </Section>
  );
}
