module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: "#009ada",
        DEFAULT: "#04c2c9",
        dark: "#00a1a7",
      },
      secondary: {
        light: "",
        DEFAULT: "#e31b6d",
        dark: "",
      },
      white: "#f1f1f1",
      icon: "#fff",
      iconBg: "#262f38",
      footerBg: "#1b242f",
      hIconBg: "#04c2c9",
      dark: "#444649",
      gray: "#616161",
      "dark-blue": "#0E2A47",
    },
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["active", "focus", "group-hover"],
      textDecoration: ["focus-visible"],
    },
  },
  plugins: [],
};
