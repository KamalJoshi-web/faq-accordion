/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      White: "hsl(0, 0%, 100%)",
      Lightpink: "hsl(275, 100%, 97%)",
      Grayishpurple: "hsl(292, 16%, 49%)",
      Purple: "#ad28eb",
      Darkpurple: "hsl(292, 42%, 14%)",
    },
    fontFamily: {
      workSans: ["Work Sans", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        patternDesktop: "url(/background-pattern-desktop.svg)",
        patternMobile: "url(/background-pattern-mobile.svg)",
      },
    },
  },
  plugins: [],
};
