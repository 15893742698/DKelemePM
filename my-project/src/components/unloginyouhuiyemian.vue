<template>
    <div class="weidengludivmax">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <el-collapse-transition>
        <div class="pingguodiv">
            <img src="../imgs/西瓜.png" alt="">
            <p @click="godenglu">请登录</p>
        </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "unloginyouhuiyemian",
  data() {
    return {
      loading: true
    };
  },
  components: {
    Headd
  },
  created() {
    // this.$store.commit("changetn", "我的优惠");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  },
  methods: {
    godenglu() {
      this.$router.push({ name: "unlogin" });
    },
    returnuup() {
      this.$router.push({ name: "home1" });
    }
  }
};
</script>
<style>
.weidengludivmax {
  width: 100%;
}
.pingguodiv {
  width: 50%;
  padding: 25%;
  /* border: 1px solid black; */
  text-align: center;
}
.pingguodiv > img {
  width: 80%;
}
.pingguodiv > p {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgb(231, 96, 42);
  color: white;
  border-radius: 10px;
  line-height: 0.5rem;
  padding: 2%;
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
  width: 58%;
  text-align: start;
}
.hello > a {
  color: black;
}
</style>

