<template>
    <div>
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="kefu">
            <div class="rengongkefu">
                <img src="../imgs/人工客服.png" alt="">
                <p>在线客服</p>
            </div>
            <div class="dianhuakefu">
                <img src="../imgs/电话客服.png" alt="">
                <p>在线客服</p>
            </div>
        </div>
        <ul class="serveul">
            <li class="hotq">
                热门问题
            </li>
            <li class="serveli" v-for="(item, index) in datas" :key="index">
                <router-link :to="{name:'serveexplain',params:{index}}">
                <span>
                    {{item}}
                </span>
                <img src="../imgs/前进.png" alt=""></router-link>
            </li>
        </ul>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "fapiao",
  data() {
    return {
      loading: true,
      datas: [
        "超级会员权益说明",
        "签到规则",
        "用户等级说明",
        "积分问题",
        "教我拍大片",
        "支付问题",
        "其它问题",
        "准时达问题",
        "会员说明",
        "会员问题",
        "红包问题",
        "活动细则",
        "补签规则",
        "优惠说明",
        "免责声明",
        "代金券说明",
        "商务合作",
        "余额问题",
        "超赞商家",
        "匿名购买",
        "活动问题"
      ]
    };
  },
  created() {
    this.$store.commit("changetn", "服务中心");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url = "https://elm.cangdu.org/v3/profile/explain";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
        console.log(res)
      loadingInstance1.close();
      this.loading = false;
    });
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "home" });
    }
  }
};
</script>
<style>
.hello {
  width: 95%;
  background-color: #436eee;
  height: 50px;
  border-bottom: 1px solid #436eee;
  line-height: 50px;
  text-align: center;
  padding-left: 5%;
  overflow: hidden;
}
.hello img {
  float: left;
  width: 10%;
  vertical-align: top;
  margin-top: 1%;
}
.hello p {
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
.hello > a {
  color: black;
}
.kefu {
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
}
.dianhuakefu,
.rengongkefu {
  width: 49%;
  text-align: center;
  display: inline-block;
}
.rengongkefu {
  border-right: 1px solid gray;
}
.dianhuakefu > img {
  width: 30%;
  margin: 5%;
}
.rengongkefu > img {
  width: 40%;
  margin: 5%;
}
.rengongkefu > p,
.dianhuakefu > p {
  width: 90%;
  font-size: 0.16rem;
  margin: 5%;
}
.serveul {
  width: 100%;
}
.hotq {
  width: 94%;
  margin: 3%;
  font-size: 0.2rem;
  font-weight: bold;
  padding-top: 2%;
  padding-bottom: 2%;
}
.serveli{
    width: 100%;
    /* padding: 3%; */
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.serveli>a{
    width: 94%;
    padding: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid gray;
    color: black;
    font-size: 0.16rem;
}
.serveli>a>img{
    width: 5%;
    vertical-align: bottom;
}
</style>