<template>
    <div class="weidengludivmax">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>我的</p>
        </div>
        <div class="xiguadiv">
            <img src="../imgs/西瓜.png" alt="">
            <p @click="godenglu">请登录</p>
        </div>
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
    this.$store.commit("changetn", "我的优惠");
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
.xiguadiv {
  width: 50%;
  padding: 25%;
  /* border: 1px solid black; */
  text-align: center;
}
.xiguadiv > img {
  width: 80%;
}
.xiguadiv > p {
  font-size: 0.2rem;
  height: 50px;
  background-color: rgb(231, 96, 42);
  color: white;
  border-radius: 10px;
  line-height: 50px;
  padding: 2%;
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

