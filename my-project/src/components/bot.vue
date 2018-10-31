<template>
    <div class="botfix">
        <div class="xuanzebtn">
            <router-link to="/waimai">
                <img v-if="$store.state.botchoice.waimai" src="../components/img/饿了么1.png" alt="">
                <img v-else src="../components/img/饿了么.png" alt="">
            <p>外卖</p></router-link>
        </div>
        <div class="xuanzebtn">
            <router-link to="/searchfood">
                <img v-if="$store.state.botchoice.sousuo" src="../components/img/指南针1.png" alt="">
                <img v-else src="../components/img/指南针.png" alt="">
            </router-link>
            <p>搜索</p>
        </div>
        <div class="xuanzebtn">
            <router-link to="/order">
                <img v-if="$store.state.botchoice.dingdan" src="../components/img/订单1.png" alt="">
                <img v-else src="../components/img/订单.png" alt="">
            </router-link>
            <p>订单</p>
        </div>
        <div class="xuanzebtn">
            <router-link to="/home">
                <img v-if="$store.state.botchoice.mine" src="../components/img/我的1.png" alt="">
                <img v-else src="../components/img/我的.png" alt="">
            </router-link>
            <p>我的</p>
        </div>
    </div>
</template>
<script>
export default {
  name: "bot"
};
</script>
<style>
.botfix {
  width: 100%;
  padding: 0.1rem;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: white;
}
.xuanzebtn {
  width: 25%;
  text-align: center;
}
.xuanzebtn img {
  width: 30%;
}
.xuanzebtn p {
  text-align: center;
  font-size: 0.16rem;
}
.xuanzebtn>a{
    color: black;
}
</style>

