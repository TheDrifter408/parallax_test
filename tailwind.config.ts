import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        'radial-gradient':'radial-gradient(252% 110.16% at 24.49% 80.21%, #00167D 0%, #001A94 100%);',
        'background-texture': "url('/background.svg');",
      }
    },
  },
  plugins: [],
};
export default config;
