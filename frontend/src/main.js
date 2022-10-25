import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import vuetify from './plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import {loadFonts} from './plugins/webfontloader'

loadFonts()

createApp(App)
    .use(router)
    .use(store)
    .use(VueAxios, axios)
    .use(vuetify)
    .mount('#app')
