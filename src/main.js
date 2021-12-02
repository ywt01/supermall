import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyPlugin from 'vue3-lazy'
createApp(App).use(store).use(router).use(LazyPlugin,{loading:''}).mount('#app')

