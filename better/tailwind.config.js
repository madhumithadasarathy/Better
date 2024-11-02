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
        'green-primary': '#063125',
        'green-secondary': '#017849',
      },
    },
  },
  plugins: [],
};
