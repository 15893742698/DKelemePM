<template>
    <div class="vipcenter">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <p class="zhanghu">为账户<span>{{this.$store.state.usermsg.username}}</span>购买会员</p>
        <div class="viptequan">
            <p>会员特权</p>
            <span @click="explain">会员说明 ></span>
        </div>
        <ul class="vipul">
            <li class="vipli">
                <img src="../imgs/省级.png" alt="">
                <div>
                    <span>减免配送费</span>
                    <p>每月减免30单,每日可减免3单,每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </li>
            <li class="vipli vipli2">
                <img src="../imgs/包.png" alt="">
                <div>
                    <span>减免配送费</span>
                    <p>每月减免30单,每日可减免3单,每单最高减4元</p>
                    <p>蜂鸟专送专享</p>
                </div>
            </li>
        </ul>
        <p class="kaivip">开通会员</p>
        <div class="yuevip">
            <p>1个月
                <span>¥20</span>
            </p>
            <router-link to="/goumai">
            <p class="goumai">购买</p>
            </router-link>
        </div>
        <div class="yuevip">
            <p>兑换会员</p>
            <router-link to="/duihuanvip" class="kahaokami">
                <p>使用卡号卡密></p>
            </router-link>
        </div>
        <div class="yuevip">
            <p>购买记录</p>
            <router-link to="/kaifapiao" class="kaifapiao">
                <p>开发票></p>
            </router-link>
        </div>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "vip",
  methods: {
    returnuup() {
      this.$router.go(-1);
    }
  },
  created() {
    this.$store.commit("changetn", "会员中心");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    if (!this.$store.state.denglu) {
      this.$router.push({ name: "unloginyouhuiyemian" });
      loadingInstance1.close();
      this.loading = false;
    } else {
      loadingInstance1.close();
      this.loading = false;
    }
  },
  methods: {
    explain() {
      this.$store.commit("explaindetail", 5);
      this.$store.commit("changetn", "会员说明");
      this.$router.push({ name: "detailexplain" });
    },
    returnuup() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style>
.vipcenter {
  width: 100%;
}
.hello {
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hello img {
  width: 10%;
  vertical-align: top;
  margin-top: 0%;
}
.hello p {
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  width: 58%;
  text-align: start;
}
.hello > a {
  color: black;
}
.zhanghu {
  width: 94%;
  color: gray;
  font-size: 0.16rem;
  padding: 3%;
}
.zhanghu > span {
  color: black;
  font-weight: bold;
  padding: 2%;
}
.viptequan {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.viptequan > p {
  font-size: 0.16rem;
  color: black;
}
.viptequan > span {
  font-size: 0.14rem;
  color: gray;
}
.vipul {
  width: 94%;
  margin: 3%;
}
.vipli {
  width: 94%;
  padding: 3%;
  border-top: 1px solid gray;
}
.vipli > img {
  width: 20%;
  vertical-align: top;
}
.vipli > div {
  width: 70%;
  display: inline-block;
}
.vipli > div > span {
  font-size: 0.2rem;
  color: black;
  margin-left: 2%;
}
.vipli > div > p {
  font-size: 0.16rem;
  color: gray;
  margin: 3%;
}
.vipli2 {
  border-bottom: 1px solid gray;
}
.kaivip {
  width: 94%;
  margin: 3%;
  background-color: rgb(105, 221, 105);
  font-size: 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
}
.yuevip {
  width: 94%;
  margin: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.yuevip > p {
  font-size: 0.16rem;
  color: black;
  display: inline-block;
}
.yuevip > p > span {
  color: orange;
  font-weight: bold;
}
.yuevip > a {
  width: 30%;
  text-align: center;
  padding: 2%;
  border-radius: 5px;
  height: 0.2rem;
  line-height: 0.2rem;
  font-size: 0.14rem;
}
.goumai {
  color: orange;
  font-size: 0.16rem;
  border: 1px solid orange;
}
.yuevip > .kahaokami {
  text-align: end;
}
.yuevip > .kaifapiao {
  text-align: end;
}
</style>

