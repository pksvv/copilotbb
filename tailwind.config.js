/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'financial': {
          'primary': '#FF8000',
          'primary-hover': '#FF8000CC',
          'background': '#151518',
          'surface': '#1a1a1d',
          'text': '#FFFFFF',
          'text-secondary': '#9CA3AF',
          'border': '#374151',
          'border-hover': '#FF8000',
        },
        'light-financial': {
          'primary': '#3366CC',
          'primary-hover': '#3366CCCC',
          'background': '#ffffff',
          'surface': '#f8fafc',
          'text': '#1f2937',
          'text-secondary': '#6b7280',
          'border': '#d1d5db',
          'border-hover': '#3366CC',
        }
      },
      backgroundImage: {
        'gradient-indigo-purple': 'linear-gradient(to right, #6366f1, #9333ea)',
        'gradient-green-emerald': 'linear-gradient(to right, #10b981, #059669)',
        'gradient-red-orange': 'linear-gradient(to right, #ef4444, #f97316)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(300px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(300px, 1fr))',
      }
    },
  },
  plugins: [],
}