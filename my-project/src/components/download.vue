<template>
    <div class="dwmaxdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="qiezidiv">
            <img src="../imgs/饿了么选中.png" alt="">
            <p>下载饿了么APP</p>
            <button>下载</button>
        </div>
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
.qiezidiv {
  width: 90%;
  padding: 5%;
  text-align: center;
  /* position: fixed; */
  /* top: 25%; */
  /* background-color: rgb(192, 251, 192); */
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
  height: 50px;
  background-color: rgba(28, 182, 8, 0.548);
  color: white;
  border-radius: 10px;
  line-height: 30px;
  padding: 2%;
  width: 96%;
}
</style>

