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
        luskin: {
          white: 'FFF',
          blue: '#0076AD',
          brightBlue: '#32B8DE',
          green: '#99C221',
          purple: '#825AA4',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      'arial': ['Arial', 'sans-serif'],
    },
    lineHeight: {
      '150': '150%'
    },
  },
  plugins: [require("tailwindcss-animate")
],
};
export default config;

