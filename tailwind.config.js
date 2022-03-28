module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Inter Regular', 'system-ui'],
      bold: ['Inter Bold', 'system-ui'],
    },
    extend: {
      colors: {
        green: '#00DB7D',
        purple: '#4340FC',
        dark: '#0A1F44',
      },
    },
  },
  plugins: [],
}
