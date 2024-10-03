import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'fa-brands': ['var(--font-fa-brands)'],
        'fa-solid': ['var(--font-fa-solid)'],
      },
      keyframes: {
        moveUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        'marquee-vertical': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        'move-up': 'moveUp linear infinite',
        'marquee-vertical': 'marquee-vertical linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;