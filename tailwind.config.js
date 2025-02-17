import { resolve } from 'node:path'
import cssplugin from './cssplugin'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
  	extend: {
      colors: {
        'blue-primary': 'var(--color-blue-primary)',
        'blue-secondary': 'var(--color-blue-secondary)',
        'gray-primary': 'var(--color-gray-primary)',
        'gray-border-primary': 'var(--color-gray-border-primary)',
        'gray-container': 'var(--color-gray-container)',
        'bottom-button-container': 'var(--color-bottom-button-container)',
        'border-bottom-table': 'var(--color-border-bottom-table)'
      },
      fontFamily: {
        japan: ['var(--font-family-japan)']
      }
    }
  },
  plugins: [require('daisyui'), cssplugin(resolve(__dirname, './src/index.css'))],
  daisyui: {
    themes: [{
      light: {
        primary: '#00316C',
        secondary: '#2192FF'
      }
    }]
  }
}
