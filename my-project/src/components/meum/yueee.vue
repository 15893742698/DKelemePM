<template>
    <div class="xiaoyue">
            <span id="yueee">{{balance}}</span>
            <span>元</span>
            <p>我的余额</p>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "yue",
  data() {
    return {
      balance: ""
    };
  },
  created() {
    this.$store.commit("changetn", "我的余额");
    if (!this.$store.state.denglu) {
      this.balance = 0.0;
    } else {
      this.balance = this.$store.state.usermsg.balance;
    }
  }
};
</script>
<style>
#yueee {
  font-size: 0.35rem;
  color: orangered;
  font-weight: bold;
}
.xiaoyue {
  border-right: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15% 0;
}
.xiaoyue > p,
.xiaoyue > span {
  color: gray;
  font-size: 0.15rem;
}
.xiaoyue > p {
  width: 100%;
  text-align: center;
}
</style>

