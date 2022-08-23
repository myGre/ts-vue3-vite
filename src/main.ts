import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import pinia from './stores/index'

const app = createApp(App)

app.use(router).use(pinia).mount('#app')
