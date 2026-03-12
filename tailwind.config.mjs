/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
      },
      colors: {
        fn: {
          white: '#FFFFFF',
          snow: '#F7F9FC',
          'sky-pale': '#EDF2FA',
          'sky-light': '#D4E3F5',
          sky: '#4B8BD4',
          'sky-deep': '#2E6BB5',
          navy: '#1B3A5C',
          ink: '#1A2332',
          'warm-gray': '#5A6474',
          text: '#2D3748',
          'light-border': '#E2E8F0',
          green: '#38A169',
          'green-light': '#C6F6D5',
          'green-pale': '#F0FFF4',
          amber: '#D69E2E',
          'amber-light': '#FEFCBF',
        },
      },
    },
  },
  plugins: [],
}
