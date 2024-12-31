import { Roboto } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlack: "#000000",
        primaryWhite: '#ffffff',
        ratingStar: '#FFC633',
        discountRed: '#FF3333',
        verifyGreen: '#01AB31',
        searchGrey: '#F0F0F0'
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif']
      },
      height: {
        '589px': '589px',
        '180px': '180px', // Custom pixel height
        '499px': '499px'
      },
      
    },
  },
  plugins: [],
} satisfies Config;
