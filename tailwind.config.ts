import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#08131F",
          900: "#0B1A2C",
          800: "#12263F",
          700: "#1F3A5F",
          600: "#2E4C74",
          500: "#4F6D8F",
          300: "#9AACC2",
          200: "#C9D3DF",
        },
        ink: "#0B1A2C",
        muted: "#556070",
        faint: "#8790A0",
        line: "#E2E6EC",
        mist: "#F3F5F8",
        gold: { DEFAULT: "#A8834A", light: "#C9A96E", pale: "#E9DCC4" },
        slate: { DEFAULT: "#7A8696" },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        serif: ["'Source Serif 4 Variable'", "Georgia", "serif"],
      },
      maxWidth: { page: "72rem" },
      letterSpacing: { label: "0.16em" },
    },
  },
  plugins: [],
};

export default config;
