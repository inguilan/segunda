

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    
      extend: {
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
        },
    
        colors: {
          'app-test': '#4ac2c4',
          'app-primary': {
            50 : '#f4f5fe'
          },
          transparent: 'transparent',
          current: 'currentColor',
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#ecebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
          'cerulean': '#0c4a6e',
          'pizarra': '#0f172a',
          'cielo': '#0c4a6e',
          // eslint-disable-next-line no-dupe-keys
          'silver': '#bdc3c7',
          'gray': '#e5e7eb',
          'cian': '#083344',
          'hola': '#16213d'


        },
        screens:{
          ssm: '375px',
          sm: '640px',
          md: '768px',
          log: '1024px',
        }
      },
    },
  plugins: [],
}


