module.exports = {
  content: ["./public/login.html", "./public/signup.html", "./public/user.html"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'home-img': "url('../../../img/cloud-purple.jpg')",
      }),
      fontFamily: {
        'monster': ["'Montserrat'", 'sans-serif'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
