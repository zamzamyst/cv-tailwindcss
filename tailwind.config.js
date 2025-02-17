/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        'navy-z': "#2d3250",
        'orange-z': "#ff9b42",
        'white-z': "#eff1f3",
        'navy-z-2': "#424769"
      },
      fontFamily: {
        'poppins': ["Poppins", "sans serif"],
        'ubuntu': ["Ubuntu", "sans serif"]
      }
    },
  },
  plugins: [],
}

