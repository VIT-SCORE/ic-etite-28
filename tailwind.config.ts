import type { Config } from "tailwindcss";

// Tailwind tokens and utilities shared by the homepage components.
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        panel: "var(--surface-2)",
        cyan: "var(--accent-cyan)",
        "electric-green": "var(--accent-green)",
        "ieee-red": "var(--accent-red)",
        ink: "var(--text-primary)",
        muted: "var(--text-muted)",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        "glow-cyan": "0 0 24px rgba(0,229,255,0.28)",
        "glow-green": "0 0 24px rgba(0,255,156,0.24)",
        panel: "0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.9)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(circle at 50% 0%, rgba(0,229,255,0.06), transparent 60%)",
      },
      keyframes: {
        "node-flash": {
          "0%, 92%, 100%": { opacity: "0.25", filter: "brightness(1)" },
          "95%": { opacity: "1", filter: "brightness(1.8)" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "node-flash": "node-flash 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
