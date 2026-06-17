/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ==========================================
      // ADD THESE: Missing animations (ne mattum add pannu)
      // ==========================================
      animation: {
        meteor: "meteor 5s linear infinite",
        float: "float 10s ease-in-out infinite",
        "letter-reveal": "letterReveal 0.6s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "expand-width": "expandWidth 1s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "glitch-1": "glitch1 0.3s ease-in-out infinite",
        "glitch-2": "glitch2 0.3s ease-in-out infinite",
        "glitch-text": "glitchText 0.6s ease-in-out infinite",
      },
      keyframes: {
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        letterReveal: {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.8)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        expandWidth: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glitch1: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(-3px, 3px)" },
          "40%": { transform: "translate(-3px, -3px)" },
          "60%": { transform: "translate(3px, 3px)" },
          "80%": { transform: "translate(3px, -3px)" },
        },
        glitch2: {
          "0%, 100%": { transform: "translate(0)" },
          "20%": { transform: "translate(3px, -3px)" },
          "40%": { transform: "translate(3px, 3px)" },
          "60%": { transform: "translate(-3px, -3px)" },
          "80%": { transform: "translate(-3px, 3px)" },
        },
        glitchText: {
          "0%, 100%": { opacity: "1", transform: "translate(0)" },
          "25%": { opacity: "0.8", transform: "translate(-2px, 1px)" },
          "50%": { opacity: "0.9", transform: "translate(2px, -1px)" },
          "75%": { opacity: "0.8", transform: "translate(-1px, 2px)" },
        },
      },
      // ==========================================
      // KEEP EXISTING: Unoda old settings (change pannadha)
      // ==========================================
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};