/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0B0D17",
        softBlue: "#D0D6F9",
      },
      lineHeight: {
        normal: "normal",
      },
    },
    fontFamily: {
      serif: ["Bellefair", "serif"],
      sans: ["Barlow", "sans-serif"],
      barlowCon: ["Barlow Condensed", "sans-serif"],
    },

    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1220px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },

  plugins: [],
};

// font-family: 'Barlow Condensed', sans-serif;
