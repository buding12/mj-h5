import Vue from 'vue'
import VueRouter from 'vue-router' // 注册插件

// 2.导入需要进行路由的组件
import login from '@/views/login/index.vue'
import register from '@/views/register/index.vue'
import layout from '@/views/layout/index.vue'
import detail from '@/views/detail/index.vue'
import NotFound from '@/views/404.vue'
// 二级页面组件
import article from '@/views/article/index.vue'
import like from '@/views/like/index.vue'
import collect from '@/views/collect/index.vue'
import user from '@/views/user/index.vue'

Vue.use(VueRouter)
// 3.定义路由规则
const routes = [
  // 如果url没有hash值，就重定向到默认页面组件
  { path: '/', redirect: '/login' },
  { path: '/login', component: login },
  { path: '/register', component: register },
  {
    path: '/layout',
    component: layout,
    children: [
      {
        // 默认配置二级路径
        path: '',
        redirect: '/layout/article'
      },
      {
        path: 'article',
        component: article
      },
      {
        path: 'like',
        component: like
      },
      {
        path: 'collect',
        component: collect
      },
      {
        path: 'user',
        component: user
      }
    ]
  },
  { path: '/detail', component: detail },
  // 匹配上面没有匹配到的所有hash值，并且重定向到404
  { path: '*', redirect: '/404' },
  { path: '/404', component: NotFound }
]
// 4.创建router实例，然后传routes配置
const router = new VueRouter({
  routes
})
// 6.导出router实例对象
export default router
