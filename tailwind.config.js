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
            arial: ['Arial', 'sans-serif'],
        },
        colors: {
          background: '#181818',
          secondary: '#212121',
          text: '#ffffff',
          hover: '#aaaaaa',
          search: '#121212',
          neautral: '#525252'
        },
        width: {
          search: '38rem',
        },
        maxWidth: {
          search: '32rem',
        },
        screens: {
          after428: '428px',
          after358: '358px'
        },
        fontSize: {
          ss: '10px',
          norm: '16px'
        }
  },
  plugins: [],
}
};
