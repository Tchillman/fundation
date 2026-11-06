import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        osai: {
          wine: "#540101",
          "wine-overlay": "#420000",
          orange: "#F18A42",
          gold: "#FFB606",
          "gold-dark": "#E6A303",
          ink: "#333333",
          body: "#606060",
          muted: "#BFBFBF",
          line: "#EEEEEE",
          copyright: "#2C2C2C",
          donate: "#2F8F46",
          member: "#2374AB",
          cream: "#FAF7F2",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
        display: ["Roboto Slab", "Georgia", "serif"],
      },
      maxWidth: {
        site: "1170px",
      },
    },
  },
}

export default config
