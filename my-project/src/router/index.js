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
import Explaindetail from '../components/explaindetail'
import Unloginyouhuiyemian from '../components/unloginyouhuiyemian'
import DuihuanHB from '../components/duihuanhongbao'
import Tuijianhb from '../components/tuijianhb'
import Guoqihb from '../components/guoqihb'
import Dweleme from '../components/download'
import Vip from '../components/vip'
import Goumai from '../components/goumaivip'
import Duihuanvip from '../components/duihuanvip'
import Fapiao from '../components/kaifapiao'
import Serve from '../components/serve'
import Serveexplain from '../components/serveexplain'
import Detailss from '../components/details'
import Choicecity from '../components/choicecity'
import City from '../components/city'
import Order from '../components//order'
import Jifenshangcheng from '../components/jifenshangcheng'
import Searchfood from '../components/searchfood'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //  path: '/',
    //   component: Home
    // },
    
    {
      //未登录时的界面
      path: '/home/unlogin',
      name:"unlogin",
      component: Unlogin
    }, {
      //主界面  我的
      path: '/home',
      name: "home",
      component: Home
    },{
      //外卖界面
      path:"/waimai",
      name:"waimai",
      component:Merchant
    },
    {
      //余额界面
      path: '/yue',
      component: Yue
    }, {
      //积分界面
      path: '/count',
      component: Count
    }, {
      //优惠界面
      path: '/discount',
      name:"discount",
      component: Youhui
    }, {
      //登录之后的用户信息界面
      path: '/home/login',
      name:"login",
      component: Login
    },
   
    {
      //进入网站的主界面
      path: '/',
      name: 'choicecity',
      component: Choicecity
    },
    {
      path: '/classify',
      name:"classify",
      component: Classify
    },
    {
      path: '/shopq/:id?',
      name:'shopq',
      component: Shopq
    }, {
      path: "/aaaa",
      component: Cut,
      children:[
       {
          path: '/prev',
          name: "home1",
          component: Home
        }
      ]
    }, {
      path: '/shopq/details',
      name: 'detailss',
      component: Detailss
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: Merchant
    // },
    //?????????下面之前没写 path  我加了个空
     {
      //修改用户名界面
      path: '/home/login/resetusername',
      name:"reserusername",
      component: Resetname
    }, {
      //增加收货地址界面
      path: "/home/login/resetadd",
      name:"resetadd",
      component: Resetadd
    },{
      //增加收货地址相信信息界面
      path:'/home/login/resetadd/detailadadd',
      name:"detailadadd",
      component:Detailadadd
    },{
      //搜索地址界面
      path:'/home/login/resetadd/detailadadd/searchadd',
      name:"search",
      component:Searchadd
    },{
      //重置密码界面
      path:"/home/login/resetpassword",
      name:"resetpassword",
      component:Resetpassword
    },{
      //余额积分等积分说明
      path:"/detailexplain",
      name:"detailexplain",
      component:Explaindetail
    },{
      //没有登录的优惠界面
      path:"/unloginyouhuiyemian",
      name:"unloginyouhuiyemian",
      component:Unloginyouhuiyemian
    },{
      //兑换红包界面
      path:"/discount/duihuanhongbao",
      name:"duihuanhongbao",
      component:DuihuanHB
    },{
      //推荐有奖界面
      path:"/discount/tuijianhb",
      name:"tuijianhb",
      component:Tuijianhb
    },{
      //过期红包界面
      path:"/discount/guoqihongbao",
      name:"guoqihongbao",
      component:Guoqihb
    },{
      //下载饿了么
      path:"/dweleme",
      name:"dweleme",
      component:Dweleme
    },{
      //会员界面
      path:"/vip",
      name:"vip",
      component:Vip
    },{
      //购买会员界面
      path:"/goumai",
      name:"goumai",
      component:Goumai
    },{
      //卡号卡密兑换会员界面
      path:"/duihuanvip",
      name:"duihuanvip",
      component:Duihuanvip
    },{
      //开发票
      path:"/kaifapiao",
      name:"kaifapiao",
      component:Fapiao
    },{
      //服务中心
      path:"/serve",
      name:"serve",
      component:Serve
    },
    {
      //服务中心介绍
      path:"serveexplain",
      name:"serveexplain",
      component:Serveexplain
    },{
      //搜索地址
      path:"/city",
      name:"city",
      component:City
    },{
      //订单
      path:"/order",
      name:"order",
      component:Order
    },{
      //积分商城界面
      path:"/jifenshangcheng",
      name:"jifenshangchen",
      component:Jifenshangcheng
    },{
      //搜索商铺界面
      path:"/searchfood",
      name:"searchfood",
      component:Searchfood
    }
  ]
})
