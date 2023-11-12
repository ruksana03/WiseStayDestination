/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
        'dancing-script': ['Dancing Script', 'cursive'],
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [require("daisyui")],
}

