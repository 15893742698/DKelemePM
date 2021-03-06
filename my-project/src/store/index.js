import Vue from 'vue'
// 导入vuex模块
import Vuex from "vuex"
// state 导入状态
// import state from './state'
// 配置vuex
Vue.use(Vuex);
const state = {
  //head组件的标题
  titlename: "",
  //未登录时默认用户信息
  defaultmsg: {
    username: "登录/注册",
    phone: "暂无绑定手机号",
    srcc: "../../imgs/我的.png"
  },
  //登录之后用户的信息
  usermsg: {},
  //判断是否登录
  denglu: false,
  //未登录时所跳转的登录界面
  unlogin: {
    login: "/home/unlogin"
  },
  //登录之后跳转的账户信息界面
  login: {
    login: "/home/login"
  },
  //判断是否编辑地址
  bianjiadd: true,
  //搜索地址的固定城市id
  cityid: Number,
  //储存添加地址点击搜索地址时name和手机号的数据
  adaddmsgg: {
    name: ""
  },
  //新的信息
  adobjname: "",
  adobjphone: "",
  adobjtelphone: "",
  //储存添加的收货地址
  detailadd: "",
  //判断当前的说明是余额还是红包还是积分等等
  detailexplain: Number,
  //选择城市之后的选择的具体信息
  choicecityadd: "",
  botchoice: {
    waimai: Boolean,
    sousuo: Boolean,
    dingdan: Boolean,
    mine: Boolean
  },
  shopcar: [],
  sousuojilu: [],
  allshuju: [],
  shoping: [], //购物车
  num: 0, //总金额
  zonggeshu: 0, //总个数
  peisongfei: 0, //配送费，
  //添加地址
  tianjiadizhi: false,
  vipvalue: false,
  shangjiamingzi: "", //商家名字,
  zongdingdan: []
}
const store = new Vuex.Store({
  state,
  mutations: {
    //改变标题
    changetn(state, value) {
      state.titlename = value;
    },
    //改变登录状态
    denglu(state, value) {
      // console.log("woshizhu")
      state.denglu = value;
      // console.log(state.denglu)
    },
    //新增收货地址
    changeadd(state, value) {
      state.detailadd = value;
    },
    //改变新增地址时候所输入的值
    changeaddmsg(state, value) {
      // console.log(value)
      state.adaddmsgg = value;
    },
    //改变输入的name
    changeaddname(state, value) {
      state.adobjname = value;
    },
    //改变输入的电话
    changeaddphone(state, value) {
      state.adobjphone = value;
    },
    //改变输入的备用手机
    changeaddtlphone(state, value) {
      state.adobjtelphone = value;
    },
    //改变新增收货地址
    changedetailadd(state, value) {
      state.adddetail = value;
    },
    //改变说明的状态判断说明
    explaindetail(state, value) {
      state.detailexplain = value;
    },
    //改变城市id
    changecityid(state, value) {
      state.cityid = value;
    },
    //改变城市搜索地址后的具体信息
    changecityadd(state, value) {
      state.choicecityadd = value
    },
    //改变最下方导航
    changebotchoice(state, value) {
      state.botchoice = value;
    },
    //更改搜索记录
    changesousuojilu(state, value) {
      state.sousuojilu.push(value)
    },
    //更改所有商品数据
    changeallshuju(state, value) {
      state.allshuju = value;
    },
    //更改num
    numchange(state, value) {
      state.num = value;
    },
    //更改配送费
    peisongchange(state, value) {
      state.peisongfei = value;
    },
    //更改总个数
    countchange(state, value) {
      state.zonggeshu = value;
    },
    //shoping数据删除
    shopchange(state, value) {
      state.shoping = value;
    },
    //更改count
    a(state, a) {
      a.count++;
      if (state.shoping.indexOf(a) == -1) {
        state.shoping.push(a);
      }
      state.num += a.price;
      state.zonggeshu += 1;
      var ps = 0;
      for (var a = 0; a < state.shoping.length; a++) {
        if (ps < state.shoping[a].packing_fee) {
          ps = state.shoping[a].packing_fee
        }
      }
      state.peisongfei = ps;
    },
    b(state, b) {
      b.count--;
      for (let i = 0; i < state.shoping.length; i++) {
        if (state.shoping[i].count == 0) {
          state.shoping.splice(i, 1)
        }
      }
      var ps = 0;
      for (var a = 0; a < state.shoping.length; a++) {
        if (ps < state.shoping[a].packing_fee) {
          ps = state.shoping[a].packing_fee
        }
      }
      // console.log(state.num, state.peisongfei)
      state.peisongfei = ps;
      state.num -= b.price;
      state.zonggeshu -= 1;
    },
    shopingclear(state) {
      for (var a = 0; a < state.shoping.length; a++) {
        state.shoping[a].count = 0;
      }
    },
    //添加地址
    tianjiadizhi(state, value) {
      state.tianjiadizhi = value;
    },
    //清空搜索记录
    qingkongsousuo(state) {
      state.sousuojilu = [];
    },
    //更改vip状态
    changevipstate(state, value) {
      state.vipvalue = value;
    },
    //更改商家名字
    gaimingzi(state, value) {
      state.shangjiamingzi = value;
    },
    //总订单
    zongdingdana(state, value) {
      state.zongdingdan.push(value)
    },
    //清空总订单
    clearzongdingdan(state,value){
      state.zongdingdan=value;
    },
    //属性
    shuxing(state,value) {
      //在shoping中添加name和num和data属性
      Vue.set(state.shoping, "name", state.shangjiamingzi);
      Vue.set(state.shoping, "num", state.num);
      Vue.set(state.shoping,"date",value);
    }
  }
})
export default store;
