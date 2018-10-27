<template>
    <div class="yue">
        <Headd></Headd>
        <Sanjianke :dangqian="dangqian" :explain="explain" :srcc="srcc" :shuzi="shuzi" :danwei="danwei" :tijiao="tijiao" :mingxi="mingxi" :nothing="nothing" :todo="todo"></Sanjianke>
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
      name: "",
      dangqian: "",
      explain: "",
      srcc: "",
      shuzi: "",
      danwei: "",
      tijiao: "",
      mingxi: "",
      nothing: "",
      todo: "",
      bc: "",
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
      this.shuzi = this.$store.state.usermsg.balance;
    }
    this.$store.commit("changetn", "我的余额");
    this.$store.commit("explaindetail", 1);
    let loadingInstance1 = Loading.service({ fullscreen: true });
    this.dangqian = "当前余额";
    this.explain = "余额说明";
    this.srcc = "../../imgs/问号.png";
    this.danwei = "元";
    this.tijiao = "提现";
    this.mingxi = "交易明细";
    this.nothing = "暂无明细记录";
    this.todo = "";
    this.bc = "";
    loadingInstance1.close();
    this.loading = false;
  }
};
</script>
<style scoped>
.hello {
  width: 100%;
  border-bottom: 1px solid white;
  position: absolute;
  top: 0;
}
.yue {
  padding-bottom: 1%;
  position: relative;
  padding-top: 50px;
}
</style>
