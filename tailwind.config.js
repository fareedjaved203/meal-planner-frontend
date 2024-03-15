/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
      },
      colors: {
        custom: "rgba(76, 73, 237, 0.1)",
        removeItem: "#FFEEDB",
        removeItemText: "#FF9C29",
        purpleText: "#4C49ED",
        lightSky: "#E4E3FF",
        summaryTextColor: "#A1A0BD",
        graphDate: "#F9F9F9",
        graphDateText: "#7E8299",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".ml-0-important": {
          marginLeft: "0 !important",
        },
      };
      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
