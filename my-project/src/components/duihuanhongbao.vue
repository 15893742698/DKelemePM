<template>
    <div class="duihuanhbmax">
        <Headd></Headd>
        <div class="duihuandiv">
            <input type="text" placeholder="请输入兑换码" v-model="duihuanma">
            <div class="dhhbyanzhengma">
                <input type="text" placeholder="验证码" v-model="yanzhengmaa">
                <img :src="srcc" alt="">
                <div>
                    <p>看不清</p>
                    <p @click="huanyanzhengma" class="niniubi">换一张</p>
                </div>
            </div>
        </div>
        <button class="huanba" @click="diaodiaodiao">兑换红包</button>
        <el-collapse-transition>
        <div class="querenduihuan" v-show="duihuan"> 
          <img src="../imgs/感叹.png" alt="">
          <p>{{failmsg}}</p>
          <div>
            <button class="wait" @click="wait">确定</button>
          </div>
        </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "duihuanhb",
  data() {
    return {
      duihuanma: "",
      yanzhengmaa: "",
      srcc: "",
      failmsg: "",
      duihuan: false,
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "兑换红包");
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
      loadingInstance1.close();
      this.loading = false;
      this.srcc = data.data.code;
    });
  },
  components: {
    Headd
  },
  methods: {
    huanyanzhengma() {
      let url = "https://elm.cangdu.org/v1/captchas";
      this.$http({
        method: "post",
        url: url,
        //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
        //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
        withCredentials: true
        // 默认false
      }).then(data => {
        this.srcc = data.data.code;
      });
    },
    diaodiaodiao() {
      this.duihuan = true;
      let url =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.usermsg.user_id +
        "/hongbao/exchange";
      this.$http({
        method: "post",
        url: url,
        withCredentials: true,
        data: {
          exchange_code: this.duihuanma,
          captcha_code: this.yanzhengmaa
        }
      }).then(res => {
        this.failmsg = res.data.message;
      });
    },
    wait() {
      this.$router.push({ name: "duihuanhongbao" });
      this.duihuan = false;
    }
  }
};
</script>
<style>
.duihuanhbmax {
  width: 100%;
}
.duihuandiv {
  width: 100%;
  background-color: #eaeaea;
}
input {
  border-radius: 10px;
  height: 40px;
}
.duihuandiv > input {
  width: 94%;
  font-size: 0.16rem;
  margin: 3%;
}
.dhhbyanzhengma {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dhhbyanzhengma > input {
  width: 50%;
}
.dhhbyanzhengma > img {
  width: 20%;
  vertical-align: bottom;
}
.niniubi {
  color: blue;
}
.huanba {
  width: 90%;
  margin: 5%;
  color: white;
  background-color: rgba(233, 216, 119, 0.883);
  border-radius: 10px;
  height: 0.5rem;
  line-height: 0.5rem;
  font-size: 0.16rem;
}
.querenduihuan {
  position: fixed;
  width: 100%;
  background-color: #eaeaea;
  z-index: 3;
  top: 30%;
  text-align: center;
}
.querenduihuan > img {
  width: 20%;
  padding: 3%;
}
.querenduihuan p {
  font-size: 0.2rem;
  font-weight: bold;
  padding: 3%;
}
.wait {
  width: 50%;
  height: 0.5rem;
  line-height: 50px;
  font-size: 0.3rem;
  margin: 3%;
  color: white;
  background-color: rgb(238, 184, 84);
  border-radius: 10px;
}
</style>

