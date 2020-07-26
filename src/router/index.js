import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Conquest from '../views/conquest.vue'
import Fractal from '../views/Fractal.vue'
import Raid from '../views/raid.vue'
import WvW from '../views/wvw.vue'
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
  },
  {
    path: '/Fractal',
    component: Fractal,
    name: 'Fractal',
  },
  {
    path: '/Raid',
    component: Raid,
    name: 'Raid',
  },
  {
    path: '/WvW',
    component: WvW,
    name: 'WvW',
  }
]

const router = new VueRouter({
  routes
})

export default router
