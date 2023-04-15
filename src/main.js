import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import router from './router'
import store from './store'
import "tukal-vue/css";
import "../iconfont/material-icons.css";
createApp(App).use(router).use(store).mount('#app')
