import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faBarsStaggered, faGlobe, faUserSecret, faWeightScale } from '@fortawesome/free-solid-svg-icons'
import {  } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faBars, faBarsStaggered, faGlobe, faWeightScale)

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome', FontAwesomeIcon)
app.mount('#app')
