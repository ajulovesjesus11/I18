/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: "#f0f0f0",
        "carrier-color-guide-white": "#fff",
        "carrier-color-guide-black": "#000",
        "carrier-color-guide-light-gray": "#b9c0d0",
        "carrier-color-guide-carrier-light-blue": "#1891f6",
        "carrier-color-guide-dark-gray": "#607080",
        gainsboro: "#ddd",
        darkslateblue: "#152d73",
        red: "#dd0000",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "21xl": "40px",
      },
    },
    fontSize: {
      base: "1rem",
      sm: "0.875rem",
      lg: "1.125rem",
      "3xl": "1.375rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
