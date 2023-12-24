/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ff0000",
        secondaryColor: "#f7bc00",

      },
      fontFamily: {
        fontFamily: {
          custom1:  ["Custom-1", "sans-serif"],
        },
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
    variants: {},
    screens: {
      xxs: "395px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      ms: "860px",
      smd: "910px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    colors: {
      'regal-blue': '#243c5a',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    textUnderlineOffset: {
      3: '3px',
    },
    backgroundImage: {
      'hero-pattern': "url('https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg')",
    }
  },
  plugins: [],
}