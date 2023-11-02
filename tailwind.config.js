/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'start-bg': "url('/images/bg_edit.png')",
        'character-bg': "url('/images/bg_scene2.png')",
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
