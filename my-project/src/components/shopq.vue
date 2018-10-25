<template>
    <div>
        <div class="conter">
            <span><img src="./img/search.png" alt=""></span>
            <div class="box">
                <p>效果展示</p>
                <span>商家起送</span>
                <span>分钟送达</span>
                <span>配送费5元</span>
                <p>公告:欢迎光临;用餐高峰期提前下单,谢谢</p>
            </div>
        </div>
        <div class="two">   
                <a class="comm" href="#" @click.prevent="ay('comm')">商品</a>
                <a class="eva" href="#" @click.prevent="ay('eva')">评价</a>
                <component :is="cc"></component>
                </div>
    </div>
</template>



<script>
import comm from './goods/comm'
import eva from './goods/eva'
export default {
    data(){
        return{
            cc:'comm'
        }
    },
  components:{
      comm,
      eva
  },
  methods: {
      ay(n){
          this.cc = n
      }
  }
};
</script>
<style scoped>
.conter {
  border: 1px solid red;
  overflow: hidden;
  /* display: flex; */
}
.conter img {
  width: 0.5rem;
  border: 1px solid red;
  float: left;
}
.box {
  /* border: 1px solid red; */
  width: 2.8rem;
  /* float: right; */
  clear: both;
  display: inline-block;
}
.box p {
  font-size: 0.15rem;
  color: red;
}
.two{
    overflow: hidden;
    /* border: 1px solid red; */
}
.comm {
  font-size: 0.2rem;
  color: black;
  float: left;
  margin-left: 0.7rem;
  margin-top: 0.2rem;
}
.eva {
  font-size: 0.2rem;
  color: black;
  float: right;
  margin-right: 0.7rem;
  margin-top: 0.2rem;
}
</style>

