const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        "shadow": "3px 3px 20px 0px rgba(50,50,50,0.25);"
      }
    },
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      '2xl': '1204px',
    },
    colors: {
      "primary": "rgb(28, 98, 205)",
      "dark": "rgb(47, 48, 53)",
      "gray": "rgb(240, 240, 244)",
    },
    
  },
  plugins: [],
});
