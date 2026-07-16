import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-nunito)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        surface: {
          card: "var(--colors-surface-card)",
          base: "var(--colors-surface-base)",
          dark: "var(--colors-surface-dark)",
        },
        text: {
          primary: "var(--colors-text-primary)",
          secondary: "var(--colors-text-secondary)",
          muted: "var(--colors-text-muted)",
        },
        status: {
          critical: "var(--colors-status-critical)",
          success: "var(--colors-status-success)",
          warning: "var(--colors-status-warning)",
          ok: "var(--colors-status-ok)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
