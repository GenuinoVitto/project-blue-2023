/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/index.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      aspectRatio: {
        '960/300':'960 / 300',
      },
      backgroundImage: {
        'wave-1': "url('~/assets/img/wave-1.svg')",
        'hero': "url('~/assets/img/hero-1.jpg')",
      },
      fontFamily: {
        Quicksand: ["Quicksand", "sans-serif"],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

