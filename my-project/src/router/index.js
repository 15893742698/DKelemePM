import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Unlogin from '@/components/unlogin'
import Yue from '@/components/yue'
import Count from '@/components/jifen'
import Youhui from '@/components/youhui'
import Login from '@/components/login'
import HelloWorld from '@/components/HelloWorld'
import Merchant from '../components/merchant'
import Classify from '../components/classify'
import Shopq from '@/components/shopq'
// import Cut from "../components/cut"
import Cut from '../components/cut'
import Resetname from '../components/resetname'
import Resetadd from '../components/resetadd'
import Detailadadd from '../components/detailadadd'
import Searchadd from '../components/searchadd'
import Resetpassword from '../components/resetpassword'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //  path: '/',
    //   component: Home
    // },
    {
      path: '/unlogin',
      component: Unlogin
    }, {
      path: '/home',
      name: "home",
      component: Home
    }, {
      path: '/prev',
      name: "home",
      component: Home
    }, {
      path: '/yue',
      component: Yue
    }, {
      path: '/count',
      component: Count
    }, {
      path: '/discount',
      component: Youhui
    }, {
      path: '/login',
      name:"login",
      component: Login
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: Merchant
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/shopq/:id?',
      name:'shopq',
      component: Shopq
    }, {
      path: "/aaaa",
      component: Cut
    }, {
      path: '/resetusername',
      component: Resetname
    }, {
      path: "/resetadd",
      name:"resetadd",
      component: Resetadd
    },{
      path:'/detailadadd',
      name:"detailadadd",
      component:Detailadadd
    },{
      path:'/searchadd',
      component:Searchadd
    },{
      path:"/resetpassword",
      component:Resetpassword
    }
  ]
})
