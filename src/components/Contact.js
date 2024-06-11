"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [focusedField, setFocusedField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div>
      <header
        className="w-full h-40 bg-repeat-x bg-bottom"
        style={{
          backgroundImage: "url('/wave.svg')",
        }}
      >
        <h1 className="text-4xl font-bold text-center text-dark-blue">
          Contact
        </h1>
      </header>
      <div className="relative flex flex-col justify-center items-center bg-[#C5F7FF]">
        <div
          id="form"
          className="relative w-full max-w-[400px] md:max-w-[540px] p-4 bg-[#FFE1F2] rounded-xl mt-12"
        >
          <form id="waterform" onSubmit={handleSubmit} className="relative">
            <div
              className={`formgroup ${
                focusedField === "name" ? "formgroup-active" : ""
              }`}
            >
              <label
                htmlFor="name"
                className="text-main-pink text-base block mt-3"
              >
                Your name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-7/12 p-1 mt-1 rounded-2xl border-none outline-none bg-white text-main-pink text-sm"
                required
              />
            </div>
            <div
              className={`formgroup mt-4 ${
                focusedField === "email" ? "formgroup-active" : ""
              }`}
            >
              <label
                htmlFor="email"
                className="text-main-pink text-base block mt-3"
              >
                Your e-mail*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-7/12 p-1 mt-1 rounded-2xl border-none outline-none bg-white text-main-pink text-sm"
                required
              />
            </div>
            <div
              className={`formgroup mt-4 ${
                focusedField === "message" ? "formgroup-active" : ""
              }`}
            >
              <label
                htmlFor="message"
                className="text-main-pink text-base block mt-3"
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
                className="w-7/12 p-1 mt-1 rounded-2xl border-none outline-none bg-white text-main-pink text-base h-20 resize-none"
                required
              ></textarea>
            </div>
            <button
              className="w-full p-2
              mt-4 bg-pink-600 text-white text-sm rounded-2xl cursor-pointer
              hover:bg-pink-700 transition-all"
            >
              Send
            </button>
          </form>
        </div>
        <p className="text-[#8f8f8f] font-light text-sm text-center mt-4">
          &copy; 2024. Designed and developed by Maria Key{" "}
        </p>
      </div>
    </div>
  );
}
