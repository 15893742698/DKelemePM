<template>
    <div class="store">
       <div class="content_body" >
         <!-- 左边部分 -->
          <div class="content_body_left">
            <ul  id="menu" v-for="(item,index) in data" :key="index" >
              <li @click="menu(index)" :class="{active:index==facevalue}">
                <a :href="'#Top'+item.id">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <!-- 右边部 -->
        <div class="content_body_right" >
          <!-- 右边头部 -->
           <section class="head" v-for="(value,index) in data" :key="index">
             <div class="head_top" :id="'Top'+value.id">
                 <!-- 热销榜 -->
               <span class="head_spans">{{value.name}}</span>
               <span class="head_span">{{value.description}}</span>
             </div>
           <!-- 右边店铺详情 -->
            <section class="stop"  v-for="(stores, index) in value.foods" :key="index">
                 <div class="stop_left">
                   <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                 </div>
                 <div class="stop_right">
                     <div><span class="p1">{{stores.name}}</span>
                        <span class="cons-sp">招牌</span>
                     </div>
                     <p>{{stores.description}}</p>
                     <strong class="str">{{stores.tips}}</strong>
                     <p class="cons-sp1">是的分身乏术放上的</p>
                     <p><span class="cons-sp2">{{'￥'+stores.specfoods[0].price}}</span><span class="rise">起</span><span class="cons-sp3" >
                        <img @click="a(stores.specfoods[0])" src="../img/加号.png" alt="">
                        <span class="comm-sp">{{stores.specfoods[0].count}}</span>
                       <img v-if="stores.specfoods[0].count != 0"  @click="b(stores.specfoods[0])" class="comm-imgs" src="../img/减.png" alt="">
                       </span>
                       </p>
                 </div> 
              </section>                 
            </section>
            <div @click="dian()" class="under">
              <div>
                <img src="../img/购物车-白色.png" alt="">
                <p>{{zonggeshu}}</p>
              </div>
                  <p class="comm-p1">￥{{num}}</p>
                  <span class="comm-sp2">配送费 ￥{{peisongfei}}</span>
                  <span class="comm-sp3" @click="jiezhang">去结算</span>
            </div>
            <div class="comm-data" v-show="shows">
              <div class="gouwucheche" >
                <p>购物车</p>
                <div class="clearfood" @click="clearfood">
                  <img src="../../imgs/垃圾桶.png" alt="">
                  <span>清空</span>
                </div>
              </div>
              <ul class="carul">
                <li v-for="(item, index) in shoping" :key="index" class="carli">
                  <p>{{item.name}}</p>
                  <p>Y{{item.price}}</p>
                  <div class="jiajian">
                    <img src="../../imgs/减.png" alt="" @click="b(item)">
                    <span>{{item.count}}</span>
                    <img src="../../imgs/加.png" alt="" @click="a(item)">
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>
    </div>  
</template>

<script>
import Vue from "vue";
export default {
  name: "store",
  data() {
    return {
      facevalue: "0",
      datas: [],
      bb: 0,
      shows: false,
      jianma: false
    };
  },

  created() {
    // 接口16
    let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
      this.$route.params.id;
    this.$http.get(api).then(res => {
      for (let i = 0; i < res.data.length; i++) {
        for (let ii = 0; ii < res.data[i].foods.length; ii++) {
          Vue.set(res.data[i].foods[ii].specfoods[0], "count", 0);
        }
      }
      this.$store.commit("changeallshuju", res.data);
    });
    
  },
  computed: {
    data() {
      return this.$store.state.allshuju;
    },
    num() {
      return this.$store.state.num;
    },
    zonggeshu() {
      return this.$store.state.zonggeshu;
    },
    shoping() {
      return this.$store.state.shoping;
    },
    peisongfei(){
      return this.$store.state.peisongfei
    }
  },
  methods: {
    menu(id) {
      this.facevalue = id;
    },
    dian() {
      this.shows = !this.shows;
      this.datas = this.$store.state.shopcar;
    },
    a(a) {
      this.$store.commit("a", a);
    },
    b(b) {
      this.$store.commit("b", b);
    },
    clearfood() {
      this.$store.commit("shopingclear");
      this.shows = false;
      this.peisong = 0;
    },
    jiezhang(){
      this.$router.push({name:"orderform"});
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #333;
}
.store {
  background: #ededed;
}
.content_body {
  height: 0.3rem;
}
.content_body_left {
  background: #ededed;
  font-size: 0.1rem;
  float: left;
  width: 25%;
  height: 4.4rem;
  overflow: scroll;
}
.content_body_left::-webkit-scrollbar {
  display: none;
}
.content_body_left li {
  text-align: center;
  padding: 0.2rem 0;
  color: #666;
  border-bottom: 0.5px solid #e4e4e4;
}
.active {
  border-left: 0.03rem solid #3190e8;
  background: #fff;
}
.content_body_right {
  float: left;
  width: 75%;
  height: 4.4rem;
  overflow: scroll;
}
.content_body_right::-webkit-scrollbar {
  display: none;
}
.head {
  background: #ededed;
  /* border: 1px solid red; */
  color: #666;
}
.head_top {
  height: 0.3rem;
  line-height: 0.3rem;
  padding-left: 0.2rem;
}
.head_spans {
  color: #666;
  font-size: 0.2rem;
}
.head_span {
  color: #999;
  font-size: 0.06rem;
}

.stop {
  height: 1rem;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
  /* border: 1px solid red; */
  z-index: 100;
}
.stop_left img {
  width: 0.5rem;
  height: 0.5rem;
  float: left;
  margin: 0.12rem;
  margin-top: 0.1rem;
}
.stop_right {
  /* float: left; */
  /* margin-top: 1rem; */
  overflow: hidden;
  font-size: 0.05rem;
}
.str{
  font-size: .1rem;
}
.rise{
  font-size: .1rem;
  margin-left: .05rem;
}
.stop_right p:first-child {
  /* padding: .05rem 0; */
  width: 0.01rem;
  color: #999;
}
.stop_right p:nth-child(2) {
  /* color: red; */
  font-size: .12rem;
  margin: 0.1rem 0;
}
.stop_right p:nth-child(3) {
  font-size: 0.15rem;
}
.p1 {
  /* color: red; */
  /* border: 1px solid red; */
  font-size: 0.15rem;
}
/* .stop_right div span{
    /* display: flex; */
/* justify-content: space-evenly; }*/
.cons-sp {
  float: right;
  color: red;
  font-size: .1rem;
  border: 1px solid red;
  border-radius: 0.2rem;
}
.comm-sp {
  font-size: 0.15rem;
  float: right;
  bottom: 0.1rem;
  right: 0.2rem;
}
.cons-sp1 {
  font-size: .11rem;
  color: orangered;
  border: 1px solid orangered;
  border-radius: 0.2rem;
  width: 60%;
  text-align: center;
}
.cons-sp2 {
  color: orangered;
  font-size: 0.15rem;
}
.cons-sp3 > img:first-child {
  width: 0.22rem;
  height: 0.22rem;
  float: right;
}
.under {
  width: 100%;
  height: 0.5rem;
  background: black;
  position: fixed;
  top: 5.7rem;
  left: 0.01rem;
  z-index: 10;
}
.under > div {
  width: 0.5rem;
  height: 0.5rem;
  background: black;
  border-radius: 50%;
  position: fixed;
  top: 5.5rem;
  left: 0.15rem;
}
.under > div img {
  position: fixed;
  width: 0.35rem;
  height: 0.35rem;
  top: 5.65rem;
  left: 0.2rem;
}
.under span {
  color: white;
}
.under .comm-p1 {
  color: white;
  width: 70%;
  font-size: 0.2rem;
  margin-left: 0.7rem;
}
.under .comm-sp2 {
  /* color: red; */
  margin-left: 0.7rem;
  margin-top: 0.01rem;
}
.under > .comm-sp3 {
  width: 30%;
  height: 0.5rem;
  font-size: 0.17rem;
  text-align: center;
  line-height: 0.5rem;
  position: fixed;
  top: 5.7rem;
  right: 0;
  background: rgb(0, 170, 17);
}
.comm-imgs {
  width: 0.27rem;
  float: right;
  top: -3%;
}
.comm-data {
  width: 100%;
  background: rgb(192, 240, 192);
  position: fixed;
  bottom: 6%;
  left: 0.01rem;
  z-index: 5;
}
.under > div > p {
  color: orangered;
  font-size: 0.16rem;
  font-weight: bold;
  position: absolute;
  right: 40%;
  top: 0;
}
.gouwucheche {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.16rem;
}
.clearfood {
  width: 40%;
  text-align: end;
}
.clearfood > img {
  width: 20%;
}
.carul {
  width: 100%;
  padding-bottom: 5%;
}
.carli {
  width: 94%;
  padding: 3%;
  font-size: 0.16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jiajian {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.jiajian > span {
  margin-top: 4%;
}
.jiajian > img {
  width: 40%;
  vertical-align: top;
}
</style>
