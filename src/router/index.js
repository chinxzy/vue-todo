import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'
import Createtask from '@/views/Createtask'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

  },
  {
    path: '/createtask',
    name: 'Createtask',
    component: Createtask
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
