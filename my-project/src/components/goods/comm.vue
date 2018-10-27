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
               <strong class="head_strong">{{value.name}}</strong>
               <span class="head_span">{{value.description}}</span>
             </div>
           <!-- 右边店铺详情 -->
            <section class="stop" v-for="(stores,key) in value.foods" :key="key">
                 <div class="stop_left">
                   <img :src="'//elm.cangdu.org/img/'+stores.image_path" alt="">
                 </div>
                 <div class="stop_right">
                     <h4>{{stores.name}}</h4>
                     <p>{{stores.description}}</p>
                     <strong>{{stores.tips}}</strong>
                 </div> 
              </section>                 
            </section>
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
.head_strong {
  color: #666;
  font-size: .3rem;
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
  float: left;
  /* margin-top: 1rem; */
  font-size: 0.05rem;
}
.stop_right p {
  padding: .05rem 0;
  color: #999;
}
</style>
