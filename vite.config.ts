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
          isCustomElement: (tag: string): boolean => tag.startsWith('md')
        }
      }
    }),
    vueJsx({
      isCustomElement: (tag: string): boolean => tag.startsWith('md-')
    })
  ],
  root: './',
  clearScreen: true,
  base: '/my-steam-profile',
  build: {
    outDir: './docs',
    emptyOutDir: true,
    sourcemap: true,
    manifest: true,
    minify: 'esbuild',
  }
})
