module.exports = {
  //mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          "50": "#107107101",
          "100": "#f5f7ff",
          "200": "#c4c9f2",
          "300": "#969ee8",
          "400": "#6874df",
          "500": "#3e4dd5",
          "600": "#2735b4",
          "700": "#1d2786",
          "800": "#131a58",
          "900": "#090c2a"
        },
        purple: {
          "50": "#fafbff",
          "100": "#f1f3fe",
          "200": "#dfe3fc",
          "300": "#ccd2fa",
          "400": "#bac2f8",
          "500": "#a7b2f6",
          "600": "#5468ed",
          "700": "#3c4cd5",
          "800": "#0d1d81",
          "900": "#29227c"
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
