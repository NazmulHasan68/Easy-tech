import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        destructive: "#ef4444",
        secondary: "#6b7280",
        success: "#16a34a",
        warning: "#f59e0b",
      },
    },
  },
  plugins: [],
};

export default config;
