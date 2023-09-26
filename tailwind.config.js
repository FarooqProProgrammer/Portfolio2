/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'firstColor':"hsl(271,76%,53%)",
        'title-color':"hsl(0,0%,40%)",
        'text-color':"hsl(0,0%,50%)",
        'body-color':"hsl(0,0%,100%)",
        'container-color':"hsl(0,0%,93%)",
        'border-color':"hsl(0,0%,87%)",        
      },
      fontSize:{
        'big-font-size':"56px",
        'h1-font-size':'50px',
        'h2-font-size':'32px',
        'h3-font-size':'24px',
        'large-font-size':'18px',
        'normal-font-size':'16px',
        'small-font-size':'15px',
        'smaller-font-size':'14px',
        'tiny-font-size':'12px',
      }
    },
  },
  plugins: [],
}