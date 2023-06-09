
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      ['@components']: path.resolve(__dirname, './src/components'),
      ['@assets']: path.resolve(__dirname, './src/assets'),
      ['@hooks']: path.resolve(__dirname, './src/hooks'),
      ['@lib']:     path.resolve(__dirname, './src/lib'),
      ['@utils']: path.resolve(__dirname, './src/utils'),
      ['@types']: path.resolve(__dirname, './src/types'),
      ['@api']: path.resolve(__dirname, './src/app/api'),
      ['@app']: path.resolve(__dirname, './src/app'),
      ['@pages']: path.resolve(__dirname, './src/pages'),
    },
  },
  plugins: [
    react(), 
    tsconfigPaths()
  ],
})

