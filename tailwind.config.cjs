/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        surface: '#F5F5F7',
        accent: {
          DEFAULT: '#0A84FF',
          hover: '#0077ED',
          light: '#E8F4FF',
        },
        heading: '#1D1D1F',
        body: '#424245',
        muted: '#6E6E73',
        subtle: '#86868B',
        border: '#D2D2D7',
        'card-bg': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
