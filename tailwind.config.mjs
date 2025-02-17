import { Raleway } from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        black: "var(--light-background)",
        mahroon: "var(--mahroon)",
        textWhite: "white",
        textLight: "var(--light-text)",
      },
      fontFamily: {
        kaisei: "var(--font-kaisei)",
        arizonia: "var(--font-arizonia)",
        ropa: "var(--font-ropa)",
        Raleway: "var(--font-raleway)",
      },
    },
    screens: {
      desktop: { max: "1400px" },
      laptop: { max: "1300px" },
      tablet: { max: "1024px" },
      mobile: { max: "767px" },
    },
  },
  plugins: [],
};
