import type { Config } from "tailwindcss";

/** A theme colour defined as an RGB channel triple in app/globals.css */
const ch = (name: string) => `rgb(var(--c-${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // All colours resolve to theme channels in app/globals.css (light by
        // default, flipped inside .theme-dark), so opacity modifiers work.
        background: {
          DEFAULT: ch("background"),
          secondary: ch("background-secondary"),
          tertiary: ch("background-tertiary"),
        },
        foreground: ch("foreground"),
        surface: {
          DEFAULT: ch("surface"),
          subtle: ch("surface-subtle"),
          elevated: ch("surface-elevated"),
          border: ch("surface-border"),
          "border-hover": ch("surface-border-hover"),
        },
        accent: {
          DEFAULT: ch("accent"),
          hover: ch("accent-hover"),
          muted: "var(--accent-muted)",
          glow: "var(--accent-glow)",
          subtle: "var(--accent-subtle)",
          foreground: ch("on-accent"),
        },
        muted: {
          DEFAULT: ch("text-muted"),
          foreground: ch("text-muted"),
        },
        text: {
          primary: ch("text-primary"),
          secondary: ch("text-secondary"),
          muted: ch("text-muted"),
        },
        // Authored dark-first: "white" = ink, "black" = lightest inset surface,
        // zinc = grey ramp. See the note in app/globals.css.
        white: ch("white"),
        black: ch("black"),
        zinc: Object.fromEntries(
          ["50", "100", "200", "300", "400", "500", "600", "700", "800", "900", "950"].map((step) => [step, ch(`zinc-${step}`)]),
        ),
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-display)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        "glow-sm": "0 6px 16px -8px var(--accent-glow)",
        "glow-md": "0 12px 32px -14px var(--accent-glow)",
        "glow-lg": "0 18px 48px -20px var(--accent-glow)",
        "surface-card": "0 10px 40px -18px rgb(var(--shadow-color) / 0.18)",
        "surface-card-hover": "0 20px 50px -20px rgb(var(--shadow-color) / 0.28)",
      },
      backgroundImage: {
        "radial-top": "radial-gradient(circle at 50% 0%, var(--tw-gradient-stops))",
        "mesh-grid": "linear-gradient(to right, rgb(var(--c-foreground) / 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--c-foreground) / 0.05) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
