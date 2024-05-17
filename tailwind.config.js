/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "1024px",
        lg: "1280px",
        xl: "1500px",
        xll: "1920px",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
      colors: {
        FF6000: "#FF6000",
        "2578C3": "#2578C3",
        697785: "#697785",
        ADADAD: "#ADADAD",
        "000000": "#000000",
        "048C84": "#048C84",
        C68914: "#C68914",
        FF0000: "#FF0000",
        D3E3F5: "#D3E3F5",
        F2F2F2: "#F2F2F2",
      },
    },
  },
  variants: {},
  plugins: [],
};
