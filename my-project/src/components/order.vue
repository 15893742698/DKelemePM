<template>
    <div class="orderdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "order",
  data() {
    return {
      name: "我是"
    };
  },
  created() {
    this.$store.commit("changetn", "我的订单");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url = "https://elm.cangdu.org/bos/orders?offset=0&limit=5";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
      // console.log(res);
    });
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
.orderdiv {
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

