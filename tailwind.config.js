/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'start-bg': "url('/images/bg_edit.png')",
        'character-bg': "url('/images/bg_scene2.png')",
        'play-bg': "url('/images/play_background.png')",
      },
      width: {
        gamewidth: '80rem',
      },
      height: {
        gameheight: '45rem',
      },
    },
  },
  plugins: [],
};
