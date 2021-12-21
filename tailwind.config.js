module.exports = {
  content: ["./index.html", "./index2.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-img': "url('./img/homepage.jpg')",
      }),
    },
  },
  plugins: [],
}
