module.exports = {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      backgroundImage: {
        'profile': 'url("/src/assets/img/bg-profile-section.png")',
      },
      colors: {
        brand: {
          'pink': '#B300AC',
          'pink-light': '#B62AB0',
          'gray': '#121214',
          'gray-2': '#202024',
          'gray-3': '#323238',
          'gray-4': '#7C7C8A',
          'gray-5': '#8D8D99',
          'gray-6': '#C4C4CC',
          'gray-7': '#E1E1E6',
          'white': '#FFFFFF',
          'red-danger': '#F75A68'
        },
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
