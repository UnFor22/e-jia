import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index.vue'
import Login from '@/views/login.vue'
import Notice from '@/views/notice.vue'
import Mydj from '@/views/mydj.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '登录'
      },
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice,
      meta: {
        title: '通知早知道'
      },   
    },
    {
      path: '/mydj',
      name: 'mydj',
      component: Mydj,
      meta: {
        title: '我的党建'
      },
    }
  ]
})
