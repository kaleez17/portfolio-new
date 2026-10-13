/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#0a1a11',
          900: '#143422',
          850: '#1A3C2B',
          800: '#234d38',
          700: '#2f654b',
        },
        sun: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706'
        },
        surface: {
          cream: '#FAF9F6',
          light: '#F3F4F1',
          card: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        display: ['Outfit', 'Space Grotesk', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      },
      animation: {
        'spin-slow': 'spin 14s linear infinite',
        'marquee': 'marquee 25s linear infinite',
        'float-gentle': 'floatGentle 4s ease-in-out infinite'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        floatGentle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    },
  },
  plugins: [],
}
