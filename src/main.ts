import { createApp } from 'vue'
import App from './App.vue'

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
