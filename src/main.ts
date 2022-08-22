import { createApp } from 'vue'
import './style.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import pinia from './stores/index'
// custom element dark(自定义暗黑模式)
import "@/styles/element-dark.scss";
// custom element css
import "@/styles/element.scss";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";


const app = createApp(App)

app.use(router).use(pinia).mount('#app')
