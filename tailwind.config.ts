import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#FBC02D",
          foreground: "#1a1a1a",
        },
        accent: {
          DEFAULT: "#F57C00",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#f4f4f4",
          foreground: "#555555",
        },
      },
      fontFamily: {
        sans: ["var(--font-roboto)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [animate],
}

export default config
