import { createApp } from 'vue'

// console.log("import.meta.env.PROD", import.meta?.env?.PROD)

console.log("MODE: ", import.meta.env.MODE)
import '@vueLibExo/style.css'
import '@vueLibExo/styles/vue-lib-exo-corrected.scss'

import App from './App.vue'
import { createLidinAppKit } from '@vueLibExo/lidinAppKitConfig/createLidinAppKit.ts'
import { DEFAULT_VUETIFY_CONFIG } from '@vueLibExo/lidinAppKitConfig/vuetifyConfig/defaultVuetifyConfig.ts'
import router from "./router";
import {createPinia} from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const lidinAppKit = createLidinAppKit(DEFAULT_VUETIFY_CONFIG)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App).use(lidinAppKit).use(pinia).use(router)

// Monter l'application directement (pas d'authentification)
app.mount('#app');
