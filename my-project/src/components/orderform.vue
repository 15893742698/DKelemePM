<template>
    <div>
        <div class="or-one">
            <p><span @click="tiao"> &lt; </span>订单列表 <span>登录|注册</span></p>
        </div>
        <div class="or-two">
            <p><img src="./img/wxb定位.png" alt="">请添加一个收货地址<span> &gt; </span></p>
        </div>
        <div class="or-therr">
            <div class="div1">送达时间</div>
            <div class="div2">
                <p>尽快送达|预计02:14</p>
                <span>蜂鸟专送</span>
            </div>
        </div>
        <div class="or-four">
            <p class="or-p1">支付方式<span>在线支付&gt;</span></p>
            <p class="or-p2">红包<span>暂时只在饿了么APP中支持</span></p>
        </div>
        <div class="or-five">
            <p><img src="./img/6.png" alt="">两万五v</p>
        </div>
        <div class="or-six">
            <p>shuiguo <span>￥20</span><span style="float: right; margin-right: .2rem; color:  orangered">x 1</span></p>
            <p>餐盒 <span>￥26605</span></p>
            <p>配送费<span>￥4</span></p>
            <p>订单 ￥26605 <span style="color:  orangered">待支付</span></p>
            <span style="color:  orangered">￥26629</span>
        </div>
        <div class="or-bottom">
            <span>待支付 ￥26629</span>
            <span>确认下单</span>
        </div>
    </div>
</template>

<script>
export default {
  methods: {
    tiao() {
      this.$router.go(-1);
    }
  },
  created(){
      this.$store.commit("tianjiadizi",true)
  }
};
</script>

<style scoped>
body {
  background: #333;
}
.or-one {
  height: 0.5rem;
  font-size: 0.2rem;
  background: #3190e8;
  color: white;
  text-align: center;
  line-height: 0.5rem;
}
.or-one > p {
  font-weight: bold;
}
.or-one > p span:first-child {
  font-size: 0.3rem;
  float: left;
}
.or-one > p span:nth-child(2) {
  font-size: 0.15rem;
  float: right;
}
.or-two {
  /* border: 1px solid red; */
  padding: 0.2rem 0;
  border-bottom: 2px dashed;
  /* border-color:  blue pink; */
}
.or-two > p {
  font-size: 0.17rem;
}
.or-two > p > img {
  width: 0.2rem;
  height: 0.2rem;
}
.or-two > p > span {
  font-size: 0.3rem;
  float: right;
}
.or-therr {
  /* border:1px solid red; */
  display: flex;
  justify-content: space-around;
}
.div1 {
  text-align: center;
  padding: 0.3rem 0;
  font-weight: bold;
  font-size: 0.15rem;
}
.div2 > p {
  font-weight: 550;
  font-size: 0.15rem;
  color: #3190e8;
  padding-top: 0.25rem;
  padding-bottom: 0.05rem;
}
.div2 > span {
  background: #3190e8;
  float: right;
  padding: 0.03rem;
  color: white;
}
.or-p1 {
  font-size: 0.15rem;
  border-bottom: 1px solid black;
  padding: 0.2rem 0;
}
.or-p1 > span {
  float: right;
  color: rgb(161, 158, 158);
}
.or-p2 {
  font-size: 0.1rem;
  padding: 0.2rem 0;
  color: rgb(161, 158, 158);
}
.or-p2 > span {
  float: right;
}
.or-five > p {
  font-size: 0.17rem;
  padding: 0.2rem 0;
}
.or-five > p > img {
  width: 0.3rem;
  height: 0.3rem;
  vertical-align: middle;
}
.or-six p {
  padding: 0.16rem 0;
}
.or-six > p span:first-child {
  float: right;
}
.or-six > p:nth-child(3) {
  border-bottom: 1px solid rgb(161, 158, 158);
}
.or-six > span:nth-child(5) {
  float: right;
  padding-top: 0.1rem;
}
.or-bottom {
  width: 100%;
  height: 0.6rem;
  position: fixed;
  background: #000000;
  bottom: 0.02rem;
}
.or-bottom > span:nth-child(1) {
  color: white;
  font-size: 0.2rem;
  line-height: 0.6rem;
}
.or-bottom > span:nth-child(2) {
  color: white;
  float: right;
  font-size: 0.2rem;
  line-height: 0.6rem;
  background: rgb(52, 185, 52);
  padding: 0 0.04rem;
}
</style>