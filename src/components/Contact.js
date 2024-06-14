"use client";

import { useState } from "react";
import Image from "next/image";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);
  const [buttonText, setButtonText] = useState("Send");
  const [buttonState, setButtonState] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonState("sending");
    setButtonText("Just a moment...");

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (response) => {
          setButtonState("success");
          setButtonText("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setButtonState("idle");
            setButtonText("Send");
          }, 3000);
        },
        (error) => {
          setButtonState("error");
          setButtonText("Error occurred. Try again");
          setTimeout(() => {
            setButtonState("idle");
            setButtonText("Send");
          }, 3000);
        }
      );
  };

  return (
    <div id="contact">
      <header
        className="w-full h-40 bg-repeat-x bg-bottom relative"
        style={{
          backgroundImage: "url('/wave.svg')",
        }}
      >
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-14 flex items-center">
          <Image
            src="/phone.svg"
            alt="Phone"
            width={26}
            height={26}
            className="mr-3 transform -scale-x-100"
          />
          <h1 className="md:text-2xl text-xl text-center font-semibold">
            Let's get in touch
          </h1>
          <Image
            src="/phone.svg"
            alt="Phone"
            width={24}
            height={24}
            className="ml-3"
          />
        </div>
      </header>
      <div className="relative flex flex-col justify-center items-center bg-[#C5F7FF]">
        <div
          id="form"
          className="relative w-full max-w-[400px] md:max-w-[450px] p-4 bg-[#FFE1F2] rounded-xl mt-12"
        >
          <form
            id="waterform"
            onSubmit={handleSubmit}
            className="relative flex flex-col justify-center items-center"
          >
            <div
              className={`formgroup ${
                focusedField === "name" ? "formgroup-active" : ""
              } flex flex-col items-center w-full`}
            >
              <label
                htmlFor="name"
                className="text-main-pink text-base block mt-3 w-7/12 -ml-4 md:-ml-16 text-left"
              >
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-7/12 md:w-8/12 p-2 mt-1 rounded-2xl border-none outline-none bg-white text-dark-blue font-normal text-sm"
                required
              />
            </div>
            <div
              className={`formgroup mt-4 ${
                focusedField === "email" ? "formgroup-active" : ""
              } flex flex-col items-center w-full`}
            >
              <label
                htmlFor="email"
                className="text-main-pink text-base block mt-3 w-7/12 -ml-4 md:-ml-16 text-left"
              >
                Your e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-7/12 md:w-8/12 p-2 mt-1 rounded-2xl border-none outline-none bg-white text-dark-blue font-normal text-sm"
                required
              />
            </div>
            <div
              className={`formgroup mt-4 ${
                focusedField === "message" ? "formgroup-active" : ""
              } flex flex-col items-center w-full`}
            >
              <label
                htmlFor="message"
                className="text-main-pink text-base block mt-3 -ml-4 md:-ml-16 w-7/12 text-left"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-7/12 md:w-8/12 px-2 mt-1 rounded-2xl border-none outline-none bg-white text-dark-blue font-normal text-sm h-20 resize-none"
                required
              ></textarea>
            </div>
            <div className="flex justify-center w-full mt-8 mb-3">
              <button
                className={`w-11/12 md:w-11/12 p-2 text-white text-sm rounded-2xl cursor-pointer transition-all ${
                  buttonState === "sending"
                    ? "bg-main-pink"
                    : buttonState === "success"
                    ? "bg-green-500"
                    : buttonState === "error"
                    ? "bg-red-500"
                    : "bg-main-pink hover:bg-[#ed4baa]"
                }`}
                disabled={buttonState === "sending"}
              >
                {buttonText}
              </button>
            </div>
          </form>
        </div>
        <p className="text-[#a4a4a4] font-light text-sm text-center pt-8 pb-3">
          &copy; 2024. Designed and developed by Maria Key
        </p>
      </div>
    </div>
  );
}
