import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/*.{js,ts,jsx,tsx,mdx}",
    "./pages/*.{js,ts,jsx,tsx,mdx}",
    "./components/*.{js,ts,jsx,tsx,mdx}",
    "./src/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./public/**/*.html",
  ],
  
  theme: {
    extend: {
      colors: {
        red: "var(--red)",
        gray100: "var(--gray100)",
        gray200: "var(--gray200)",
        gray300: "var(--gray300)",
        gray400: "var(--gray400)",
        gray500: "var(--gray500)",
        gray600: "var(--gray600)",
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        darkBlue: "var(--darkBlue)",
        grey: "var(--grey)",
        yellow: "var(--yellow)",
        lightYellow: "var(--lightYellow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
