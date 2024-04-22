import { _opacity } from '#tailwind-config/theme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#333",
        gray: "#ddd",
        semigray: "#ccc",
        semired: "rgb(239, 68, 68);",
        semigreen: "rgb(34, 197, 94);",
        semiyellow: "rgb(234, 179, 8);",
        semiblue: "rgb(59, 130, 246);",
        transdark: "rgba(0, 0, 0, 0.5);",
        isblack: "#000000",
        isblue: "#0000FF",
        isgray: "#808080",
        isgreen: "#008000",
        isorange: "#FFA500",
        isred: "#FF0000",
        isyellow: "#FFFF00",
      },
      boxShadow: {
        top: '0 0px 6px -1px rgba(0, 0, 0, 0.1)',
        round: '0 0px 8px 2px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        fade: "fade 1s ease alternate",
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: 0,
          },
          '50%': {
            opacity: 1,
          }
        }
      }
    },
  },
  plugins: [],
}

