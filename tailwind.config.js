/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        navy: { DEFAULT: "#2A3A4F" },
        champagne: { DEFAULT: "#F5E6CC" },
        dutch: { DEFAULT: "#EFE2BA" },
        platinum: { DEFAULT: "#EAEAEA" },
        goldenrod: { DEFAULT: "#DAA520" },
        lightgold: { DEFAULT: "#ebc054" },
        seasalt: { DEFAULT: "#F6F8F7" },
        raisinblack: { DEFAULT: "#221C1D" },
      },
    },
  },
  plugins: [],
};
