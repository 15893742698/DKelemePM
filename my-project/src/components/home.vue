<template>
  <div class="home">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>我的</p>
        </div>
      <router-link :to="this.router">
        <Login></Login>
      </router-link>
      <Meum></Meum>
      <Ccontent></Ccontent>
      <Bot></Bot>
  </div>
</template>
<script>
import { Loading } from "element-ui";
import Login from "./element/login";
import Meum from "./element/meum";
import Ccontent from "./element/ccontent";
import Bot from "./element/bot";
import Cut from "./cut";
export default {
  name: "",
  data() {
    return {
      name: "我的",
      router: "",
      loading: true
    };
  },
  components: {
    Login,
    Meum,
    Ccontent,
    Bot
  },
  created() {
    let loadingInstance1 = Loading.service({ fullscreen: true });
    if (!this.$store.state.denglu) {
      this.router = this.$store.state.unlogin.login;
    } else {
      this.router = this.$store.state.login.login;
    }
    loadingInstance1.close();
    this.loading = false;
  },
  methods: {
    returnuup() {
      this.$router.go(-1);
    }
  }
};
</script>
<style>
.hello {
  width: 95%;
}
.home > a {
  width: 95%;
}
.hello {
  width: 95%;
  background-color: #436eee;
  height: 50px;
  border-bottom: 1px solid #436eee;
  line-height: 50px;
  text-align: center;
  padding-left: 5%;
  overflow: hidden;
}
.hello img {
  float: left;
  width: 10%;
  vertical-align: top;
  margin-top: 1%;
  /* border: 1px solid red; */
}
.hello p {
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
.hello > a {
  color: black;
}
</style>
