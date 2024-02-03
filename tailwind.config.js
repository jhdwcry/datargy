/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
   theme: {

    colors: {   
      'white': '#FFFF',      
      'grey': '#EFF1F3',       
      'black': '#1D2027',       
      'orange': '#F8931F',     
      'green': '#377E36',     
    } ,  
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        sans: ['Poppins, sans-serif'],
    },
  },
  plugins: [],
}
}

