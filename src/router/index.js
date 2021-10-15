import {createRouter, createWebHashHistory} from 'vue-router'
import Cities from '../pages/Cities.vue'
import Home from '../pages/Home.vue'
import CityDetails from '../pages/CityDetails.vue'


const routes = [
  { path: '/', name:'Home' , component: Home },
  { path: '/cities', name:'Cities' , component: Cities },
  { path: '/city-details', name: 'CityDetails', component: CityDetails}
]

const router = createRouter({
 history: createWebHashHistory(process.env.BASE_URL),
 routes
})

export default router