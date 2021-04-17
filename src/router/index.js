import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Info from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Info',
    name: 'Info',
    component: Info
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
