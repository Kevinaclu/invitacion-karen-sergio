/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      greatVibes: ["'great vibes'", "cursive"],
      playfair: ["'Playfair Display Variable'", "serif"],
      raleway: ["'Raleway Variable'", "sans-serif"],
      bodoni: ["'Bodoni Moda Variable'", "serif"],
    },
    extend: {
      boxShadow: {
        "inner-hero-lg": "inset 0px 0px 90px 80px rgba(0,0,0,0.75)",
      },
      animation: {
        "rotate-out": "rotate-out 1s ease-out both",
        "scale-pulse": "scale-pulse 2s ease-in-out infinite",
      },
      keyframes: {
        "scale-pulse": {
          "0%, 100%": {
            transform: "translate(-50%,-50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%,-50%) scale(1.5)",
          },
        },
        "rotate-out": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg)",
            opacity: 1,
          },
          "100%": {
            opacity: 0,
            transform: "translate(-50%, -50%) rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion"), require("tailwindcss-intersect")],
};
