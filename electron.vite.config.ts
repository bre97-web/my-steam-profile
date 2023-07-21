import { resolve } from 'path'
import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
    main: {
        plugins: [externalizeDepsPlugin()]
    },
    preload: {
        plugins: [externalizeDepsPlugin()]
    },
    renderer: {
        resolve: {
            alias: {
                '@': resolve('./src/renderer/src')
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
        root: './src/renderer/',
        base: '/',
        build: {
            outDir: './docs',
            emptyOutDir: true,
            sourcemap: true,
            manifest: true,
            minify: 'esbuild',
            chunkSizeWarningLimit: 500
        },
        server: {
            proxy: {
              '^/api/': {
                target: 'https://api.steampowered.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
              }, 
              '^/steamstore': {
                target: 'https://store.steampowered.com/api',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/steamstore/, ''),
              }
            }
          },
    }
})
