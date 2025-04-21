/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    extend: {
      colors: {
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        game: {
          primary: '#1A237E',
          accent: '#FFD700',
          shiny: '#FF4081',
          highlight: '#4CAF50',
        },
      },
      animation: {
        gradient: 'gradient 3s linear infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        sparkle: 'sparkle 3s linear infinite',
        'sparkle-star': 'sparkle-star 2s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        breath: 'breath 2s ease-in-out infinite',
        'button-glow': 'button-glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        sparkle: {
          '0%': {
            transform: 'scale(0) rotate(0deg)',
            opacity: 0,
          },
          '50%': {
            transform: 'scale(1) rotate(180deg)',
            opacity: 0.8,
          },
          '100%': {
            transform: 'scale(0) rotate(360deg)',
            opacity: 0,
          },
        },
        'sparkle-star': {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
            opacity: 0.8,
          },
          '50%': {
            transform: 'scale(1.2) rotate(180deg)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(1) rotate(360deg)',
            opacity: 0.8,
          },
        },
        glow: {
          '0%, 100%': {
            opacity: 0.5,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 1,
            transform: 'scale(1.1)',
          },
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: 0.3,
            transform: 'scale(1)',
          },
          '50%': {
            opacity: 0.6,
            transform: 'scale(1.05)',
          },
        },
        breath: {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1)',
          },
          '50%': {
            transform: 'scale(1.1)',
            filter: 'brightness(1.2)',
          },
        },
        'button-glow': {
          '0%, 100%': {
            filter:
              'brightness(1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))',
            transform: 'scale(1)',
          },
          '50%': {
            filter:
              'brightness(1.3) drop-shadow(0 0 15px rgba(59, 130, 246, 0.8))',
            transform: 'scale(1.05)',
          },
        },
      },
      backgroundImage: {
        gradient: 'linear-gradient(-45deg, #1A237E, #4CAF50, #FFD700, #FF4081)',
        'hero-pattern':
          'radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        'cta-gradient': 'linear-gradient(to right, #6366F1, #3B82F6)',
      },
      backgroundSize: {
        gradient: '400% 400%',
      },
      lineHeight: {
        hero: '4.5rem',
      },
      dropShadow: {
        text: '0 2px 4px rgba(0,0,0,0.3)',
        'text-lg': '0 4px 8px rgba(0,0,0,0.3)',
      },
      perspective: {
        1000: '1000px',
      },
    },
  },
  plugins: [],
};
