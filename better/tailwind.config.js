// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure this path includes all your components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'green-primary': '#004733',
        'green-secondary': '#1EE07F',
      },
    },
  },
  plugins: [],
};
