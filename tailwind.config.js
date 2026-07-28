/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          bg:       '#222831',
          card:     '#393E46',
          accent:   '#00ADB5',
          'accent-hover': '#0BC5D1',
        },
      },
    },
  },
  plugins: [],
}
