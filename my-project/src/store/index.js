import Vue from 'vue'
// 导入vuex模块
import Vuex from "vuex"
// state 导入状态
// import state from './state'
// 配置vuex
Vue.use(Vuex);
const state = {
    titlename:"",
    defaultavatar:'https://elm.cangdu.org/img/',
    defaultmsg:{
        username:"登录/注册",
        phone:"暂无绑定手机号",
        srcc:"../../imgs/我的.png"
    },
    usermsg:{},
    denglu:false,
    unlogin:{
        login:"/unlogin"
    },
    login:{
        login:"/login"
    },
    srcmsg:[]
    ,
    headsrc:"",
    bianjiadd:true,
    cityid:1,
    adaddmsgg:{
        name:""
    },
    adobjname:"",
    adobjphone:"",
    adobjtelphone:"",
    detailadd:"",
    detailexplain:Number
}
const store = new Vuex.Store({
    state,
    mutations:{
        changetn(state,value){
           state.titlename=value;
        },
        denglu(state,value){
            // console.log("woshizhu")
            state.denglu=value;
            // console.log(state.denglu)
        },
        changeadd(state,value){
            state.detailadd = value;
        },
        changeaddmsg(state,value){
            // console.log(value)
            state.adaddmsgg = value;
        },
        changeaddname(state,value){
            state.adobjname = value;
        },
        changeaddphone(state,value){
            state.adobjphone = value;
        },
        changeaddtlphone(state,value){
            state.adobjtelphone = value;
        },
        changedetailadd(state,value){
            state.adddetail = value;
        },
        explaindetail(state,value){
            state.detailexplain = value;
        }
    }
})
export default store;