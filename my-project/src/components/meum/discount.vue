<template>
    <div class="discount">
            <span id="dcount">{{gift_amount}}</span>
            <span>个</span>
            <p>我的优惠</p>
    </div>
</template>
<script>
export default {
  name: "discount",
  data() {
    return {
      gift_amount: ""
    };
  },
  created() {
    if (!this.$store.state.denglu) {
      this.gift_amount = 0;
    } else {
      this.gift_amount = this.$store.state.usermsg.gift_amount;
    }
  }
};
</script>
<style>
#dcount {
  font-size: 0.35rem;
  color: red;
  font-weight: bold;
}
.discount {
  border-right: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 15% 0;
}
.discount > p,
.discount > span {
  color: gray;
  font-size: 0.15rem;
}
.discount > p {
  width: 100%;
  text-align: center;
}
</style>

