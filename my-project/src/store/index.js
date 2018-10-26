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
    falsemsg:"",
    unlogin:{
        login:"/unlogin"
    },
    login:{
        login:"/login"
    },
    bianjiadd:true
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
        }
    }
})
export default store;