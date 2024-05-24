import Image from "next/image";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" title="I would love to hear from you!">
      <div className="bg-[#D5E2FF]  rounded-xl border-4 border-[#7FA6FF] w-4/6 mx-auto flex">
        <div className="w-1/2 p-8">
          <form className="space-y-4 p-4 pl-8">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-dark-blue"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Jane Doe"
                className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-[#7FA6FF] rounded-md shadow-sm placeholder-[#99b7fe] text-dark-blue font-normal focus:outline-none focus:ring-2 focus:ring-[#7FA6FF] focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-dark-blue"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="jane@example.com"
                className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-[#7FA6FF] rounded-md shadow-sm placeholder-[#99b7fe] text-dark-blue font-normal focus:outline-none focus:ring-2 focus:ring-[#7FA6FF] focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-dark-blue"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Hello! How is it going..."
                className="mt-1 block w-full px-3 py-2 bg-transparent border-2 border-[#7FA6FF] rounded-md shadow-sm placeholder-[#99b7fe] text-dark-blue font-normal focus:outline-none focus:ring-2 focus:ring-[#7FA6FF] focus:border-transparent"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-dark-blue text-white font-medium rounded-md shadow-sm hover:bg-[#234b8f] focus:outline-none focus:ring-2 focus:ring-[#7FA6FF] focus:ring-opacity-75"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* <div className="w-px bg-[#7FA6FF] mx-auto"></div> */}
        <div className="w-1/2 flex justify-center items-center p-4">
          <Image
            src="/phone.svg"
            alt="Phone"
            width={270}
            height={170}
            className="h-auto max-w-full transform rotate-180"
          />
        </div>
      </div>
    </Section>
  );
}
