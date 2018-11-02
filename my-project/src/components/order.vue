<template>
    <div class="orderdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="ord-one"  v-for="(item, index) in data" :key="index" v-show="jilu"> 
          <div class="ord-two">
            <div> 
            <p>{{item.restaurant_name}}</p>
            <p>{{item.formatted_created_at}}</p>
            </div>
          </div> 
          <div class="ord-three">
            <p>支付成功</p>
            <p style="color: orangered; font-size: .2rem; float:right;">{{item.total_amount}}</p>
            <p @click="zaimai">再来一单</p>
          </div>
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
      name: "我是",
      data: [],
      jilu: false
    };
  },
  created() {
    this.jilu = true;
    var botchoice = {
      waimai: false,
      sousuo: false,
      dingdan: true,
      mine: false
    };
    this.$store.commit("changebotchoice", botchoice);
    this.$store.commit("changetn", "我的订单");
    if (!this.$store.state.denglu) {
      this.jilu = false;
    } else {
      let loadingInstance1 = Loading.service({ fullscreen: true });
      let url = "https://elm.cangdu.org/bos/orders?offset=0&limit=1";
      this.$http({
        method: "get",
        url: url,
        withCredentials: true
      }).then(res => {
        this.data = res.data;
      });
      loadingInstance1.close();
      this.loading = false;
    }
  },
  methods: {
    returnuup() {
      this.$router.go(-1);
    },
    zaimai() {
      this.$router.push({ name: "waimai" });
    }
  },
  components: {
    Botfix
  }
};
</script>
<style>
.ord-one {
  display: flex;
  padding: 0.2rem 0.04rem;
  justify-content: space-between;
  border: 1px solid black;
}
.ord-two {
  display: flex;
  justify-content: space-between;
}
.ord-two > img {
  width: 0.4rem;
  height: 0.4rem;
}
.ord-two p {
  font-size: 0.15rem;
  margin-top: 0.16rem;
}
.ord-three p {
  font-size: 0.23rem;
}
.ord-three p:nth-child(3) {
  clear: both;
}
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

