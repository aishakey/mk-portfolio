import Section from "./Section";
import Image from "next/image";

export default function Tools() {
  return (
    <Section id="tools" title="Tools">
      <div className="flex flex-wrap justify-between mx-36">
        <div className="flex w-full mb-8">
          <div className="relative w-1/2 h-80 p-8 bg-gradient-to-b from-pink-200 via-white to-teal-100 shadow-lg rounded-lg mr-20 overflow-hidden">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-10 bg-gradient-to-b from-white/20 to-transparent bg-white/30 rounded-xl flex items-center justify-center">
              <p className="text-center font-normal">Front-End</p>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-12 space-y-4">
              <Image src="/html.svg" alt="HTML" width={60} height={60} />
              <Image src="/css.svg" alt="CSS" width={60} height={60} />
              <Image src="/js.svg" alt="JS" width={60} height={60} />
              <Image src="/react.svg" alt="React" width={60} height={60} />
              <Image src="/tw.svg" alt="Tailwind" width={60} height={60} />
              <Image src="/nextjs.svg" alt="NextJS" width={60} height={60} />
            </div>
          </div>
          <div className="relative w-1/2 p-8 bg-gradient-to-b from-blue-200 via-white to-teal-100 shadow-lg rounded-lg ml-4 overflow-hidden">
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-10 bg-gradient-to-b from-white/20 to-transparent bg-white/30 rounded-xl flex items-center justify-center">
              <p className="text-center font-normal">Back-End</p>
            </div>
            <div className="flex flex-wrap justify-center items-center mt-12 space-y-4">
              <Image src="/mongodb.svg" alt="MongoDB" width={60} height={60} />
              <Image src="/rest.svg" alt="RestAPI" width={60} height={60} />
              <Image src="/express.svg" alt="Express" width={60} height={60} />
              <Image src="/aws.svg" alt="AWS" width={60} height={60} />
              <Image src="/jwt.svg" alt="JWT" width={60} height={60} />
              <Image src="/node.svg" alt="Node" width={60} height={60} />
            </div>
          </div>
        </div>
        <div className="relative w-full p-8 mt-8 bg-gradient-to-b from-blue-300 to-teal-100 shadow-lg rounded-lg overflow-hidden">
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-10 bg-gradient-to-b from-white/20 to-transparent bg-white/30 rounded-xl flex items-center justify-center">
            <p className="text-center font-normal">Other</p>
          </div>
          <div className="flex flex-wrap justify-center items-center mt-12 space-y-4">
            <Image src="/postman.svg" alt="Postman" width={60} height={60} />
            <Image src="/figma.svg" alt="Figma" width={60} height={60} />
            <Image src="/git.svg" alt="Git" width={60} height={60} />
            <Image src="/gh.svg" alt="GitHub" width={60} height={60} />
            <Image src="/ps.svg" alt="PS6" width={60} height={60} />
            <Image src="/vite.svg" alt="Vite" width={60} height={60} />
            <Image src="/vsc.svg" alt="VSCode" width={60} height={60} />
            <Image src="/npm.svg" alt="NPM" width={60} height={60} />
          </div>
        </div>
      </div>
    </Section>
  );
}
