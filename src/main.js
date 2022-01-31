import 'bootstrap/dist/css/bootstrap.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
window.axios = require('axios')

createApp(App).use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.js'