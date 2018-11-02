<template>
    <div class="searchfooddiv">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="sousuofood">
          <input type="text" v-model="food" placeholder="请输入商家或美食名称" @focus="cccaaa">
          <button @click="beginsousuo">提交</button>
        </div>
        <p v-if="failmsgss">{{failmsg}}</p>
        <ul>
          <li v-for="(item, index) in data" :key="index">
            <p>{{item}}</p>
          </li>
        </ul>
        <Botfix></Botfix>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Botfix from "./bot";
export default {
  name: "searchfood",
  methods: {
    returnuup() {
      this.$router.go(-1);
    },
    beginsousuo() {
      if (!this.food) {
        this.failmsgss = true;
        this.failmsg = "请输入搜索关键字";
      } else {
        this.loading = true;
        // console.log(this.$store.state.choicecityadd);
        let loadingInstance1 = Loading.service({ fullscreen: true });
        let url =
          "https://elm.cangdu.org/v4/restaurants?geohash=" +
          this.$store.state.choicecityadd.geohash +
          "&keyword=" +
          this.food;
        this.$http({
          method: "get",
          url: url,
          withCredentials: true
        }).then(res => {
          this.failmsgss = true;
          this.failmsg = "很抱歉!无搜索结果";
          loadingInstance1.close();
          this.loading = false;
        });
      }
    },
    cccaaa() {
      this.failmsgss = false;
    }
  },
  data() {
    return {
      loading: true,
      food: "",
      failmsg: "",
      data: [],
      failmsgss: false
    };
  },
  components: {
    Botfix
  },
  created() {
    this.$store.commit("changetn", "搜索");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    var botchoice = {
      waimai: false,
      sousuo: true,
      dingdan: false,
      mine: false
    };
    this.$store.commit("changebotchoice", botchoice);
    loadingInstance1.close();
    this.loading = false;
  }
};
</script>
<style>
.searchfooddiv {
  width: 100%;
}
.home > a {
  width: 95%;
}
.hello {
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.hello img {
  width: 10%;
  vertical-align: top;
  margin-top: 0%;
}
.hello p {
  color: white;
  font-weight: bold;
  font-size: 0.2rem;
  width: 55%;
  text-align: start;
}
.hello > a {
  color: black;
}
.sousuofood {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.sousuofood > input {
  width: 60%;
  padding: 2%;
  font-size: 0.2rem;
  border: 1px solid gray;
  border-radius: 5px;
}
.sousuofood > button {
  width: 30%;
  background-color: rgb(87, 87, 228);
  height: 0.3rem;
  line-height: 0.3rem;
  color: white;
  border-radius: 10px;
  font-size: 0.2rem;
}
.searchfooddiv > p {
  width: 90%;
  padding: 5%;
  color: black;
  font-weight: bold;
  font-size: 0.2rem;
  text-align: center;
}
</style>

