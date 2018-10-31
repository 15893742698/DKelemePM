<template>
<div>
<div class="warp">
    <router-link :key="index" v-for="(k,index) in img" :to="k.ad">
        <div @click="btn(index)" class='search'>
        <img v-show="k.ifs" class='img2' :src="k.im">
        <img v-show="!k.ifs" class='img2' :src="k.im1">
        {{k.na}}
     </div>
    </router-link>
</div>
<router-view></router-view>
</div>
</template>

<script>
export default {
  data() {
    return {
      img: [
        {
          na: "外卖",
          ad: "/waimai",
          im: require("../components/img/饿了么.png"),
          im1: require("../components/img/饿了么1.png"),
          ifs: true
        },
        {
          na: "搜索",
          ad: "/search",
          im: require("../components/img/指南针.png"),
          im1: require("../components/img/指南针1.png"),
          ifs: true
        },
        {
          na: "订单",
          ad: "/order",
          im: require("../components/img/订单.png"),
          im1: require("../components/img/订单1.png"),
          ifs: true
        },
        {
          na: "我的",
          ad: "/home",
          im: require("../components/img/我的.png"),
          im1: require("../components/img/我的1.png"),
          ifs: true
        }
      ]
    };
  },
  methods: {
    btn(index) {
      var ss = this.img.map(function(n) {
        return (n.ifs = true);
      });
      this.img[index].ifs = false;
      // console.log(index)
    }
  }
};
</script>

<style>
body {
  background-color: #f5f5f5;
}
.warp {
  width: 100%;
  padding: 0.1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
}
.search {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
}
.img2 {
  width: 0.3rem;
  margin-bottom: 0.02rem;
}
</style>