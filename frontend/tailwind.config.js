// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          100: "#d1b2a1",
          200: "#c29f87",
          300: "#b28c6d",
          400: "#a37a53",
          500: "#946e40",
          600: "#855b2e",
          700: "#754920",
          800: "#654117",
          900: "#55330e",
        },
      },
      // backgroundImage: {
      //   profile: "url('/assets/image13.jpeg')",
      // },
    },
  },
  plugins: [],
};
