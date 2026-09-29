import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rolldownOptions: {
      output: {
        // Картинки → dist/images, остальное (шрифты, css) → dist/assets
        assetFileNames: (assetInfo) => {
          const name = assetInfo.names?.[0] ?? ''
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico|bmp)$/i.test(name)) {
            return 'images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
})
