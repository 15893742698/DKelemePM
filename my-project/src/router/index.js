import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Unlogin from '@/components/unlogin'
import Yue from '@/components/yue'
import Count from '@/components/jifen'
import Youhui from '@/components/youhui'
import Login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path:'/unlogin',
      component:Unlogin
    },{
      path:'/prev',
      component:Home
    },{
      path:'/yue',
      component:Yue
    },{
      path:'/count',
      component:Count
    },{
      path:'/discount',
      component:Youhui
    },{
      path:'/login',
      component:Login
    }
  ]
})
