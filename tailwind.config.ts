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
        white: "var(--white)",
        black: "var(--black)",
        blue: "var(--blue)",
        grey: "var(--grey)",
        yellow: "var(--yellow)",
        lightYellow: "var(--lightYellow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
