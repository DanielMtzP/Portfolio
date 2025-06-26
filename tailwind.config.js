/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-purple-50',
    'text-purple-100',
    'text-purple-200',
    'text-purple-300',
    'text-purple-400',
    'text-purple-500',
    'text-purple-600',
    'text-purple-700',
    'text-purple-800',
    'text-purple-900',
  ],
};
