<template>
    <div>
        <div class="con-imgs">
                <img :src="'https://elm.cangdu.org/img/'+data.image_path">
            </div>
        <div class="conter">
            <img :src="'https://elm.cangdu.org/img/'+data.image_path" alt="">
            
            <div class="box">
                <p>效果展示</p>
                <p>商家起送/
                分钟送达/
                配送费5元</p>
                <p>公告:欢迎光临;用餐高峰期提前下单,谢谢</p>
            </div>
        </div>
        <div class="two">   
                <a class="comm" href="#" @click.prevent="ay('comm')">商品</a>
                <a class="eva" href="#" @click.prevent="ay('eva')">评价</a>
                </div>
          <component :is="cc"></component>

          <!-- <eva></eva> -->
    </div>
  
</template>


<script>
import comm from './goods/comm'
import eva from './goods/eva'
export default {
    data(){
        return{
           data:[],cc:'comm'
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
  },
  created(){
      var id = this.$route.params.id;
      let api = "https://elm.cangdu.org/shopping/restaurant/"+id;
      this.$http.get(api).then((data)=>{
          this.data = data.data;
          console.log(this.data);
      });
  }
};
</script>
<style scoped>
/* body{ */
    /* background-color: rgb(248,248, 249); */
    /* background-color: red; */
/* } */
.conter {
    /* width: 1rem; */
    height: 1rem;
  border: 1px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.con-imgs{
    position: absolute;
    left: 0;
    top: 0;
    z-index: -5;
    right: 0;
    filter: blur(10px);
    height:1.2rem;
    overflow:hidden;
}
.con-imgs img{
    width: 100%;
    height: .9rem;
    /* filter: blur(10px); */
    /* -webkit-filter: blur(10px);
    -moz-filter:blur(10px);
    -ms-filter: blur(10px);
    -o-filter:blur(10px); */
}
.conter img {
  width: .7rem;
  height: .7rem;
  border: 1px solid red;
}
.box {
  /* border: 1px solid red; */
  width: 2.8rem;
}
.box p:first-child{
    font-size: .2rem;
}
.box p {
  font-size: 0.1rem;
  color: red;
  height: 0.25rem;
  line-height: 0.25rem;
}
.two{
    overflow: hidden;
    border: 1px solid red;
}
.comm {
  font-size: 0.2rem;
  color: black;
  float: left;
    border: 1px solid yellow;
  margin-left: 0.7rem;
  margin-top: 0.2rem;
}
.eva {
  font-size: 0.2rem;
  color: black;
  float: right;
    border: 1px solid pink;
  margin-right: 0.7rem;
  margin-top: 0.2rem;
}
</style>

