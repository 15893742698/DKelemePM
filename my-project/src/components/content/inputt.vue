<template>
    <div class="inputt">
        <div>
            <div class="account">
                <input type="text" placeholder="账号" id="logname" v-model="username">
            </div>
            <div class="passw">
                <input v-if="see" type="password" :class="{cansee:see}" v-model="password" placeholder="密码">
                <input v-else type="text" :class="{cansee:!see}" v-model="password" placeholder="密码">
                <img v-if="see" src="../../imgs/密码不可见.png" alt="" @click="see=!see">
                <img v-else src="../../imgs/密码可见.png" alt="" @click="see=!see">
            </div>
            <div class="vercode">
                <input type="text" placeholder="验证码" id="yanzhengma" v-model="yanzhengma">
                <img :src="src" alt="">
                <div @click="changevercode">
                    <p>看不清</p>
                    <span>换一张</span>
                </div>
            </div>
            <div>
                <p class="tips">温馨提示:未注册过的账号,登录时将自动注册</p>
                <p class="tips">注册过的用户可凭账号密码登录</p>
            </div>
            <button class="btndenglu" @click="login()">登录</button>
            <div id="resetpassword">
                <router-link to="/resetpassword">重置密码?</router-link>
            </div>
        </div>
        <img :src="'https://elm.cangdu.org/img/'+srcc" alt="">
    </div>    
</template>
<script>
import { Loading } from "element-ui";
import tankuang from "../tankuang";
// import Home from '../home'
export default {
  name: "inputt",
  data() {
    return {
      see: true,
      src: "",
      username: "",
      password: "",
      yanzhengma: "",
      mm: "密码错误",
      srcc: ""
    };
  },
  components: {
    tankuang
  },
  created() {
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url = "https://elm.cangdu.org/v1/captchas";
    this.$http({
      method: "post",
      url: url,
      //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
      //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
      withCredentials: true
      // 默认false
    }).then(data => {
      this.src = data.data.code;
      loadingInstance1.close();
      this.loading = false;
    });
  },
  methods: {
    //验证码
    changevercode() {
      let loadingInstance1 = Loading.service({ fullscreen: true });
      let url = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        method: "post",
        url: url,
        //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
        withCredentials: true
        // 默认false
      }).then(data => {
        this.src = data.data.code;
        loadingInstance1.close();
        this.loading = false;
      });
    },
    //登录
    login() {
      let url = "https://elm.cangdu.org/v2/login/";
      this.$http({
        method: "post",
        url: url,
        //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
        withCredentials: true,
        // 默认false
        data: {
          username: this.username,
          password: this.password,
          captcha_code: this.yanzhengma
        }
      }).then(res => {
        if (res.data.message) {
          this.$store.state.falsemsg = res.data.message;
        } else {
          this.$store.state.usermsg = res.data;
          // console.log(res);
          this.$store.commit("denglu", true);
          this.$router.push({name:"home"})
        }
      });
    }
  }
};
</script>
<style>
.inputt {
  background-color: white;
}
input {
  font-size: 0.16rem;
  width: 80%;
  height: 50px;
}
.account > input {
  margin-left: 5%;
}
.passw {
  display: flex;
  justify-content: center;
  align-items: center;
}
.account,
.passw {
  border: 1px solid #eaeaea;
  padding: 2%;
}
.passw > img {
  width: 10%;
  vertical-align: top;
}
.vercode {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.16rem;
  padding: 2%;
}
.vercode > input {
  width: 40%;
}
.vercode span {
  color: blue;
}
.vercode + div {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2%;
  flex-wrap: wrap;
  background-color: #eaeaea;
}
.tips {
  font-size: 0.1rem;
  color: red;
  padding: 2% 2% 2% 5%;
}
.btndenglu {
  width: 90%;
  border-radius: 10px;
  background-color: rgba(28, 182, 8, 0.548);
  font-size: 0.18rem;
  margin-left: 5%;
  color: white;
  height: 50px;
  margin-top: 2%;
}
#resetpassword {
  float: right;
  margin-right: 5%;
  margin-top: 5%;
}
#resetpassword > a {
  font-size: 0.15rem;
  color: blue;
}
.tankuang {
  border: 3px solid black;
}
</style>

