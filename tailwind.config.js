/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-heading": ["Fredoka", "sans-serif"],
        "custom-paragraph": ["Poppins", "sans-serif"],
        "custom-extra": ["Bubblegum Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "#101E60",
        "main-pink": "#FF48B0",
        "light-blue": "#BBF7FF",
      },
    },
  },
  plugins: [],
};
