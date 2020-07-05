import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Conquest from '../views/conquest.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

  },
  {
    path: '/conquest',
    component: Conquest,
    name: 'conquest',
  }
]

const router = new VueRouter({
  routes
})

export default router
