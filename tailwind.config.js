/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/**/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        futura: "FuturaWeb"
      },
      colors: {
        "azul-caixa-1": "#005CA9",
        "azul-caixa-2": "#D0E0E3",
        "azul-caixa-3": "rgba(0,92,169,0.9)"
      }
    }
  },
  plugins: []
}
