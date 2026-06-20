import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#3BD1C7",
          alt: "#2E8C86",
        },
        secondary: {
          DEFAULT: "#97A1AA",
          alt: "#5E6870",
        },
        index: "#E7EAEA",
      },
    },
  },
  plugins: [],
};
export default config;
