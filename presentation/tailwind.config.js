module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        brandColor: "#5f5ff6",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
