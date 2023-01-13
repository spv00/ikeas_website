import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'

import './assets/base.css'

import 'uno.css'
import router from './components/router'

var app = createApp(App)
app.use(router)

app.mount('#app')