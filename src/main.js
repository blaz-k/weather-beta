import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import CityDetails from './pages/CityDetails.vue'
import Cities from './pages/Cities.vue'


const webApp = createApp(App)

const router = createRouter({
 history: createWebHashHistory(),
 routes: [
  { path: '/city-details', component: CityDetails },
  { path: '/', component: Cities },
]
})



webApp.use(router)

webApp.mount('#app')