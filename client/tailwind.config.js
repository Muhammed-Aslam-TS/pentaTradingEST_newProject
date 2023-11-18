/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../assets/images/aboutBackground.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      screens: {
        xs: "323px", // Extra small screens and up
        sm: "660px", // Small screens and up
        md: "778px", // Medium screens and up
        lg: "1020px", // Large screens and up
        xl: "1250px", // Extra large screens and up
      }
    },
  },
  plugins: [],
}

