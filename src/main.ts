import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import DefaultLayout from './layouts/DefaultLayout.vue'
import LoginLayout from './layouts/LoginLayout.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faRightFromBracket,
  faPlus,
  faChevronDown,
  faArrowLeft,
  faTrashCan,
  faFloppyDisk
} from '@fortawesome/free-solid-svg-icons'

library.add(faRightFromBracket, faPlus, faChevronDown, faArrowLeft, faTrashCan, faFloppyDisk)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('DefaultLayout', DefaultLayout)
app.component('LoginLayout', LoginLayout)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
