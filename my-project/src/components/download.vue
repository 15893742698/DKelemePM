<template>
    <div class="dwmaxdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <el-collapse-transition>
        <div class="qiezidiv">
            <img src="../imgs/饿了么选中.png" alt="">
            <p>下载饿了么APP</p>
            <button>下载</button>
        </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "dweleme",
  data() {
    return {
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "下载");
    let loadingInstance1 = Loading.service({ fullscreen: true });
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
<style scoped>
.dwmaxdiv {
  width: 100%;
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
.qiezidiv {
  width: 90%;
  padding: 5%;
  text-align: center;
}
.qiezidiv > img {
  width: 80%;
}
.qiezidiv > p {
  font-size: 0.16rem;
  padding: 3%;
}
.qiezidiv > button {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgba(28, 182, 8, 0.548);
  color: white;
  border-radius: 10px;
  line-height: 0.3rem;
  padding: 2%;
  width: 96%;
}
</style>

