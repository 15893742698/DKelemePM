<template>
    <div class="searchaddmax">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="inputdiv">
            <input type="text" placeholder="请输入小区/写字楼/学校等" v-model="detailsearchadd">
            <button @click="search">确认</button>
        </div>
        <p>为了满足商家的送餐要求,建议您从列表中选择地址</p>
        <ul class="alladdul">
            <li v-for="(item, index) in adddata" :key="index" class="alladdli" @click="getaddmsg(item)">
                <p>{{item.name}}</p>
                <p class="changde">{{item.address}}</p>
            </li>
        </ul>
        <el-collapse-transition>
        <div class="chengzi" v-show="chengzi">
            <img src="../imgs/感叹.png" alt="">
            <div>
              <span>{{failmsg}}</span>
            </div>
            <p @click="godenglu">确认</p>
        </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "searchadd",
  data() {
    return {
      detailsearchadd: "",
      adddata: [],
      loading: true,
      failmsg: "",
      chengzi: false
    };
  },
  created() {
    this.$store.commit("changetn", "搜索地址");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  },
  components: {
    Headd
  },
  methods: {
    search() {
      if (!this.detailsearchadd) {
        this.chengzi = true;
        this.failmsg = "地址不能为空";
      } else {
        this.chengzi = false;
        this.loading = true;
        let loadingInstance1 = Loading.service({ fullscreen: true });
        let url =
          "https://elm.cangdu.org/v1/pois?city_id=" +
          this.$store.state.cityid +
          "&keyword=" +
          this.detailsearchadd +
          "&type=search";
        this.$http({
          method: "get",
          url: url,
          withCredentials: true
        }).then(res => {
          loadingInstance1.close();
          this.loading = false;
          // console.log(res)
          this.adddata = res.data;
          // console.log(this.adddata);
        });
      }
    },
    getaddmsg(item) {
      // console.log(item);
      this.$store.commit("changeaddmsg", item);
      this.$store.commit("changeadd", this.detailsearchadd);
      this.detailsearchadd = item.name;
      this.$router.push({ name: "detailadadd" });
    },
    returnuup() {
      this.$router.push({ name: "detailadadd" });
    },
    godenglu() {
      this.chengzi = false;
    }
  }
};
</script>
<style>
.searchaddmax {
  width: 100%;
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
  width: 58%;
  text-align: start;
}
.hello > a {
  color: black;
}
.inputdiv {
  width: 96%;
  padding: 2%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.inputdiv > input {
  width: 70%;
  font-size: 0.16rem;
  padding: 3% 2% 3% 2%;
  border-radius: 10px;
  background-color: #eaeaea;
}
.inputdiv > button {
  width: 20%;
  border-radius: 10px;
  font-size: 0.2rem;
  background-color: blue;
  color: white;
  height: 0.4rem;
}
.searchaddmax > p {
  width: 96%;
  padding: 2%;
  font-size: 0.16rem;
  background-color: rgb(238, 233, 211);
  color: orangered;
}
.alladdul {
  width: 100%;
  background-color: #eaeaea;
}
.alladdli {
  width: 96%;
  padding: 2%;
  border-bottom: 1px solid gray;
}
.alladdli > p {
  width: 96%;
  font-size: 0.16rem;
  padding: 2%;
}
.changde {
  line-height: 20px;
}
.chengzi {
  width: 50%;
  padding: 25%;
  /* border: 1px solid black; */
  text-align: center;
}
.chengzi > img {
  width: 80%;
}
.chengzi > p {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgb(231, 96, 42);
  color: white;
  border-radius: 10px;
  line-height: 0.5rem;
  padding: 2%;
}
.chengzi > div {
  margin: 3%;
}
.chengzi > div > span {
  color: black;
  padding-bottom: 3%;
  font-size: 0.2rem;
}
</style>
