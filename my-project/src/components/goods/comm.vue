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
                     <strong>{{stores.tips}}</strong>
                     <p class="cons-sp1">是的分身乏术放上的</p>
                     <p><span class="cons-sp2">{{'￥'+stores.specfoods[0].price}}</span>&nbsp;&nbsp;起<span class="cons-sp3" >
                        <img @click="a(value.foods,index)" src="../img/加号.png" alt="">
                        <span class="comm-sp">0</span>
                       <img  @click="bbb(value.foods,index)" class="comm-imgs" src="../img/减.png" v-show="jianma" alt="">
                       </span>
                       </p>
                 </div> 
              </section>                 
            </section>
            <div @click="dian()" class="under">
              <div>
                <img src="../img/购物车-白色.png" alt="">
                <p>{{number}}</p>
              </div>
                  <p class="comm-p1">￥{{allmoney}}</p>
                  <span class="comm-sp2">配送费￥{{peisong}}</span>
                  <router-link class="comm-sp3" tag="span" to="/indent">去结算</router-link>
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
                <li v-for="(item, index) in datas" :key="index" class="carli">
                  <p>{{item.name}}</p>
                  <p>Y{{item.price}}</p>
                  <div class="jiajian">
                    <img src="../../imgs/减.png" alt="" @click="cc(item,index)">
                    <span>{{item.quantity}}</span>
                    <img src="../../imgs/加.png" alt="" @click="aa(item,index)">
                  </div>
                </li>
              </ul>
            </div>
          </div>
       </div>
    </div>  
</template>

<script>
export default {
  name: "store",
  data() {
    return {
      data: [],
      facevalue: "0",
      datas: [],
      bb: 0,
      shows: false,
      number: 0,
      allmoney: 0.0,
      peisong: 0,
      datas: [],
      jianma: false,
      shuliang: []
    };
  },

  created() {
    var num = 0;
    var peisong = 0;
    var allmoney = 0;
    for (var c = 0; c < this.$store.state.shopcar.length; c++) {
      this.shuliang.push(this.$store.state.shopcar[c].quantity);
    }
    if (this.$store.state.shopcar.length == 0) {
      this.peisong = 0;
      this.allmoney = 0;
      this.number = 0;
    } else {
      for (var a = 0; a < this.$store.state.shopcar.length; a++) {
        num += this.$store.state.shopcar[a].quantity;
        allmoney +=
          this.$store.state.shopcar[a].price *
          this.$store.state.shopcar[a].quantity;
      }
      var max = 0;
      for (var j = 0; j < this.$store.state.shopcar.length; j++) {
        if (max < this.$store.state.shopcar[a].packing_fee) {
          max = this.$store.state.shopcar[a].packing_fee;
        }
      }
      this.number = num;
      this.allmoney = allmoney;
      this.peisong = max;
    }
    var _this = this;
    // 接口16
    let api =
      "https://elm.cangdu.org/shopping/v2/menu?restaurant_id=" +
      this.$route.params.id;
    this.$http.get(api).then(res => {
      _this.data = res.data;
      // console.log(res.data);
      //  console.log(_this.data16)
    });
  },
  methods: {
    menu(id) {
      this.facevalue = id;
    },
    a(stores, index) {
      this.jianma = true;
      //食品的信息
      var aa = stores[index];
      // console.log(aa);
      // console.log(this.$store.state.shopcar);
      this.number += 1;
      this.allmoney += +aa.specfoods[0].price;
      if (this.peisong < aa.specfoods[0].packing_fee) {
        this.peisong = aa.specfoods[0].packing_fee;
      }
      // console.log(this.number, this.peisong, this.allmoney);
      if (this.$store.state.shopcar.length == 0) {
        this.$store.commit("changeshopcar", {
          attrs: aa.attrs,
          extra: {},
          id: aa.specfoods[0].food_id, //食品ID
          name: aa.name, //食品名称
          packing_fee: aa.specfoods[0].packing_fee, //打包费
          price: aa.specfoods[0].price, //价格
          quantity: 1, //数量
          sku_id: aa.specfoods[0].sku_id, //规格id
          specs: aa.specfoods[0].specs, //规格
          stock: aa.specfoods[0].stock //存量
        });
      } else {
        for (var a = 0; a < this.$store.state.shopcar.length; a++) {
          if (aa.name == this.$store.state.shopcar[a].name) {
            this.$store.commit("changeshuliang", a);
            return;
          }
        }
        this.$store.commit("changeshopcar", {
          attrs: aa.attrs,
          extra: {},
          id: aa.specfoods[0].food_id, //食品ID
          name: aa.name, //食品名称
          packing_fee: aa.specfoods[0].packing_fee, //打包费
          price: aa.specfoods[0].price, //价格
          quantity: 1, //数量
          sku_id: aa.specfoods[0].sku_id, //规格id
          specs: aa.specfoods[0].specs, //规格
          stock: aa.specfoods[0].stock //存量
        });
      }
      //餐馆经纬度,餐馆id
      // console.log(
      //   this.$route.params.data.latitude,
      //   this.$route.params.data.longitude,
      // );
    },
    dian() {
      this.shows = !this.shows;
      this.datas = this.$store.state.shopcar;
    },
    clearfood() {
      this.$store.commit("clearshopcar", []);
      this.$router.push({ name: "shopq" });
    },
    bbb(stores, index) {
      // console.log(stores[index]);
      var aa = stores[index];
      // console.log(aa);
      // console.log(this.$store.state.shopcar);
      this.number -= 1;
      this.allmoney -= aa.specfoods[0].price;
      for (var a = 0; a < this.$store.state.shopcar.length; a++) {
        if (aa.name == this.$store.state.shopcar[a].name) {
          if (this.$store.state.shopcar[a].quantity == 1) {
            this.$store.commit("shanchushopcar", a);
            this.peisong = 0;
            this.jianma = false;
          } else {
            this.$store.commit("jianshuliang", a);
          }
          return;
        }
      }
      var perisong = 0;
      for (var j = 0; j < this.$store.state.shopcar.length; j++) {
        if (this.$store.state.shopcar[j] > peisong) {
          peisong = this.$store.state.shopcar[j];
        }
      }
      this.peisong = peisong;
      this.data = this.$store.state.shopcar;
    },
    aa(sss, aaa) {
      var aa = sss;
      // console.log(aa);
      // console.log(this.$store.state.shopcar);
      this.number += 1;
      this.allmoney += +aa.price;
      for (var a = 0; a < this.$store.state.shopcar.length; a++) {
        if (aa.name == this.$store.state.shopcar[a].name) {
          this.$store.commit("changeshuliang", a);
          return;
        }
      }
    },
    cc(store, item) {
      var aa = store;
      // console.log(store);
      this.number -= 1;
      this.allmoney -= aa.price;
      for (var a = 0; a < this.$store.state.shopcar.length; a++) {
        if (aa.name == this.$store.state.shopcar[a].name) {
          if (this.$store.state.shopcar[a].quantity == 1) {
            this.$store.commit("shanchushopcar", a);
            this.peisong = 0;
          } else {
            this.$store.commit("jianshuliang", a);
          }
          return;
        }
        for (var j = 0; j < this.$store.state.shopcar.length; j++) {
          if (this.$store.state.shopcar[j] > peisong) {
            peisong = this.$store.state.shopcar[j];
          }
        }
        this.peisong = peisong;
      }
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
  height: 5.2rem;
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
  height: 5.2rem;
  overflow: scroll;
}
.content_body_right::-webkit-scrollbar {
  display: none;
}
.head {
  background: #ededed;
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
.stop_right p:first-child {
  /* padding: .05rem 0; */
  width: 0.01rem;
  color: #999;
}
.stop_right p:nth-child(2) {
  /* color: red; */
  /* font-size: .15rem; */
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
  top: 6.2rem;
  left: 0.01rem;
  z-index: 10;
}
.under > div {
  width: 0.5rem;
  height: 0.5rem;
  background: black;
  border-radius: 50%;
  position: fixed;
  top: 6rem;
  left: 0.15rem;
}
.under > div img {
  position: fixed;
  width: 0.35rem;
  height: 0.35rem;
  top: 6.1rem;
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
  top: 6.2rem;
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
