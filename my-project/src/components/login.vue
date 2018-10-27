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
           <router-link to="/resetusername">
            <div class="xiaomsgdiv" id="usernamediv">
                <p class="zuobian">用户名</p>
                <div>
                    <p>{{this.username}}</p>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
           </router-link>
           <router-link to="/resetadd">
                 <div class="xiaomsgdiv" id="adddiv">
                <p class="zuobian">收货地址</p>
                <div>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
           </router-link>
            <p class="xinxip">
                <span>账号绑定</span>
            </p>
            <router-link to="/resetphone">
                <div id="xiaomsgdiv">
                <div>
                    <img src="../imgs/手机.png" alt="" class="xinxiphone">
                    <p class="zuobian">手机</p>
                </div>
                <div class="xiaoxiaomsg">
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            </router-link>
            <p class="xinxip">
                <span>安全设置</span>
            </p>
            <router-link to="/resetpassword">
                <div class="xiaomsgdiv">
                <p class="zuobian">登录密码</p>
                <div>
                    <p>修改</p>
                    <img src="../imgs/前进.png" alt="" class="qianjin">
                </div>
            </div>
            </router-link>
        </div>
        <div class="tuichudiv">
            <button @click="tuichubtn">退出登录</button>
        </div>
        <div class="tuichutank" v-show="chuxianma"> 
          <img src="../imgs/感叹.png" alt="">
          <p>是否退出登录</p>
          <div>
            <button class="wait" @click="wait">再等等</button>
            <button class="henxin" @click="henxin">狠心退出</button>
          </div>
        </div>
    </div>
</template>
<script>
import Headd from "../components/element/head";
export default {
  name: "login",
  components: {
    Headd
  },
  data() {
    return {
      name: "账户信息",
      srcc: "",
      username: "",
      chuxianma: false
    };
  },
  created() {
    this.$store.commit("changetn", "账户信息");
    this.srcc =
      "https://elm.cangdu.org/img/" + this.$store.state.usermsg.avatar;
    this.username = this.$store.state.usermsg.username;
    // console.log(this.$store.state.defaultmsg.srcc)
    // this.srcc=this.$store.state.defaultmsg.srcc
  },
  methods: {
    tuichubtn() {
      this.chuxianma = true;
    },
    wait() {
      this.chuxianma = false;
      this.$router.push({name:"login"})
    },
    henxin() {
      this.chuxianma=false;
      let url = "https://elm.cangdu.org/v2/signout";
      this.$http({
        method: "get",
        url: url,
        withCredentials: true
      }).then(data => {
        console.log("退出");
        var adaddmsgg = { name: "" };
        this.$store.commit("changetn", "");
        this.$store.commit("denglu", "");
        this.$store.commit("changeadd", "");
        this.$store.commit("changeaddmsg", "");
        this.$store.commit("changeaddname", "");
        this.$store.commit("changeaddphone", "");
        this.$store.commit("changeaddtlphone", "");
        this.$store.commit("changedetailadd", "");
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>
<style scoped>
.msgmax {
  width: 100%;
}
.xinxidiv {
  width: 100%;
  border-top: 10px solid #eaeaea;
  border-bottom: 1px solid gray;
}
.touxiangdiv {
  width: 94%;
  padding: 3%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;
  /* border-bottom: 1px solid gray; */
}
.touxiang {
  width: 20%;
  border-radius: 50%;
}
.touxiangdiv > div > .qianjin {
  width: 8%;
  margin-bottom: 5%;
}
.qianjin {
  width: 10%;
  vertical-align: bottom;
}
.touxiangdiv > div {
  width: 60%;
  text-align: end;
}
.xiaomsgdiv {
  width: 94%;
  padding: 4% 3% 4% 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;
  /* border-bottom: 1px solid gray; */
}
#usernamediv {
  border-bottom: none;
}
#adddiv {
  border-top: 0.1px solid gray;
}
#xiaomsgdiv {
  width: 94%;
  padding: 4% 3% 4% 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid gray;
  /* border-bottom: 1px solid #eaeaea; */
}
.xiaoxiaomsg {
  text-align: end;
}
.xiaomsgdiv > div {
  text-align: end;
  width: 50%;
}
.xinxip {
  width: 94%;
  padding: 4% 3% 4% 3%;
  font-size: 0.16rem;
  background-color: #eaeaea;
}
.xinxiphone {
  width: 10%;
  vertical-align: bottom;
}
.zuobian {
  display: inline-block;
  font-size: 0.2rem;
}
.xiaomsgdiv > div > p {
  font-size: 0.16rem;
  display: inline-block;
  margin-bottom: 2%;
}
.tuichudiv {
  width: 90%;
  padding: 5%;
}
.tuichudiv > button {
  width: 100%;
  font-size: 0.2rem;
  height: 50px;
  border-radius: 10px;
  background-color: red;
  color: white;
}
.tuichutank {
  position: fixed;
  width: 96%;
  left: 2%;
  top: 25%;
  z-index: 3;
  text-align: center;
  background-color: #eaeaea;
  border-radius: 10px;
}
.tuichutank > img {
  width: 20%;
  padding: 5%;
}
.tuichutank > p {
  font-weight: bold;
  font-size: 0.3rem;
  padding-top: 5%;
  padding-bottom: 8%;
}
.tuichutank > div {
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15%;
}
.wait {
  width: 45%;
  font-size: 0.2rem;
  border-radius: 10px;
  background-color: #eaeaea;
  height: 50px;
}
.henxin {
  width: 45%;
  font-size: 0.2rem;
  border-radius: 10px;
  background-color: rgba(224, 77, 19, 0.938);
  height: 50px;
}
</style>

