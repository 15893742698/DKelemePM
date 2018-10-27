import Vue from 'vue'
// 导入vuex模块
import Vuex from "vuex"
// state 导入状态
// import state from './state'
// 配置vuex
Vue.use(Vuex);
const state = {
    //head组件的标题
    titlename:"",
    //未登录时默认用户信息
    defaultmsg:{
        username:"登录/注册",
        phone:"暂无绑定手机号",
        srcc:"../../imgs/我的.png"
    },
    //登录之后用户的信息
    usermsg:{},
    //判断是否登录
    denglu:false,
    //未登录时所跳转的登录界面
    unlogin:{
        login:"/unlogin"
    },
    //登录之后跳转的账户信息界面
    login:{
        login:"/login"
    },
    //判断是否编辑地址
    bianjiadd:true,
    //搜索地址的固定城市id
    cityid:1,
    //储存添加地址点击搜索地址时name和手机号的数据
    adaddmsgg:{
        name:""
    },
    //新的信息
    adobjname:"",
    adobjphone:"",
    adobjtelphone:"",
    //储存添加的收货地址
    detailadd:"",
    //判断当前的说明是余额还是红包还是积分等等
    detailexplain:Number
}
const store = new Vuex.Store({
    state,
    mutations:{
        //改变标题
        changetn(state,value){
           state.titlename=value;
        },
        //改变登录状态
        denglu(state,value){
            // console.log("woshizhu")
            state.denglu=value;
            // console.log(state.denglu)
        },
        //新增收货地址
        changeadd(state,value){
            state.detailadd = value;
        },
        //改变新增地址时候所输入的值
        changeaddmsg(state,value){
            // console.log(value)
            state.adaddmsgg = value;
        },
        //改变输入的name
        changeaddname(state,value){
            state.adobjname = value;
        },
        //改变输入的电话
        changeaddphone(state,value){
            state.adobjphone = value;
        },
        //改变输入的备用手机
        changeaddtlphone(state,value){
            state.adobjtelphone = value;
        },
        //改变新增收货地址
        changedetailadd(state,value){
            state.adddetail = value;
        },
        //改变说明的状态判断说明
        explaindetail(state,value){
            state.detailexplain = value;
        }
    }
})
export default store;