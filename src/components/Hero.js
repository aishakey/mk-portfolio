import Section from "./Section";
import Image from "next/image";

export default function Hero() {
  return (
    <Section id="hero">
      <div className="text-center">
        <Image
          src="/avatar.png"
          alt="Hero Image"
          width={380}
          height={190}
          className="mx-auto mb-4"
        />
        <h1 className="text-3xl font-semibold pb-4">
          Hi, my name is Maria Key{" "}
        </h1>
        <h4 className="text-xl">And I am a creative full stack developer</h4>
      </div>
    </Section>
  );
}
