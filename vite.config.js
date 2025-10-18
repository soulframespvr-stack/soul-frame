import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  publicDir: 'public', // 👈 ensures /public/admin is included in the build
  server: { port: 5173 },
  build: {
    outDir: 'dist', // required by Netlify
  },
})

