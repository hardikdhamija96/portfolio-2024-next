import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        lightBg : "rgba(var(--lightBg),1)",
        darkBg : "rgba(var(--darkBg),1)",
        darkBlue : "rgba(var(--darkBlue),1)",
        babyBlue : "rgba(var(--babyBlue),1)",
        midnightBlue : "rgba(var(--midnightBlue),1)",
        babyBlue2 : "rgba(var(--babyBlue2),1)",
        blueGrotto : "rgba(var(--blueGrotto),1)",
        textColor : "rgba(var(--ivory),1)",
        headingColor : "rgba(var(--mistyBlue),1)"
      },
    },
   
  },
  plugins: [],
};
export default config;
