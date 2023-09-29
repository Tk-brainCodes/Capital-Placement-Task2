/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 4px 25px 0px rgba(29, 78, 216, 0.05)',
        custom2: '0px 4px 25px 0px rgba(141, 141, 141, 0.05)'
      },
      borderColor: {
        custom: '0.5px solid #ECECEC'
      },
      borderRadius: {
        custom: '16px 16px 0px 6px'
      },
      fontFamily: {
        Inter: 'Inter',
        Poppins: 'Poppins'
      }
    }
  },
  plugins: []
}
