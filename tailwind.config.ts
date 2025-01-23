import type {Config} from "tailwindcss";

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f81539",
        secondary: "#fc4308",
        stroke: "#e6e6e6",
        gray: "#f5f5f5",

        black: "#3e3232",
        black5: "#3e3232",
        black10: "#3e3232",
        black25: "#3e3232",
        black50: "#3e3232",
        black75: "#3e3232",

        white: "#ffffff",
        white5: "#ffffff",
        white10: "#ffffff",
        white25: "#ffffff",
        white50: "#ffffff",
        white75: "#ffffff",

        dark: "#000000",
        dark5: "#000000",
        dark10: "#000000",
        dark25: "#000000",
        dark50: "#000000",
        dark75: "#000000",

        primary5: "#f81539",
        primary10: "#f81539",
        primary25: "#f81539",
        primary50: "#f81539",
        primary75: "#f81539",

        secondary5: "#fc4308",
        secondary10: "#fc4308",
        secondary25: "#fc4308",
        secondary50: "#fc4308",
        secondary75: "#fc4308",
      },
      fontSize: {
        "3xs": "0.625rem",
        "2xs": "0.75rem",
        "xs": "0.8125rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5625rem",
        "3xl": "1.9375rem",
        "4xl": "2.25rem"
      },
      fontFamily: {
        roboto: ["Roboto", 'sans-serif'],
      },
      boxShadow: {
        shadow: "0px 0px 32px 0px rgba(0,0,0,0.07)"
      },
      borderRadius: {
        rounded0: "0rem",
        rounded1: "0.3125rem",
        rounded2: "0.75rem",
        rounded3: "2rem",
        rounded4: "3.125rem",
        rounded5: "4rem"
      }
    },
    plugins: [],
  }
} satisfies Config;
