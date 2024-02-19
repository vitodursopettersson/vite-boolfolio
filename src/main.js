import { createApp } from 'vue'
import './scss/style.scss'
import App from './App.vue'
import { router } from './router'
import * as bootstrap from 'bootstrap'
// createApp(App).mount('#app')
createApp(App).use(router).mount('#app')
