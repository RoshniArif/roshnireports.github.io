module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
    './assets/**/*.css'
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#0C0C0C',
        'ink-gray': '#A9A9A9',
        'dark-gray': '#333333',
        'ink-red': '#C53030',
        'ink-blue': '#264653',
        'ink-gold': '#D4A017',
      },
      fontFamily: {
        'sawarabi': ['Sawarabi Mincho', 'serif'],
        'sans': ['Noto Sans', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
        'sail': ['Sail', 'cursive'],
      },
    },
  },
  plugins: [],
}
