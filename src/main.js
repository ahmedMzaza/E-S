import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "@mdi/font/css/materialdesignicons.css"

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
  components,
  directives,
})

import { createI18n } from 'vue-i18n'
import English from "./locale/en.json"
import Arabic from "./locale/ar.json"
const i18n = createI18n({
  locale: "English",
  messages: {
    English: English,
    Arabic: Arabic,
  }
})

createApp(App).use(vuetify).use(i18n).use(router).mount('#app')