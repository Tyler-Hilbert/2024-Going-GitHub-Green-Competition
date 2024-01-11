/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        "green-swoosh":"green-swoosh 3s ease infinite",
        "shifting-triangles":"shifting-triangles 3s ease infinite",
        "rainbow-river":"rainbow-river 5s ease infinite"
      },
      keyframes: {
        "green-swoosh":{"0%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))"},"50%":{"background-size":"600% 100%","background-position":"right center","background-image":"linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))"},"100%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 192, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 128, 0, 0.8))"}},
        "shifting-triangles":{"0%":{"background-image":"linear-gradient(60deg, rgba(255, 0, 0, 0.8) 25%, rgba(0, 255, 0, 0.8) 50%, rgba(0, 0, 255, 0.8) 75%)","background-size":"200% 200%","background-position":"top left"},"50%":{"background-image":"linear-gradient(60deg, rgba(0, 0, 255, 0.8) 25%, rgba(255, 0, 0, 0.8) 50%, rgba(0, 255, 0, 0.8) 75%)","background-size":"200% 200%","background-position":"bottom right"},"100%":{"background-image":"linear-gradient(60deg, rgba(255, 0, 0, 0.8) 25%, rgba(0, 255, 0, 0.8) 50%, rgba(0, 0, 255, 0.8) 75%)","background-size":"200% 200%","background-position":"top left"}},
        "rainbow-river":{"0%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))"},"50%":{"background-size":"600% 100%","background-position":"right center","background-image":"linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))"},"100%":{"background-size":"600% 100%","background-position":"left center","background-image":"linear-gradient(to right, rgba(128, 0, 0, 0.8), rgba(255, 165, 0, 0.8), rgba(255, 255, 0, 0.8), rgba(0, 128, 0, 0.8), rgba(0, 0, 255, 0.8), rgba(75, 0, 130, 0.8), rgba(238, 130, 238, 0.8))"}}
      },
    },
  },
  plugins: [],
}

