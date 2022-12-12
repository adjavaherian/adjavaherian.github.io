import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        contact: resolve(__dirname, 'contact.html'),
        education: resolve(__dirname, 'education.html'),
        hobbies: resolve(__dirname, 'hobbies.html'),
        photos: resolve(__dirname, 'photos.html'),
        whatsnext: resolve(__dirname, 'whats-next.html'),
      },
    },
  },  
})
