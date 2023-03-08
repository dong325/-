import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//routes引入
import router from './router'
//引入element plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(ElementPlus).use(router).mount('#app')
