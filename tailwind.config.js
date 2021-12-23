module.exports = {
  content: ["./public/index.html", "./public/index2.html", "./public/index3.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-img': "url('./public/img/homepage.jpg')",
      }),
    },
  },
  plugins: [],
}
