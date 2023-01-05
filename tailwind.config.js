module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  // content: [
  //   './storage/framework/views/*.php',
  //   './resources/**/*.blade.php',
  //   './resources/**/*.js',
  //   './resources/**/*.vue',
  // ],
  theme: {
    extend: {},
  },
  plugins: [require("./plugin")],
}