<template>
    <div class="jifen">
        <Headd></Headd>
        <Sanjianke :dangqian="dangqian" :explain="explain" :srcc="srcc" :shuzi="shuzi" :danwei="danwei" :tijiao="tijiao" :mingxi="mingxi" :nothing="nothing" :todo="todo" :bc="bc"></Sanjianke>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
import Sanjianke from "../components/content/jifen";
export default {
  name: "yue",
  data() {
    return {
      dangqian: "当前积分",
      explain: "积分说明",
      srcc: "../imgs/问号.png",
      shuzi: 0,
      danwei: "分",
      tijiao: "积分兑换商品",
      mingxi: "最近30天积分记录",
      nothing: "最近30天无积分记录",
      todo: "快去下单赚取大量积分吧",
      bc: "orangered",
      loading: true
    };
  },
  components: {
    Headd,
    Sanjianke
  },
  created() {
    if (!this.$store.state.denglu) {
      this.shuzi = 0.0;
    } else {
      this.shuzi = this.$store.state.usermsg.point;
    }
    this.$store.commit("changetn", "我的积分");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    this.dangqian = "当前积分";
    this.explain = "积分说明";
    this.srcc = "../imgs/问号.png";
    this.danwei = "分";
    this.tijiao = "积分兑换商品";
    this.mingxi = "最近30天积分记录";
    this.nothing = "最近30天无积分记录";
    this.todo = "快去下单赚取大量积分吧";
    (this.bc = "orangered"), this.$store.commit("explaindetail", 4);
    loadingInstance1.close();
    this.loading = false;
  }
};
</script>
<style scoped>
.hello {
  width: 95%;
  border-bottom: 1px solid white;
  position: absolute;
  top: 0;
}
.yue {
  padding-bottom: 1%;
  position: relative;
  padding-top: 50px;
}
#max {
  padding-top: 13%;
}
#tijiaobtn {
  background-color: orangered;
}
</style>

