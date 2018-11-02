<template>
<div>
    <div class="top">
      <div @click="tiao">
      <img src="../imgs/后退.png" alt="">
      </div>
      <span>{{ytitle}}</span>
      </div>
    <div class="box">
      <!-- 顶部饮品 -->
      <div class="title">
      <span @click="hidden()">{{ytitle}}</span>
      <span  @click="hidden3()">排序</span>
      <span @click="hidden4()">筛选</span>
      </div>
      <!-- 下部菜品详情 -->
      <div v-if="show" class="box2">
        <!-- 下部左边分类 -->
      <div class="fenlei">
        <ol>
          <li  v-for="(k,index) in data" :key="index" @click="hidden2(index)">
            <img :src="'https://fuss10.elemecdn.com/'+k.image_url+'.png'" alt="">
            {{k.name}}
            <span>
            {{k.count}}
            </span>
            >
          </li>
        </ol>
      </div>
      <!-- 下部右边详情 -->
      <div class="xiangqing">
      <ol >
      <li v-for="(k,index) in arr" :key="index" @click="updaMsg(index)">
        <span class="span1">
       {{k.name}}
       </span>
        <span class="span2">
            {{k.count}}
            </span>
      </li>
    </ol>
      </div>
      </div>
    </div>
    <!-- 下部排序详情 -->
    <div v-if="show2" class="xulie" >
       <ol >
      <li v-for="(k1,index1) in imgs1" :key="index1" @click="jiahao(k1.id)">
        <img :src="k1.src" alt="">
       {{k1.title}}
      </li>
    </ol>
    </div>
    <!-- 下部筛选详情 -->
    <div class="shaixuan" v-if="show3">
      <div>
      <p class="p1">配送方式</p>
      <p class="bird">蜂鸟专送</p>
      </div>
      <p>商家属性(可以多选)</p>
      <ul>
        <li  v-for="(k2,index2) in data2" :key="index2">
          <span :style="{color: '#'+k2.icon_color,border:'1px solid #'+k2.icon_color,borderRadius: '20%',padding:'3px'}">{{k2.icon_name}}</span>
          <span>{{k2.name}}</span>
        </li>
      </ul>
      <button class="btn1">清空</button>
      <button class="btn2">确定</button>
    </div>
    <div class="warp">
    <!-- <Zujian :cli="cont"></Zujian> -->
    </div>
</div>
</template>
<script>
// import Zujian from "../zujian";

import { Loading } from "element-ui";
import img01 from "./img/1.png";
import img02 from "./img/2.png";
import img03 from "./img/3.png";
import img04 from "./img/4.png";
import img05 from "./img/5.png";
import img06 from "./img/6.png";
export default {
  name: "tian",
  data: () => ({
    // 修改地方
    
    imgs1: [
      { title: "智能排序", src: img01, id: 4 },
      { title: "距离最近", src: img02, id: 5 },
      { title: "销量最高", src: img03, id: 6 },
      { title: "起送价最低", src: img04, id: 1 },
      { title: "配送速度最快", src: img05, id: 2 },
      { title: "评分最高", src: img06, id: 3 }
    ],
    show: false,
    show2: false,
    show3: false,
    data: [],
    arr: [],
    data1: [],
    data2: [],
    // 修改地方
    name1: [],
    name2: []
  }),
  //修改
  props:['cont'],

  components: {
    // Zujian
  },
  // 修改地方
  // props: ["cli"],
  methods: {
    hidden: function() {
      this.show = !this.show;
      this.show2 = false;
      this.show3 = false;
    },
    hidden2: function(index) {
      this.arr = this.data[index].sub_categories;
      // 修改地方
      this.name1 = this.data[index].name;
      console.log(this.name1);
    },
    updaMsg(index) {
      this.name2 = this.arr[index].name;
      console.log(this.name2);
      this.show = false;
    },
    hidden3: function() {
      this.show = false;
      this.show2 = !this.show2;
      this.show3 = false;
    },
    hidden4: function() {
      this.show = false;
      this.show2 = false;
      this.show3 = !this.show3;
    },
    tiao() {
      this.$router.go(-1);
    },
    jiahao(index1){
      this.cont(index1);
      // console.log(this.cont);
    }
    // 修改地方
    // updaMsg(el) {
    //   this.cont = el;
    // }
  },
  // 修改地方
  watch: {
    name2() {
      this.cont = this.name1 + "/" + this.name2;
      // console.log(a)
      // this.cli(a);
    }
  },
  created() {
    this.ytitle = this.$route.params.tit;
    // 接口  7
    var api = "https://elm.cangdu.org/shopping/v2/restaurant/category";
    var _this = this;
    this.$http.get(api).then(data => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data = data.data;
    });
    let api1 =
      "https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762";
    //promise写法
    this.$http.get(api1).then(data1 => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data1 = data1.data;
    });
    let api2 =
      "https://elm.cangdu.org/shopping/v1/restaurants/activity_attributes";
    //promise写法
    this.$http.get(api2).then(data2 => {
      //关闭加载提示
      // loadingInstance1.close();
      // 成功后的回调
      //展示所有商店名
      _this.data2 = data2.data;
    });
  }
};
</script>
<style scoped ="scoped">
.top img {
  position: absolute;
  top: 0.13rem;
  left: 0.1rem;
  width: 0.2rem;
}
.top {
  background-color: dodgerblue;
  width: 100%;
  height: 0.457rem;
  text-align: center;
  font-size: 0.2rem;
  color: white;
  line-height: 0.457rem;
  /* font-family: Microsoft YaHei */
}
.title {
  display: flex;
  justify-content: space-around;
  height: 0.375rem;
  line-height: 0.375rem;
}
.title span{
  font-size: .16rem;
}
.box2 {
  height: 3.78rem;
}
.box2 div {
  float: left;
  width: 50%;
  text-align: center;
}
.xiangqing {
  height: 3.78rem;
  overflow: scroll;
  position: absolute;
  top: 0rem;
  left: 50%;
  background-color: white;
  z-index: 10;
}
/* 隐藏滚动条 */
.xiangqing::-webkit-scrollbar {
  display: none;
}
.box2 li {
  line-height: 0.42rem;
}
.fenlei img {
  width: 0.1875rem;
}
.fenlei ol {
  background-color: rgba(230, 230, 230, 1);
}
.fenlei li {
  height: 0.42rem;
  /* background-color: rgba(230, 230, 230, 1); */
  color: rgb(100, 100, 100);
  font-size: 0.12rem;
}
.xiangqing li {
  height: 0.41rem;
  border-bottom: 0.01rem solid rgba(230, 230, 230, 1);
  font-size: 0.13rem;
    color: rgb(100, 100, 100);
}
.fenlei span {
  background-color: rgba(200, 200, 200, 1);
  color: white;
  border-radius: 35%;
}
.shaixuan li {
  width: 30%;
  border: 0.01rem solid rgb(230, 230, 230);
  height: 0.32rem;
  line-height: 0.32rem;
  font-size: 0.12rem;
  margin-top: 0.1rem;
}
.shaixuan {
  font-size: 0.12rem;
}
.shaixuan ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
}
.btn1 {
  width: 1.77rem;
  height: 0.422rem;
  background-color: aliceblue;
  border: 1px solid aliceblue;
  border-radius: 4%;
  margin-top: 0.1rem;
}
.btn2 {
  background-color: green;
  width: 1.77rem;
  height: 0.422rem;
  border: 1px solid green;
  border-radius: 4%;
}
.bird {
  width: 1rem;
  border: 0.01rem solid rgb(230, 230, 230);
  margin: 0.1rem;
  padding: 0.08rem;
}
.p1 {
  margin-left: 0.1rem;
}
.xulie {
  font-size: 0.12rem;
}
.xulie img {
  width: 0.16rem;
  margin: 0 0.15rem;
}
.xulie li {
  width: 3.75rem;
  height: 0.57rem;
  border-bottom: 0.01rem solid rgb(230, 230, 230);
  line-height: 0.57rem;
}
.box2 {
  /* border: 1px solid red; */
  position: absolute;
  width: 100%;
  top: 0.82rem;
  left: 0;
  z-index: 100;
}
.xulie,
.shaixuan {
  position: absolute;
  width: 100%;
  top: 0.82rem;
  left: 0;
  background-color: white;
  z-index: 100;
}
.span1{
  float: left;
  margin-left: 0.1rem;
}
.span2{
  float:right;
  margin-right: 0.1rem;
}
</style>

