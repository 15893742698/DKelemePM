<template>
    <div>
        <div class="one">
            <div>
                <p class="shuzi">4.4</p>
                <span>综合评价</span>
                <p>高于周边商家76.9%</p>
            </div>
            <div class="two">
                <div>
                    <p class="p1">服务态度 </p>
                     <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </div>
                <div>
                   <p class="p1" id="p1">菜品评价</p>
                    <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                    </el-rate>
                </div>
                <div>
                    <p class="p1">送达时间<span>分钟</span></p>
                </div>               
            </div>
        </div>
        <ul class="eva-ul">
            <li class="eva-li" v-for="(item,index) in data" :key="index"><span>{{item.name}}({{item.count}})</span></li>
        </ul>
    </div>
</template>

<script>
import { Loading } from "element-ui";
export default {
  data() {
    return {
      value5: 3.7,
      data:[]
    };
  },
  created(){
      var _this=this;
      let api = "https://elm.cangdu.org/ugc/v2/restaurants/1/ratings/tags";
      this.$http.get(api).then(res => {
          _this.data = res.data
    });
  },
};
</script>

<style scoped>
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
    border: 1px solid red;
}
.eva-li{
    background: gray;
    border: 1px solid red;
    float: left;
    
}
.eva-li span{
    font-size:.15rem;
    width: 20%;
    height: .5rem;
    color: white;
}
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
