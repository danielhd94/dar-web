import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0047FF",
          50: "#E6EDFF",
          100: "#CCDBFF",
          200: "#99B7FF",
          300: "#6693FF",
          400: "#336FFF",
          500: "#0047FF",
          600: "#0039CC",
          700: "#002B99",
          800: "#001C66",
          900: "#000E33",
        },
        accent: {
          DEFAULT: "#00C8FF",
          50: "#E6FAFF",
          100: "#CCF5FF",
          200: "#99EBFF",
          300: "#66E0FF",
          400: "#33D4FF",
          500: "#00C8FF",
          600: "#00A0CC",
          700: "#007899",
          800: "#005066",
          900: "#002833",
        },
        dark: {
          DEFAULT: "#080C14",
          50: "#1A2035",
          100: "#141929",
          200: "#0F1420",
          300: "#0D1220",
          400: "#0A0F1A",
          500: "#080C14",
        },
        violet: "#7B2FFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-dar":
          "linear-gradient(135deg, #0047FF 0%, #00C8FF 50%, #7B2FFF 100%)",
        "gradient-dark":
          "linear-gradient(180deg, #080C14 0%, #0D1220 100%)",
        "glow-blue":
          "radial-gradient(ellipse 60% 60% at 50% 0%, rgba(0,71,255,0.3) 0%, transparent 70%)",
        "glow-cyan":
          "radial-gradient(ellipse 60% 60% at 50% 100%, rgba(0,200,255,0.2) 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
        "slide-in": "slideIn 0.5s ease forwards",
        float: "float 6s ease-in-out infinite",
        pulse2: "pulse2 3s ease-in-out infinite",
        "gradient-x": "gradientX 8s ease infinite",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      boxShadow: {
        glow: "0 0 30px rgba(0, 71, 255, 0.4)",
        "glow-cyan": "0 0 30px rgba(0, 200, 255, 0.4)",
        "glow-sm": "0 0 15px rgba(0, 71, 255, 0.3)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
        card: "0 20px 60px rgba(0, 0, 0, 0.4)",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
