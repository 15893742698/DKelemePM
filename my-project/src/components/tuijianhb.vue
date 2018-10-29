<template>
    <div class="tuijianmaxdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="tuijianpic">
          <img src="../imgs/推荐有奖.png" alt="">
          <ul class="erweima">
            <li @click="yaoqing">
              <img src="../imgs/微信.png" alt="" >
              <p>邀请微信好友</p>
            </li >
            <li @click="yaoqing">
              <img src="../imgs/QQ.png" alt="" >
              <p>邀请QQ好友</p>
            </li>
            <li @click="yaoqing">
              <img src="../imgs/二维码.png" alt="" >
              <p>面对面邀请</p>
            </li>
          </ul>
        </div>
        <div class="shouyi">
          <div id="shouyi">
            <p>累计收益</p>
            <span class="hongsermb">0</span>
            <span>元</span>
          </div>
          <div>
            <p>成功邀请</p>
            <span class="huiseren">0</span>
            <span>人</span>
          </div>
          <p>-收益明细-</p>
          <img src="../imgs/红包.png" alt="">
          <p>还不赶紧去邀请好友</p>
        </div>
        <div class="xiguadiv" v-if="xiguagua">
            <img src="../imgs/感叹.png" alt="">
            <p>请在饿了么APP中打开</p>
            <button @click="godenglu">确认</button>
        </div>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "tuijianhb",
  data() {
    return {
      fun: "",
      loading: true,
      xiguagua:false
    };
  },
  created() {
    this.$store.commit("changetn", "推荐有奖");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  },
  components: {
    Headd
  },
  methods: {
    yaoqing() {
      this.xiguagua=true
    },
    godenglu(){
      this.xiguagua = false;
    },
    returnuup(){
      this.$router.push({name:"discount"})
    }
  }
};
</script>
<style>
.tuijianmaxdiv {
  width: 100%;
  text-align: center;
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
.xiguadiv {
  width: 90%;
  padding: 5%;
  text-align: center;
  z-index: 3;
  position: fixed;
  top: 25%;
  background-color: rgb(192, 251, 192);
}
.xiguadiv > img {
  width: 30%;
}
.xiguadiv>p{
  font-size: 0.16rem;
  padding: 3%;
}
.xiguadiv > button {
  font-size: 0.2rem;
  height: 50px;
  background-color: rgb(39, 175, 39);
  color: white;
  border-radius: 10px;
  line-height: 50px;
  padding: 2%;
  width: 96%;
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
.tuijianpic {
  width: 100%;
}
.tuijianpic > img {
  width: 100%;
}
.erweima {
  width: 90%;
  padding: 4.5%;
  /* padding: 5%; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* border: 1px solid red; */
  border: 1px solid gray;
}
.erweima > li {
  text-align: center;
}
.erweima > li > img {
  width: 80%;
  /* border:1px solid black; */
  padding: 3%;
}
.erweima > li > p {
  width: 94%;
  text-align: center;
  font-size: 0.16rem;
  padding: 3%;
}
.shouyi {
  width: 90%;
  padding: 5%;
  background-color: #eaeaea;
}
.shouyi > div {
  width: 48%;
  display: inline-block;
  margin: 0;
}
#shouyi {
  border-right: 1px solid black;
}
.shouyi > div > p {
  font-size: 0.12rem;
  margin: 2%;
}
.hongsermb {
  color: red;
  font-size: 0.16rem;
  font-weight: bold;
}
.huiseren {
  font-size: 0.16rem;
  font-weight: bold;
}
.shouyi > p {
  padding: 4%;
}
.shouyi > img {
  width: 20%;
}
</style>

