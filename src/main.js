import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import { router } from "@/router"


import "assets/css/reset.scss";
import "assets/css/common.scss";

import globalInstall from '@/utils/global'




const app = createApp(App)

globalInstall(app)


app.use(createPinia())


app.use(router).mount('#app')