import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ni-co.dev',
  plugins: [
    react(),
  ]
})

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     "process.env": process.env,
//     ENV_KEY: process.env.ENV_KEY,
//   },
// });

// define: { 'process.env.NODE_ENV': '"production"' }