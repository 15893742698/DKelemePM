<template>
    <div class="yue">
            <span id="yueee">0.00</span>
            <span>元</span>
            <p>我的余额</p>
    </div>
</template>
<script>
export default {
  name: "yue",
  created() {
      this.$store.commit("changetn","我的余额")
  },
};
</script>
<style>
#yueee{
    font-size: 0.35rem;
    color: orangered;
    font-weight: bold;
}
.yue{
    border-right: 1px solid #EAEAEA;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 15% 0;
}
.yue>p,.yue>span{
    color:gray;
    font-size: 0.15rem;
}
</style>

