module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundSize: {
        600: "600% 600%",
      },
      width: {
        inherit: "inherit",
      },
      colors: {
        accent: {
          light: "#32CD30",
          DEFAULT: "#5c6ac4",
        },
      },
      zIndex: {
        zIndex: {
          "-1": "-1",
        },
      },
      keyframes: {
        loading: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        loading: "loading 3s ease-in-out infinite",
      },
      flex: {
        0: "0 0 auto",
      },
    },
  },
  fontFamily: {
    body: ["Cairo", "sans-serif"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
