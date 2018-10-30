<template>
    <div>
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <div class="kefu">
            <div class="rengongkefu">
                <img src="../imgs/人工客服.png" alt="">
                <p>在线客服</p>
            </div>
            <div class="dianhuakefu">
                <img src="../imgs/电话客服.png" alt="">
                <p>在线客服</p>
            </div>
        </div>
        <ul class="serveul">
            <li class="hotq">
                热门问题
            </li>
            <li class="serveli" v-for="(item, index) in datas1" :key="index">
                <router-link :to="{name:'serveexplain',params:{name:datas1[index],quest:datas3[index]}}">
                <span>
                    {{item}}
                </span>
                <img src="../imgs/前进.png" alt=""></router-link>
            </li>
        </ul>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "fapiao",
  data() {
    return {
      loading: true,
      datas1: [],
      datas2: [],
      datas3: [],
    };
  },
  created() {
    this.$store.commit("changetn", "服务中心");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url = "https://elm.cangdu.org/v3/profile/explain";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
      this.data = res.data;
      for (const key in res.data) {
        this.datas2.push(res.data[key]);
      }
      this.datas2.splice(24, 1);
      for (const index in this.datas2) {
        if (index % 2 == 1) {
          console.log(index)
          this.datas1.push(this.datas2[index]);
        } else {
          this.datas3.push(this.datas2[index])
        }
      }
      loadingInstance1.close();
      this.loading = false;
    });
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "home" });
    }
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
.kefu {
  width: 100%;
  display: flex;
  border-bottom: 1px solid gray;
}
.dianhuakefu,
.rengongkefu {
  width: 49%;
  text-align: center;
  display: inline-block;
}
.rengongkefu {
  border-right: 1px solid gray;
}
.dianhuakefu > img {
  width: 30%;
  margin: 5%;
}
.rengongkefu > img {
  width: 40%;
  margin: 5%;
}
.rengongkefu > p,
.dianhuakefu > p {
  width: 90%;
  font-size: 0.16rem;
  margin: 5%;
}
.serveul {
  width: 100%;
}
.hotq {
  width: 94%;
  margin: 3%;
  font-size: 0.2rem;
  font-weight: bold;
  padding-top: 2%;
  padding-bottom: 2%;
}
.serveli {
  width: 100%;
  /* padding: 3%; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.serveli > a {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  color: black;
  font-size: 0.16rem;
}
.serveli > a > img {
  width: 5%;
  vertical-align: bottom;
}
</style>