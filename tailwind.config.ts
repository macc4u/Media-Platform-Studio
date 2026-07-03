import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          dark: "#050517",
          blue: "#00F0FF",
          purple: "#B000FF",
          pink: "#FF2EB6",
        },
      },
      boxShadow: {
        neon: "0 0 8px #00F0FF, 0 0 15px #B000FF",
      },
      backgroundImage: {
        "cyber-gradient": "linear-gradient(135deg, #050517 0%, #0A0A2E 50%, #120526 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
