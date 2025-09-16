import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path for GitHub Pages: https://yansalim.github.io/psicologia-lp/
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: true,
    hmr: {
      clientPort: 443,
    },
  },
})
