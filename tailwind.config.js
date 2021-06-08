module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        main: "0px 0px 10px 1px rgba(0,0,0,0.75)",
      },
      colors: {
        "fresh-god": {
          "cool-rose": "#E7B7C8",
          "magic-blue": "#63BCC9",
          900: "#442C2E",
          50: "#CDB3D4",
        },
      },
      borderRadius: {
        main: "3rem",
      },
      backgroundImage: (theme) => ({
        main: "url('/src/assets/images/background.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
