import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import router from './router'
import './assets/style.css'

let port = process.env.PORT;
if (port == null || port == ""){
    port = 4000;
}

createApp(App).use(router).mount('#app')
