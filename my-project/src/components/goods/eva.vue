<template>
    <div>
        <div class="one">
            <div>
                <p class="shuzi">{{number}}</p>
                <span>综合评价</span>
                <p>高于周边商家{{rate}}%</p>
            </div>
            <div class="two">
                <div>
                    <p class="p1">服务态度 </p>
                     <el-rate v-model= "num" show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </div>
                <div>
                   <p class="p1" id="p1">菜品评价</p>
                    <el-rate v-model= "num" show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </div>
                <div>
                    <p class="p1">送达时间<span>{{shopName.deliver_time}}分钟</span></p>
                </div>               
            </div>
        </div>
        <ul class="eva-ul">
            <li v-for="(item,index) in data" :key="index"  @click="menu1(index)" :class="{active:index==facevalue}"><span  :class="{active:index==facevalue}">{{item.name}}({{item.count}})</span></li>
        </ul>
        <br>
        <hr>
        <div class="top" v-for="(item1,index) in data1" :key="index">
        
            <div class="eva-img"><img src="../img/6.png" alt=""></div>
            <div class="eva-ate">
                <span>4**********b</span>
                <div class="eva-div">
                <el-rate class="
star" v-model="value5" disabled  text-color="#ff9900">
                </el-rate>
                <span>{{item1.time_spent_desc}}</span>
                </div>
                <div v-for="it in item1.item_ratings" :key="it._id" class="eva-one">
                    
                     <img  :src="'https://fuss10.elemecdn.com/'+it.image_hash+'.jpeg'" alt="" v-if="it.image_hash">
                    <p class="eva-p">{{it.food_name}}</p>
                </div>
                
                <!-- <span>{{item1.item_ratings.food_name}}</span><span>{{item1.item_ratings[0]}}</span> -->
               
            </div>
            <div class="eva-time">{{item1.rated_at}}</div>
        </div>
    </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      value5: 3.7,
      facevalue:"0",
      data:[],
      data1:[],
      shopName:[],
      arr:"",
      num:0,
      number:"",
      rate:"",
    //   value:""
    };
  },
  created(){
      var _this=this;
      let api = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
      this.$http.get(api).then(res => {
          _this.data = res.data
    });
    // var __this = this;
    let api1 = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings?offset=0&limit=10";
    this.$http.get(api1).then(res => {
        _this.data1 = res.data
        // console.log(res.data);
    });
    const api2 = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/scores";
    this.$http({
        method:"get",
        url:api2
    }).then(resName => {
        this.shopName = resName.data;
        // console.log(111,this.shopName.service_score)
         this.arr = Math.round(Math.round(+this.shopName.service_score*100)/10)/10;
      this.num = Math.round(Math.round(+this.shopName.food_score*100)/10)/10;
      this.rate = Math.round(Math.round(+this.shopName.compare_rating*10000)/10)/10;
      this.number = Math.ceil(+this.arr+this.num)/2;

    });
  },
  methods:{
       menu1(id) {      
      this.facevalue = id
    }
  }
};
</script>

<style scoped>
.eva-one {
 /* border: 1px solid black; */
 float: left;
}
body{
    background: rgb(172, 168, 168);
}
.one {
  display: flex;
  margin-top: .2rem;
}
.one>div:first-child {
  /* background: pink;
        width: 40%; */
  text-align: center;
}
.one > div {
  width: 48%;
}
 .two {
  width: 55%;
}
.shuzi {
  font-size: 0.4rem;
  color: orange;
  padding: 2%;
}
.shuzi + span {
  font-size: 0.15rem;
}
.one > div > span + p {
  font-size: 0.05rem;
  margin: 2%;
}

.two>div{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.p1{
    font-size: .15rem;
    padding: .07rem;
}
.p1>span{
    font-size: .1rem;
    margin-left: .1rem;
}
.eva-ul{
    /* width: 5rem; */
    height: 2rem;
    margin: .2rem 0;
    /* border: 1px solid red; */
}
.eva-ul>li{
    background: rgb(209, 227, 241);
    /* border: 1px solid red; */
    float: left;
    margin-top: .15rem;
    margin: .1rem .1rem;
    font-size: .2rem;
    line-height: .3rem;
    padding-left: .05rem;
    padding-right: .05rem;border-radius:.05rem;
}
.eva-ul span{
    font-size:.15rem;
    width: 20%;
    height: .3rem;
    color: black;
}
.eva-ul .active {
  background: #3190e8;
  color:white;
}
.top{
    margin: .2rem 0;
    display: flex;
    justify-content: space-around;
}
.eva-img>img{
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    border: 1px solid red;
}
.eva-ate{
    overflow: hidden;
}
.eva-ate img{
    width: .7rem;
    height: .7rem;
}
.eva-div{
    display: flex;
}
.eva-p{
    overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: .5rem;
  /* display: -webkit-box;
  /* -webkit-line-break: auto; */
  /* -webkit-box-orient: vertical; */
}
</style>
<style>
.star{
    width: .6rem;
}
.el-rate__item {
  width: 0.094rem;
}
.el-rate__icon {
  font-size: 10px;
  z-index: -5;
}
</style>
