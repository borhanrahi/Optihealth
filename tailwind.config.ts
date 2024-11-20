import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
      backgroundImage: {
        "radial-divider":
          "radial-gradient(circle, rgba(24,34,47,1) 0%, rgba(8,13,20,0) 100%)",
        "radial-divider-wrapper":
          "radial-gradient(circle at 50% 85%, rgba(24, 33, 46, 0.95) 0%, rgba(8, 13, 20, 0.8) 70%, rgba(8, 13, 20, 0.95) 100%)",
        "radial-divider-line":
          "radial-gradient(50% 50% at 50% 50%, rgba(32, 71, 128, 1) 0%, rgba(12, 19, 29, 0.8) 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
