import Vue from 'vue'
import App from './App.vue'
// 6。在main.js中导入配置好的路由实例对象router
import router from './router'
import '@/styles/base.css'
// 注册并导入vant-ui
import '@/utills/vant-ui'

Vue.config.productionTip = false

new Vue({
  // 7.在new Vue时把实例对象router传入vue
  router,
  render: h => h(App)
}).$mount('#app')
