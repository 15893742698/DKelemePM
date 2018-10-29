<template>
    <div class="youhui">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <!-- 两个路由 -->
        <div class="hbhuodjq">
            <p @click="firstp" id="firstp" class="red">红包</p>
            <p @click="secondp" id="secondp">商家代金券</p>
        </div>
        <Hongbao v-show="istrue"></Hongbao>
        <Daijinquan v-show="!istrue"></Daijinquan>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
import Hongbao from "../components/content/hongbao";
import Daijinquan from "../components/content/daijinquan";
export default {
  name: "youhui",
  data() {
    return {
      istrue: true,
      loading: true
    };
  },
  methods: {
    firstp() {
      this.istrue = true;
      document.getElementById("firstp").className = "red";
      document.getElementById("secondp").className = "";
      this.$store.commit("explaindetail", 2);
    },
    secondp() {
      this.istrue = false;
      document.getElementById("firstp").className = "";
      document.getElementById("secondp").className = "red";
      this.$store.commit("explaindetail", 3);
    },
    returnuup(){
      this.$router.push({name:"home"})
    }
  },
  components: {
    Headd,
    Hongbao,
    Daijinquan
  },
  created() {
    this.$store.commit("changetn", "我的优惠");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    if (this.istrue == true) {
      this.$store.commit("explaindetail", 2);
    } else {
      this.$store.commit("explaindetail", 3);
    }
    loadingInstance1.close();
    this.loading = false;
  }
};
</script>
<style>
.hello {
  width: 95%;
  background-color: #436eee;
  height: 50px;
  border-bottom: 1px solid #436eee;
  line-height: 50px;
  text-align: center;
  padding-left: 5%;
  overflow: hidden;
}
.hello img {
  float: left;
  width: 10%;
  vertical-align: top;
  margin-top: 1%;
  /* border: 1px solid red; */
}
.hello p {
  font-size: 0.2rem;
  color: white;
  font-weight: bold;
  margin-right: 15%;
}
.hello > a {
  color: black;
}
.hbhuodjq {
  width: 96%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.16rem;
  margin: 2%;
}
.hbhuodjq > p {
  padding-top: 3%;
  padding-bottom: 3%;
}
.red {
  border-bottom: 2px solid blue;
}
</style>

