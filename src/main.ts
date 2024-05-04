import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DefaultLayout', DefaultLayout)
app.component('LoginLayout', LoginLayout)

app.mount('#app')
