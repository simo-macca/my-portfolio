import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import { useThemeStore } from '@/stores/ThemeStore.js'

const app = createApp(App)

app.use(createPinia())
app.use(MotionPlugin)

const themeStore = useThemeStore()
themeStore.applyTheme()

app.mount('#app')
