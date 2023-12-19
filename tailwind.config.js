/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#9e8af9",
        textColor: "#e2e8f0",
      },
      fontFamily: {
        allFonts: [
          "Space Grotesk, -apple-system, BlinkMacSystemFont, avenir next,avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, roboto, noto,arial, sans-serif",
        ],
        poppins: ["'Poppins', sans-serif"],
      },
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
      "regal-blue": "#243c5a",
      "regal-orange": "orange",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    textUnderlineOffset: {
      3: "3px",
    },
    backgroundImage: {
      "hero-pattern":
        "url('https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg')",
      "footer-texture":
        "url('https://t4.ftcdn.net/jpg/05/00/76/75/360_F_500767502_AdezwSUsyb04l79RpV6zubKulRnIHpd0.jpg')",
      "gradient-to-t": "linear-gradient(red,blue)",
      "gradient-to-tr": "linear-gradient(orange,blue,yellow)",
      "gradient-to-r": "linear-gradient(orange,purple)",
      "gradient-to-br": "linear-gradient(green,blue,orange)",
      "gradient-to-b": "linear-gradient(purple,pink)",
      "gradient-to-bl": "linear-gradient(cyan,red,lightblue)",
      "gradient-to-l": "linear-gradient(red,powderblue)",
      "gradient-to-tl": "linear-gradient(blue,silver,pink)",
    },
  },
  plugins: [],
};
