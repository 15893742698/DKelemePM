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
            <section class="stop" v-for="(stores,key) in value.foods" :key="key">
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
                     <p><span class="cons-sp2">{{'￥'+stores.specfoods[0].price}}</span>&nbsp;&nbsp;起<span class="cons-sp3" ><img @click="a" src="../img/加号.png" alt=""></span></p>
                 </div> 
              </section>                 
            </section>
            <div class="under">
              <div><img src="../img/购物车-白色.png" alt=""></div>
                  <p>￥0.00</p>
                  <span>配送费￥0</span>
                  <span>去结算</span>
            </div>
          </div>
       </div>
    </div>  
</template>

<script>
export default{ 
  name: "store",
  data() {
    return {
      data:[],
      facevalue:'0',
      datas:[]
    };
  },
  
  created() {
    var _this=this;
    // 接口16
    let api = "https://elm.cangdu.org/shopping/v2/menu?restaurant_id="+this.$route.params.id
    this.$http.get(api).then(res => {
      _this.data=res.data;
      //  console.log(_this.data16)
    });
  },
  methods: {
    menu(id) {
      this.facevalue = id
    },
    a(){
      console.log("点击了");
    }
  }
};
</script>

<style scoped>
a{ 
text-decoration:none; 
color:#333; 
} 
.store {
  background: #ededed;
}
.content_body {
 height:.3rem;
}
.content_body_left {
  background: #ededed;
  font-size: .1rem;
  float: left;
  width: 25%;
  height: 5.2rem;
  overflow: scroll;
}
.content_body_left::-webkit-scrollbar{
  display: none;
}
.content_body_left li {
  text-align: center;
  padding: .2rem 0;
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
.content_body_right::-webkit-scrollbar{
  display: none;
}
.head {
  background: #ededed;
  color: #666;
}
.head_top{
  height: .3rem;
  line-height: .3rem;
  padding-left: .2rem;
}
.head_spans {
  color: #666;
  font-size: .2rem;
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
  width: .5rem;
  height: .5rem;
  float: left;
  margin: .12rem;
  margin-top: .1rem;
}
.stop_right {
  /* float: left; */
  /* margin-top: 1rem; */
  overflow: hidden;
  font-size: 0.05rem;
}
.stop_right p:first-child {
  /* padding: .05rem 0; */
  width: .01rem;
  color: #999;
}
.stop_right p:nth-child(2){
    /* color: red; */
    /* font-size: .15rem; */
    margin: .1rem 0;
}
.stop_right p:nth-child(3){
    font-size: .15rem;
}
.p1{
    /* color: red; */
    /* border: 1px solid red; */
    font-size: .15rem;
}
/* .stop_right div span{
    /* display: flex; */
    /* justify-content: space-evenly; }*/
    .cons-sp{
        float: right;
        color: red;
        border: 1px solid red;
        border-radius: .2rem;
    }
    .cons-sp1{
        color: orangered;
        border: 1px solid orangered;
        border-radius: .2rem;
        width: 60%;
        text-align: center;
    }
    .cons-sp2{
        color: orangered;
        font-size: .15rem;
    }
    .cons-sp3>img{
        width: .25rem;
        height: .25rem;
        float: right;
    }
    .under{
      width: 100%;
      height: .5rem;
      background: black;
      position: fixed;
      top: 6.2rem;
      left: .01rem;
    }
    .under>div{
      width: .5rem;
      height: .5rem;
      background: black;
      border-radius: 50%;
      position: fixed;
      top: 6rem;
      left: .15rem;
    }
    .under>div img{
      position: fixed;
      width: .35rem;
      height: .35rem;
      top: 6.1rem;
      left: .2rem;
    }
    .under span{
      color: white;
    }
    .under p:nth-child(2){
      color: white;
      width: 70%;
      font-size: .2rem;
      margin-left: .7rem;
    }
    .under span:nth-child(3){
      /* color: red; */
      margin-left: .7rem;
      margin-top: .01rem;
    }
    .under span:nth-child(4){
      width: 30%;
      height: .5rem;
      font-size: .17rem;
      text-align: center;
      line-height: .5rem;
      position: fixed;
      top: 6.2rem;;
      right: 0;
      background: rgb(0, 170, 17);
    }
</style>
