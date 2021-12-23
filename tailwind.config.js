module.exports = {
  content: ["./public/index.html", "./public/index2.html", "./public/index3.html", "./views/homepage.handlebars"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-img': "url('/Users/latommyla/project-2-interactive-full-stack-app/public/img/homepage.jpg')",
      }),
    },
  },
  plugins: [],
}
