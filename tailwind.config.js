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
        "pink-200": "#FFBCE2",
        "blue-200": "#B2F5FE",
        "blue-300": "#D5E2FF",
        "teal-100": "#EFFDFF",
      },
      backgroundImage: {
        "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      gradientColorStops: {
        "pink-to-transparent": {
          "0%": "#FFBCE2",
          "70%": "rgba(255, 255, 255, 0.3)",
          "100%": "rgba(255, 255, 255, 0)",
        },
        "blue-to-transparent": {
          "0%": "#B2F5FE",
          "90%": "rgba(255, 255, 255, 0.3)",
          "100%": "rgba(255, 255, 255, 0)",
        },
        "blue-300-to-teal-100": {
          "0%": "#D5E2FF",
          "70%": "#EFFDFF",
          "100%": "rgba(255, 255, 255, 0)",
        },
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
