// 设置请求拦截器
import axios from 'axios'
import { Toast } from 'vant'
import { get, del } from './storage'
// 从router里引入router-view的实例化router
import router from '@/router/index'

// 配置默认请求参数,替换掉自己的路径后，重启路径
axios.defaults.baseURL = 'http://interview-api-t.itheima.net'
// 添加请求拦截器

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  config.headers.Authorization = 'Bearer ' + get('TOKEN')
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response
}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  const { status, data: { message } } = error.response
  if (status === 404 || status === 402) {
    Toast(message)
  } else if (status === 401) {
    //  1.错误提示
    Toast('网络错误，请重新登录')
    // 2.跳转岛登陆页面
    router.push('/login')
    // 3.删除token
    del('TOKEN')
  }
  return Promise.reject(error)
})

export default axios
