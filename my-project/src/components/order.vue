<template>
    <div class="orderdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <Botfix></Botfix>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
import Botfix from "./bot";
export default {
  name: "order",
  data() {
    return {
      name: "我是"
    };
  },
  created() {
    this.$store.commit("changetn", "我的订单");
    var botchoice = {
      waimai: false,
      sousuo: false,
      dingdan: true,
      mine: false
    };
    this.$store.commit("changebotchoice", botchoice);
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url = "https://elm.cangdu.org/bos/orders?offset=0&limit=5";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
      console.log(res);
    });
    loadingInstance1.close();
    this.loading = false;
  },
  methods: {
    returnuup() {
      this.$router.go(-1);
    }
  },
  components: {
    Botfix
  }
};
</script>
<style>
.orderdiv {
  width: 100%;
}
.hello {
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

