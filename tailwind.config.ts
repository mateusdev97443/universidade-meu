import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { obsidian: "#0B0B0F", eletric: "#00E5FF", ice: "#F0F4F8", emerald: "#50C878" },
      fontFamily: { sans: ["Inter", "Geist", "system-ui"] },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
