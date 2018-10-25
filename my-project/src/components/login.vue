<template>
    <div class="msgmax">
        <Headd></Headd>
        <!-- xinxidiv -->
        <div class="xinxidiv">
            <div class="touxiangdiv">
                <p class="zuobian">头像</p>
                <div>
                    <img :src="this.srcc" alt="" class="touxiang">
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            <div class="xiaomsgdiv" id="usernamediv">
                <p class="zuobian">用户名</p>
                <div>
                    <p>{{this.username}}</p>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            <div class="xiaomsgdiv" id="adddiv">
                <p class="zuobian">收货地址</p>
                <div>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            <p class="xinxip">
                <span>账号绑定</span>
            </p>
            <div id="xiaomsgdiv">
                <div>
                    <img src="../imgs/手机.png" alt="" class="xinxiphone">
                    <p class="zuobian">手机</p>
                </div>
                <div class="xiaoxiaomsg">
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            <p class="xinxip">
                <span>安全设置</span>
            </p>
            <div class="xiaomsgdiv">
                <p class="zuobian">登录密码</p>
                <div>
                    <p>修改</p>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
        </div>
        <div class="tuichudiv">
            <button>退出登录</button>
        </div>
    </div>
</template>
<script>
    import Headd from '../components/element/head';
    export default {
        name:"login",
        components:{
            Headd
        },
        data(){
            return {
                name:"账户信息",
                srcc:"",
                username:""
            }
        },
        created() {
            this.$store.commit("changetn","账户信息")
            this.srcc="https://elm.cangdu.org/img/"+this.$store.state.usermsg.avatar;
            this.username = this.$store.state.usermsg.username
            // console.log(this.$store.state.defaultmsg.srcc)
            // this.srcc=this.$store.state.defaultmsg.srcc
        },
    }
</script>
<style scoped>
.msgmax{
    width: 100%;
}
.xinxidiv{
    width: 100%;
    border-top: 10px solid #eaeaea;
    border-bottom: 1px solid gray;
}
.touxiangdiv{
    width: 94%;
    padding: 3%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    /* border-bottom: 1px solid gray; */
}
.touxiang{
    width: 20%;
    border-radius: 50%;
}
.touxiangdiv>div>.qianjin{
    width: 8%;
    margin-bottom: 5%;
}
.qianjin{
    width: 10%;
    vertical-align: bottom;
}
.touxiangdiv>div{
    width: 60%;
    text-align: end;
}
.xiaomsgdiv{
    width: 94%;
    padding: 4% 3% 4% 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    /* border-bottom: 1px solid gray; */
}
#usernamediv{
    border-bottom: none;
}
#adddiv{
    border-top: 0.1px solid gray;
}
#xiaomsgdiv{
    width: 94%;
    padding: 4% 3% 4% 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    /* border-bottom: 1px solid #eaeaea; */
}
.xiaoxiaomsg{
    text-align: end
}
.xiaomsgdiv>div{
    text-align: end;
    width: 50%;
}
.xinxip{
    width: 94%;
    padding: 4% 3% 4% 3%;
    font-size: 0.16rem;
    background-color: #eaeaea;
}
.xinxiphone{
    width: 10%;
    vertical-align: bottom;
}
.zuobian{
    display: inline-block;
    font-size: 0.2rem;
}
.xiaomsgdiv>div>p{
    font-size: 0.16rem;
    display: inline-block;
    margin-bottom: 2%;
}
.tuichudiv{
    width: 90%;
    padding: 5%;
}
.tuichudiv>button{
    width: 100%;
    font-size: 0.2rem;
    height: 50px;
    border-radius: 10px;
    background-color: red;
    color:white;
}
</style>

