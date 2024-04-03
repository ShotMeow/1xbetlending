import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ocean-dark": "#002448",
        "ocean-light": "#002F5E",
        "blue-dark": "#007ACC",
        "blue-light": "#14A0FF",
        green: "#85AB39",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        mono: ["var(--font-oxygen)"],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem",
        xl: "4rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
export default config;
