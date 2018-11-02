<template>
    <div class="goumaivipdiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="zhifutime">
            <p>支付剩余时间</p>
            <span>00:</span>
            <span>{{this.minutes}}:</span>
            <span>{{this.seconds}}</span>
        </div>
        <p>选择支付方式</p>
        <ul class="zhifuul">
            <li>
                <div>
                    <img src="../imgs/支付宝.png" alt="">
                    <span>支付宝</span>
                </div>
                <img v-if="queding" src="../imgs/对号选中.png" alt="" @click="zhifubao">
                <img v-else src="../imgs/对号.png" alt="" @click="zhifubao">
            </li>
            <li>
                <div>
                    <img src="../imgs/微信.png" alt="">
                    <span>微信</span>
                </div>
                <img v-if="!queding" src="../imgs/对号选中.png" alt="" @click="weixin">
                <img v-else src="../imgs/对号.png" alt="" @click="weixin">
            </li>
        </ul>
        <button @click="qurenzhifu">确认支付</button>
        <div class="xiguadiv" v-if="xiguagua">
            <img src="../imgs/感叹.png" alt="">
            <p>{{pp}}</p>
            <button @click="godenglu">确认</button>
        </div>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "goumaivip",
  data() {
    return {
      loading: true,
      minutes: "",
      seconds: "",
      queding: true,
      xiguagua: false,
      pp: ""
    };
  },
  created() {
    this.$store.commit("changetn", "在线支付");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
    var _this = this;
    var newtime = 899;
    function changetimes() {
      var a = Math.floor(newtime / 60);
      var b = Math.floor(newtime % 60);
      newtime--;
      _this.minutes = +a;
      _this.seconds = +b;
    }
    var timeID = setInterval(changetimes, 1000);
    changetimes();
  },
  methods: {
    returnuup() {
      if (this.$store.state.vipvalue == ture) {
        this.$router.push({ name: "vip" });
      } else {
        this.$router.push({ name: "orderform" });
      }
    },
    zhifubao() {
      this.queding = true;
    },
    weixin() {
      this.queding = false;
    },
    qurenzhifu() {
      this.xiguagua = true;
      if (this.$store.state.vipvalue) {
        this.pp = "下单成功";
      } else {
        this.pp = "请在饿了么APP中的打开";
      }
    },
    godenglu() {
      this.xiguagua = false;
      if (this.$store.state.vipvalue) {
        this.$router.push({ name: "order" });
      }
    }
  },
  beforeMount() {}
};
</script>
<style>
.goumaivipdiv {
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
.zhifutime {
  text-align: center;
  width: 100%;
  padding-top: 10%;
}
.zhifutime > p {
  font-size: 0.16rem;
  padding: 3%;
}
.zhifutime > span {
  font-size: 0.3rem;
  color: black;
  font-weight: bold;
}
.goumaivipdiv > p {
  font-size: 0.2rem;
  padding: 3%;
}
.zhifuul {
  width: 100%;
}
.zhifuul > li {
  width: 94%;
  padding: 3%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.zhifuul > li > div {
  width: 40%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.zhifuul > li > div > img {
  width: 50%;
}
.zhifuul > li > div > span {
  font-size: 0.16rem;
  margin: 5%;
  font-weight: bold;
}
.zhifuul > li > img {
  width: 10%;
}
.goumaivipdiv > button {
  width: 94%;
  margin: 3%;
  height: 0.5rem;
  font-size: 0.2rem;
  line-height: 0.5rem;
  border-radius: 10px;
  background-color: rgb(19, 179, 19);
  color: white;
}
.xiguadiv {
  width: 90%;
  padding: 5%;
  text-align: center;
  z-index: 3;
  position: fixed;
  top: 25%;
  background-color: rgb(192, 251, 192);
}
.xiguadiv > img {
  width: 30%;
}
.xiguadiv > p {
  font-size: 0.16rem;
  padding: 3%;
}
.xiguadiv > button {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgb(39, 175, 39);
  color: white;
  border-radius: 10px;
  line-height: 0.5rem;
  padding: 2%;
  width: 96%;
}
</style>

