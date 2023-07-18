import { createApp } from 'vue'
import App from './App.vue'

/**
 * TailwindCSS
 */
import '@/assets/index.css'

/**
 * Material about
 */
import 'material-symbols'
import '@/assets/material-web'

import router from '@/router/index'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

/**
 * Store
 */
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia).use(router).mount('#app')
