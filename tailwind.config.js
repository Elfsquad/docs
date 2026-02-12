module.exports = {
  content: ["./docs/**/*.{js,jsx,ts,tsx,md,mdx}", "./src/**/*.{js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        'adaptable-dark-green': '#00221F',
        'adaptable-green': '#004B48',
        'smart-neon': '#00FF81',
        'free-green': '#AEFFCB',
        'manufacturing-orange': '#FF6911',
        'trust-turquoise': '#71D5D8',
        'tech-savy-purple': '#7F60DE',
        'creative-pink': '#E888FF',
        'off-white': '#F5F6F0',
        'surface-dim': '#011816',
      },
      fontFamily: {
        'sans': ['"Instrument Sans"', 'sans-serif'],
        'heading': ['"Roobert"', '"Instrument Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
};
