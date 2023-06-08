/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '128': '40rem',
        '100': '32rem'
      },
      borderWidth: {
        '15': '15px'
      },
      width: {
        '128': '40rem',
        '100': '32rem'
      }
    },
  },
  plugins: [require("daisyui")],
}
