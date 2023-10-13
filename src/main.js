import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import device from "vue-device-detector"
import VeeValidationPlugin from '@/includes/validation'
import moment from 'moment';

// vue toastification 
import Toast, { useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";



import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faBarsStaggered, faEnvelope, faGlobe, faPhoneVolume, faUser, faUserSecret, faWeightScale } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faBars, faBarsStaggered, faGlobe, faWeightScale, faCopyright, faGithub, faPhoneVolume, faEnvelope, faUser)

import './assets/main.css'
import '@/axios'

const app = createApp(App)
const pinia = createPinia();

pinia.use(({ store }) => {
    store.router = markRaw(router)
})


app.use(pinia)
app.use(VeeValidationPlugin)
app.use(router)
app.use(Toast)
app.component('font-awesome', FontAwesomeIcon)
// app.use('moment', moment)
app.mount('#app')
