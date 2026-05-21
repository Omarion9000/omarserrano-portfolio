import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAF7F2",
        editor: {
          surface: "#F2EFE9",
          border: "#E5E1D8",
        },
        text: {
          primary: "#1A1814",
          secondary: "#5C544A",
          muted: "#A39B8E",
        },
        accent: {
          DEFAULT: "#C96A4A",
          warm: "#E6B86A",
        },
        syntax: {
          keyword: "#9C5BC2",
          string: "#3D8B5C",
          property: "#0E7490",
          comment: "#A39B8E",
          value: "#C96A4A",
          plain: "#1A1814",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        paper: "0 1px 2px rgba(26,24,20,0.04), 0 8px 24px -8px rgba(26,24,20,0.12)",
        polaroid: "0 2px 4px rgba(26,24,20,0.08), 0 16px 32px -12px rgba(26,24,20,0.18)",
        terminal: "0 1px 2px rgba(26,24,20,0.06), 0 20px 40px -16px rgba(26,24,20,0.22)",
        postit: "0 1px 1px rgba(26,24,20,0.05), 0 12px 20px -8px rgba(26,24,20,0.16)",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 50%": { opacity: "1" },
          "51%, 100%": { opacity: "0" },
        },
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
