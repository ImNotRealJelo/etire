module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  darkMode: 'class', //false, 'class', 'media'
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 4s ease-in-out infinite',
      },
      colors: {
        'body': '#FBFFFE',
        'currentColor': '#FAA916',
        'secondary': '#F9BD4E',
        'dark': '#726D74',
        'darkest': '#2A282A',
        'twist': '#484551'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif'],
        'roboto': ["'Roboto'", 'sans-serif'],
        'opensans': ["'Open Sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}

