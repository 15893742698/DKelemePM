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
      <Botfix></Botfix>
  </div>
</template>
<script>
import { Loading } from "element-ui";
import Login from "./element/login";
import Meum from "./element/meum";
import Ccontent from "./element/ccontent";
import Bot from "./element/bot";
import Botfix from "./bot";
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
    Bot,
    Botfix
  },
  created() {
    let loadingInstance1 = Loading.service({ fullscreen: true });
    var botchoice = {
      waimai: false,
      sousuo: false,
      dingdan: false,
      mine: true
    };
    this.$store.commit("changebotchoice", botchoice);
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
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hello img {
  width: 10%;
  vertical-align: top;
  margin-top: 0%;
}
.hello p {
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  width: 55%;
  text-align: start;
}
.hello > a {
  color: black;
}
</style>
