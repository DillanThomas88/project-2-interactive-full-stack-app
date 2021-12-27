module.exports = {
  content: ["./public/index.html", "./public/index2.html", "./public/index3.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-img': "url('../../../img/cloud-purple.jpg')",
      }),
    },
  },
  plugins: [],
}
