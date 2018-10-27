<template>
    <div class="resetmimamax">
        <Headd></Headd>
        <div class="newmimadiv">
            <input type="text" placeholder="账号" v-model="username">
            <input type="text" placeholder="旧密码" v-model="oldpassword">
            <input type="text" placeholder="请输入新密码" v-model="newpassword">
            <input type="text" placeholder="请确认密码" v-model="querennewpw">
        </div>
        <!-- 验证码div -->
        <div class="remmcode">
            <input type="text" placeholder="验证码" v-model="newyanzhengma">
            <div @click="changecodee">
                <img :src="this.srcc" alt="" >
                <div>
                    <span>看不清</span>
                <p>换一张</p>
                </div>
            </div>
        </div>
        <button class="querenxiugai" @click="chongzhimima">确认修改</button>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "resetpassword",
  components: {
    Headd
  },
  data() {
    return {
      srcc: "",
      username: "",
      oldpassword: "",
      newpassword: "",
      querennewpw: "",
      newyanzhengma: "",
      tanchuang: "",
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "重置密码");
    let url = "https://elm.cangdu.org/v1/captchas";
    let loadingInstance1 = Loading.service({ fullscreen: true });
    this.$http({
      method: "post",
      url: url,
      //https://developer.mozilla.org/zh-CN/docs/Web/API/Request/credentials
      //用于表示用户代理是否应该在跨域请求的情况下从其他域发送cookies。
      withCredentials: true
      // 默认false
    }).then(data => {
      console.log(data);
      loadingInstance1.close();
      this.loading = false;
      this.srcc = data.data.code;
    });
  },
  methods: {
    changecodee() {
      this.loading = true;
      let loadingInstance1 = Loading.service({ fullscreen: true });
      this.$store.commit("changetn", "重置密码");
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
    chongzhimima() {
      this.loading = true;
      let url = "https://elm.cangdu.org/v2/changepassword";
      let loadingInstance1 = Loading.service({ fullscreen: true });
      this.$http({
        method: "post",
        url: url,
        withCredentials: true,
        data: {
          username: this.username,
          oldpassWord: this.oldpassword,
          newpassword: this.newpassword,
          confirmpassword: this.querennewpw,
          captcha_code: this.newyanzhengma
        }
      }).then(data => {
        loadingInstance1.close();
        this.loading = false;
        if (data.data.success) {
          this.tankuang = "密码修改成功";
        } else if (this.oldpassword != this.newpassword) {
          this.tankuang = "两次密码输入不一致";
        } else data.data.message;
      });
    }
  }
};
</script>
<style scoped>
.resetmimamax {
  width: 100%;
}
.hello {
  border-bottom: 10px solid #eaeaea;
}
.newmimadiv {
  width: 100%;
}
.newmimadiv > input {
  width: 94%;
  padding: 3%;
  font-size: 0.16rem;
  border-bottom: 1px solid gray;
  color: black;
}
.remmcode {
  width: 100%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.remmcode > input {
  font-size: 0.16rem;
  width: 35%;
  padding: 3%;
}
.remmcode > div {
  text-align: end;
  width: 50%;
}
.remmcode > div > span {
  padding: 3%;
}
.remmcode > div > div {
  width: 28%;
  display: inline-block;
  padding: 4%;
}
.remmcode > div > div > p {
  width: 80%;
  color: blue;
  padding: 3%;
  display: inline-block;
  /* border: 1px solid blue; */
}
.remmcode > div > div > img {
  width: 40%;
  height: 100%;
  vertical-align: bottom;
}
.querenxiugai {
  width: 94%;
  margin: 3%;
  height: 50px;
  font-size: 0.16rem;
  color: white;
  background-color: rgb(8, 187, 8);
  border-radius: 10px;
}
</style>

