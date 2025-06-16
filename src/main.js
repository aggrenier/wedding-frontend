import { createApp } from 'vue'
import router from './router'
import App from './app.vue'
import './style.css'

createApp(App)
  .use(router)
  .mount('#app')