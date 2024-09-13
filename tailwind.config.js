/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./src/components/**/*.{js,ts,tsx,jsx}",
    "./src/container/**/*.{js,ts,tsx,jsx}",
  ],
  theme: {
    screens: {
      xs: {
        max: "575px",
      },
      sm: {
        min: "576px",
        max: "976px",
      },
      lg: {
        min: "977px",
        max: "1276px",
      },
      xl: {
        min: "1278px",
        max: "1576px",
      },
      "2xl": {
        min: "1577px",
      },
    },
    extend: {
      colors: {
        "rgb-4": "rgba(238, 227, 232, 0.7)",
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
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
        changa: ['Changa, sans-serif'],
      },
      backgroundImage: {
        banner_homepage: ["url('@/assets/background/nonbg-01.png')"],
        section_page: ["url('@/assets/background/Remove-bg.png')"],
      },
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
