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

const app = createApp(App)
app.use(router).mount('#app')
