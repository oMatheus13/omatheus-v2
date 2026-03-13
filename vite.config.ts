import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@data': path.resolve(__dirname, './src/data'),
      '@types': path.resolve(__dirname, './src/types'),
      'zustand/shallow': path.resolve(__dirname, './node_modules/zustand/shallow.js'),
      'bidi-js': path.resolve(__dirname, './node_modules/bidi-js/dist/bidi.min.mjs')
    }
  },
  assetsInclude: ['**/*.glb', '**/*.gltf']
})
