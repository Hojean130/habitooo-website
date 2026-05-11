import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAFC",
        primary: "#0B1220",
        secondary: "#4B5563",
        "border-default": "#E5E7EB",
        "brand-green": "#16A34A",
        "urgent-orange": "#F97316",
        "overdue-red": "#EF4444"
      },
      boxShadow: {
        card: "0 1px 2px rgba(0,0,0,0.04)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "live-pulse": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" }
        },
        "soft-breathe": {
          "0%, 100%": { opacity: "0.85" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "fade-up": "fade-up 220ms ease-out both",
        "live-pulse": "live-pulse 1.8s ease-in-out infinite",
        "soft-breathe": "soft-breathe 2.4s ease-in-out infinite"
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji"
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
} satisfies Config;

