import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入axios
import axios from 'axios'
// 导入全局样式表
import './assets/css/global.css'
import './config/server'
import './plugins/element.js'
import './plugins/1rem100px'
import './plugins/public.css'
// import './plugins/Embed_.js'
import './plugins/embed.js'
Vue.config.productionTip = false


Vue.prototype.$http = axios
// 时间格式过滤
Vue.filter('dateFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  // padstart    2位自动填充字符串
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const hh = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
