<template>
    <div>
        <div class="con-imgs">
            
                <img :src="'https://elm.cangdu.org/img/'+data.image_path">
            </div>
        <div class="conter">
            <span @click="tiao" class="left-sp"> &lt; </span>
            <router-link class="right-sp" :to="{name:'detailss',params:{data}}"> &gt; </router-link>
            <img :src="'https://elm.cangdu.org/img/'+data.image_path" alt="">
            
            <div class="box">
                <p>{{data.name}}</p>
                <p>商家起送/
                分钟送达/
                <!-- {{data.piecewise_agent_fee.tips}}--></p> 
                <p>公告:{{data.promotion_info}}</p>
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
import comm from "./goods/comm";
import eva from "./goods/eva";

// import details from './details'
export default {
  data() {
    return {
      data: [],
      cc: "comm"
    };
  },
  components: {
    comm,
    eva
    //   details
  },
  methods: {
    ay(n) {
      this.cc = n;
    },
    tiao() {
      this.$router.push('/waimai');
    }
  },
  created() {
    var id = this.$route.params.id;
    this.$store.commit("gaimingzi",this.$route.params.data.name);
    let api = "https://elm.cangdu.org/shopping/restaurant/" + id;
    this.$http.get(api).then(data => {
      this.data = data.data;
      // console.log(this.data);
      // console.log(
      //   this.$route.params.data.latitude,
      //   this.$route.params.data.longitude
      // );
    });
  }
};
</script>
<style scoped>
/* body{ */
/* background-color: rgb(248,248, 249); */
/* background-color: red; */
/* } */
.left-sp {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  left: 0;
  top: -0.1rem;
  z-index: 1;
}
.right-sp {
  color: white;
  font-size: 0.35rem;
  position: absolute;
  right: 0;
  top: 0.3rem;
}
.conter {
  /* width: 1rem; */
  height: 1rem;
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
.con-imgs {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -5;
  right: 0;
  filter: blur(10px);
  height: 1.2rem;
  overflow: hidden;
}
.con-imgs img {
  width: 100%;
  height: 0.9rem;
  /* filter: blur(10px); */
  /* -webkit-filter: blur(10px);
    -moz-filter:blur(10px);
    -ms-filter: blur(10px);
    -o-filter:blur(10px); */
}
.conter img {
  width: 0.7rem;
  height: 0.7rem;
  /* border: 1px solid red; */
}
.box {
  /* border: 1px solid red; */
  width: 2.8rem;
}
.box p:first-child {
  font-size: 0.2rem;
}
.box p {
  font-size: 0.1rem;
  color: white;
  height: 0.25rem;
  font-weight:bold;
  line-height: 0.25rem;
}
.two {
  overflow: hidden;
  border-top: 2px solid white;
  z-index: 20;
}
.comm {
  font-size: 0.2rem;
  color: black;
  float: left;
  /* border: 1px solid yellow; */
  margin-left: 0.7rem;
  margin-top: 0.2rem;
}
.eva {
  font-size: 0.2rem;
  color: black;
  float: right;
  /* border: 1px solid pink; */
  margin-right: 0.7rem;
  margin-top: 0.2rem;
}
</style>

