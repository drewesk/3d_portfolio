import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],

  server: {
    usePolling: true,
    // host: '0.0.0.0', // Listen on all interfaces (optional, for LAN/public access)
    port: 3000, // Define the port
  },
});