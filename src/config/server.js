import axios from 'axios'

// 导入NProgres包对应的JS和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 配置请求基地址
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
// 在request 拦截器中展示进度条
// axios拦截器
axios.interceptors.request.use(config => {
    // console.log(config)
    NProgress.start()
    //   config.headers.Authorization = window.sessionStorage.getItem('token')
    // 在最后必须return config
    return config
})
// 在 response 拦截器中隐藏进度条 NProgress.done()
axios.interceptors.response.use(config => {
    NProgress.done()
    return config
})
