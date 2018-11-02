<template>
    <div class="duihuanmaxvip">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <p>成功后兑换讲关联到当前账号:
          <span>{{this.$store.state.usermsg.username}}</span>
        </p>
        <!-- 卡号卡密输入框 -->
        <input type="text" class="khkminput" placeholder="请输入10位卡号">
        <input type="text" class="khkminput" placeholder="请输入6位卡密">
        <button>兑换</button>
        <div class="wenxintips">
          <p>---温馨提示---</p>
          <div>
            <p>新兑换的会员服务,权益以[会员说明]为准。</p>
            <p>月卡:30次减免配送费。</p>
            <p>季卡：90次减免配送费。</p>
            <p>年卡：360次减免配送费</p>
            *仅限蜂鸟专送订单，每日最多减免三单，每单最高减免4元（一个月按31天计算）
          </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "duihuanvipa",
  data() {
    return {
      aaa: ""
    };
  },
  created() {
    this.$store.commit("changetn", "兑换会员");
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "vip" });
    }
  }
};
</script>
<style scoped>
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
.duihuanmaxvip > p {
  font-size: 0.16rem;
  margin: 3%;
  width: 94%;
  padding-bottom: 5%;
}
.duihuanmaxvip > p > span {
  font-weight: bold;
}
.khkminput {
  width: 96%;
  font-size: 0.16rem;
  padding: 2%;
  border-bottom: 1px solid gray;
}
.duihuanmaxvip > button {
  width: 90%;
  margin: 5%;
  height: 0.5rem;
  line-height: 0.5rem;
  color: white;
  background-color: gray;
  margin-bottom: 10%;
  border-radius: 10px;
  font-size: 0.2rem;
}
.wenxintips {
  width: 100%;
  text-align: center;
  font-size: 0.16rem;
}
.wenxintips > div {
  width: 70%;
  margin-left: 10%;
  text-align: start;
}
.wenxintips > p {
  padding: 2%;
}
.wenxintips > div > p {
  padding: 2%;
  line-height: 20px;
}
</style>

