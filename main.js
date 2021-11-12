import { createApp } from 'vue'
import { App } from './app.jsx'
import { router } from './src/routes/router.js'

const app = createApp(App, { userName: 'Henry' })
app.use(router)
app.mount('#app')
