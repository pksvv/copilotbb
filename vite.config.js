import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/copilotbb/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@shared': '/src/shared',
      '@content': '/src/content',
      '@assets': '/src/assets'
    }
  }
})