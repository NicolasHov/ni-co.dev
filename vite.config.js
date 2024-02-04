import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ni-co.dev',
  plugins: [
    react(),
    vue({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
          assetsInlineLimit: 0
        },
      },
    })
  ]
})
