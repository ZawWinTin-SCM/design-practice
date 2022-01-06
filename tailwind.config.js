module.exports = {
  content: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px'
      },
    },
    extend: {
      colors: {
        primary: {
          light: '#ECFDF5',
          DEFAULT: '#00c292',
          dark: '#099573',
        },
      }
    },
  },
  plugins: [],
}
