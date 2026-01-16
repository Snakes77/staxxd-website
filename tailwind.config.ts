import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#252a34',
        'brand-secondary': '#3a4252',
        'brand-accent': '#ff2e63',
        'brand-accent-light': '#ff6189',
        'brand-dark': '#101216',
        'brand-light': '#eaeaea',
      },
    },
  },
  plugins: [],
}
export default config
