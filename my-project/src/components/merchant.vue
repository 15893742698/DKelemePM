<template>
<div>
  <div class="box">
    <img src="./img/search.png" alt="" @click="sousuoa">
    <span>{{this.$store.state.choicecityadd.address}}</span>
    <router-link :to="srcc" >{{msg}}</router-link>
  </div>
  <Shops></Shops>
<!-- ssssssssssssssssssssssss下部分sssssssssssssssssssssssss -->
    
    <div class="box1">
        <img class="img1" src="./img/wxb明星店铺.png" alt="">
        <span>附近商家</span>
    </div>
    <ul class="content_ul">
        <router-link tag="li" :key="index" v-for="(k,index) in datas" :to="{name:'shopq',params:{id:k.id}}">
        <div><img class="img2" :src="'https://elm.cangdu.org/img/'+k.image_path" alt=""></div>
        <div class="content_div">
            <p><span id="sp1">品牌</span><span id="sp2">{{k.name}}</span><span id="sp3">保准票</span></p>
            <div id="nmd">
             <div> 
               <span><el-rate
  v-model="k.rating"
  disabled
  show-score
  text-color="#ff9900"
  score-template="{value}"
  class="el-rate">
</el-rate></span><span id="sp4">月售106单</span></div>
<div>
  <span id="sp5" v-if="k.delivery_mode">
    {{k.delivery_mode.text}}</span><span id="sp6">准时达</span>
      </div>
    </div><br>
            <p><span class="sp7">￥{{k.float_minimum_order_amount}}起送/</span><span class="sp7">{{k.piecewise_agent_fee.tips}}</span><span class="sp7">{{k.distance}}/{{k.order_lead_time}}</span></p>
        </div>
        <hr>
      
    </router-link>
    </ul>
    <Botfix></Botfix>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Shops from "./shops.vue";
import Botfix from "./bot";
// ----------------------------------------------------------
// import img01 from "./img/search.png";
export default {
  components: {
    Shops,
    Botfix
  },
  name: "heads",
  data: () => ({
    datas: null,
    srcc: "",
    msg: ""
  }),
  created() {
    let loadingInstance1 = Loading.service({ fullscreen: true });
    var botchoice = {
      waimai: true,
      sousuo: false,
      dingdan: false,
      mine: false
    };
    this.$store.commit("changebotchoice", botchoice);
    if (!this.$store.state.denglu) {
      this.srcc = "/home/unlogin";
      this.msg = "登录|注册";
    } else {
      this.srcc = "/home/login";
      this.msg = "我的";
    }
    let api =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    this.$http.get(api).then(response => {
      // console.log(response);
      this.datas = response.data.map(dengke => {
          loadingInstance1.close();  
        // console.log(dengke);
        return dengke;
        });
        
    });
  },
  methods:{
    sousuoa(){
      this.$router.push({name:"searchfood"})
    }
  }
};
</script>
<style scoped="scoped">
/*-----------------------------------------*/

.box {
  background: rgb(49, 144, 232);
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  line-height: 50px;
}
.box > img {
  width: 10%;
}
.box > span {
  width: 50%;
  font-size: 0.14rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box1 {
  overflow: hidden;
  /* background: red; */
  font-size: 0.2rem;
  width: 100%;
  padding-bottom: 5%;
  /* margin-top: 50px; */
}
.box1 span,
img {
  float: left;
  color: black;
}

.box > span {
  font-size: 0.16rem;
  color: white;
  text-align: center;
  margin-left: 25%;
}
a {
  color: white;
  font-size: 0.2rem;
  /* border: 1px solid red; */
}
.img1 {
  width: 0.2rem;
  height: 0.2rem;
}
/* 11111 */
/* .content_ul{
  padding-left: 3%;
} */
.content_ul li {
  height: 1.2rem;
  /* border: 1px solid red; */
  overflow: hidden;
}
.content_ul li div {
  /* border: 1px solid palegreen; */
  float: left;
}
.content_ul li > div:first-child {
  width: 20%;
  height: 1rem;
  /* border: 1px solid yellow; */
}
.img2 {
  width: 0.75rem;
  padding-top: 10%;
}
.content_ul li > div:nth-child(2) {
  width: 75%;
  height: 1rem;
  /* border: 1px solid yellow; */
  margin-left: 0.1rem;
}
.content_div p {
  height: 0.2rem;
  margin: 10px 0;
  /* background: blue; */
  overflow: hidden;
}
.content_div p > span {
  float: left;
  /* border: 1px solid black; */
  /* margin: 0 20px 0 5px; */
}
.content_div p > span:last-child {
  float: right;
  margin-right: 10px;
}
.content_div #sp1 {
  background: yellow;
  font-size: 0.16rem;
  margin-top: 1%;
  /* margin-left: 3%; */
  /* line-height: .2rem; */
}
.content_div #sp2 {
  font-size: 0.2rem;
}
.content_div #sp3 {
  font-size: 0.1rem;
}
.content_div #sp4 {
  font-size: 0.1rem;
}
.content_div #sp5 {
  font-size: 0.1rem;
  background: rgb(38, 117, 190);
  color: white;
  margin: 0 0.05rem;
  /* margin-right: 0.2rem; */
  /* padding-left: 0.1rem; */
}
#nmd {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.content_div #sp6 {
  font-size: 0.1rem;
  border: 1px solid rgb(49, 144, 232);
  color: rgb(38, 117, 190);
}
.content_div .sp7 {
  font-size: 0.1rem;
  /* margin-left: 3%; */
}
.box > img {
  width: 0.3rem;
  position: absolute;
  left: 0;
  top: 0.1rem;
  bottom: 0.1rem;
  height: 0.3rem;
}
.box > a {
  float: right;
  right: 0;
  top: 0.1rem;
  bottom: 0.1rem;
}
/* a{
    display: block;
} */
</style>
<style>
.el-rate__item {
  width: 0.094rem;
}
.el-rate__icon {
  font-size: 10px;
  z-index: -5;
}
</style>
