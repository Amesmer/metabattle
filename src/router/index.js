import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Conquest from '../views/conquest.vue'
import conquestManage from '../views/manage/conquestManage.vue'
import bdpage from '../views/manage/bdpage.vue'

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
  },
  {
    path: '/conquestManage',
    component: conquestManage,
    name: 'conquestManage',
  },
  {
    path: '/bdpage',
    component: bdpage,
    name: 'bdpage',
  }
]

const router = new VueRouter({
  routes
})

export default router
