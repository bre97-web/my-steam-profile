import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag: string): boolean => tag.startsWith('md') || tag.includes('scroll-back-button')
        }
      }
    }),
    vueJsx({
      isCustomElement: (tag: string): boolean => tag.startsWith('md-')
    })
  ],
  root: './',
  clearScreen: true,
  base: '/steamer',
  build: {
    outDir: './docs',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    minify: 'esbuild',
  },
  server: {
    
    proxy: {
      '^/api': {
        target: 'https://api.steampowered.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, 'https://api.steampowered.com'),
      }, 
      '^/steamdb': {
        target: 'https://store.steampowered.com/api/appdetails',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/steamdb/, 'https://store.steampowered.com/api/appdetails'),
      }
    }
  },
})
