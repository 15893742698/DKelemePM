<template>
    <div class="ccontent">
        <router-link to="/order">
        <div class="flyfa">
            <img src="../../imgs/订单.png" alt="" class="conimgs1">
            <div class="flyaway">
                <p>我的订单</p>
                <img src="../../imgs/前进.png" alt="" class="conimgs2">
            </div>
        </div>
        </router-link>
       <router-link to="/jifenshangcheng">
        <div  class="flyfa">
            <img src="../../imgs/积分.png" alt="" class="conimgs1">
            <div class="flyaway">
                <p>积分商城</p>
                <img src="../../imgs/前进.png" alt="" class="conimgs2">
            </div>
        </div>
        </router-link>
        <router-link to="/vip">
        <div  class="flyfa">
            <img src="../../imgs/会员俱乐部.png" alt="" class="conimgs1">
            <div class="flyaway">
                <p>饿了么会员卡</p>
                <img src="../../imgs/前进.png" alt="" class="conimgs2">
            </div>
        </div>
        </router-link>
    </div>
</template>
<script>
export default {
  name: "ccontent"
};
</script>
<style>
.ccontent {
  width: 100%;
}
.ccontent > a {
  width: 90%;
}
.conimgs1 {
  width: 5%;
  float: left;
  vertical-align: top;
}
.flyfa {
  width: 98%;
  padding: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.conimgs2 {
  width: 5%;
}
.flyaway {
  width: 96%;
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eaeaea;
}
.flyaway > p {
  font-size: 0.2rem;
}
.ccontent {
  border-bottom: 10px solid #eaeaea;
}
</style>

