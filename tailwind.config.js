/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animatedSettings: {
      animatedSpeed: 1000,
      heartBeatSpeed: 1000,
      hingeSpeed: 2000,
      bounceInSpeed: 750,
      bounceOutSpeed: 750,
      animationDelaySpeed: 500,
      classes: ['bounce', 'heartBeat', 'flip','fadeInUp','fadeInDown','fadeInRightBig']
    }
  },
  plugins: [require("daisyui"), require('tailwindcss-animatecss')],
}

