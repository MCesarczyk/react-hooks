/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import path from 'path'

export default defineConfig({
  plugins: [react(), dts()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'index.ts'),
      name: 'React-hooks',
      fileName: (format) => `index.${format}.js`
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true
  }
})
