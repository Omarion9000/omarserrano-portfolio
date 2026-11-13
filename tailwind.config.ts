import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F6F3",
        card: "#FFFFFF",
        ink: "#1B1A17",
        muted: "#5E5A52",
        faint: "#8C877D",
        line: "#E4E1DA",
        accent: { DEFAULT: "#D9572B", dark: "#B8441D" },
        blue: { DEFAULT: "#2463C9", dark: "#1B4E9F" },
        slate: { DEFAULT: "#52504B" },
      },
      fontFamily: {
        sans: ["'Inter Variable'", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono Variable'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: { page: "72rem" },
    },
  },
  plugins: [],
};

export default config;
