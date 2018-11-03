<template>
    <div class="resetaddmax">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
          <p class="bianjiadd" @click="bianjiadd">{{bianji}}</p>
        </div>
        <div class="xinzengdizhi">
          <ul class="alladd" :class="{alladda:youdizhi}">
            <li v-for="(item, index) in adds" :key="index">
              <div>
                <p>{{item.address}}</p>
                <p>{{item.phone}}</p>
              </div>
              <img v-if="bianjiadd1" src="" alt="" @click="deladd">
              <img v-else src="../imgs/取消.png" alt="" @click="deladd">
            </li>
          </ul>
         <div class="adadddiv">
           <router-link to="/home/login/resetadd/detailadadd">
              <div>
                 <p>新增地址</p>
                <img src="../imgs/前进.png" alt="">
              </div>
            </router-link>
         </div>
        </div>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "resetadd",
  components: {
    Headd
  },
  data() {
    return {
      bianji: "编辑",
      adds: [],
      bianjiadd1: true,
      youdizhi: true,
      loading: true
    };
  },
  methods: {
    bianjiadd() {
      // console.log(this.$store.state.usermsg)
      if (!this.$store.state.bianjiadd) {
        this.$store.state.bianjiadd = true;
        this.bianjiadd1 = this.$store.state.bianjiadd;
        this.bianji = "编辑";
      } else {
        this.$store.state.bianjiadd = false;
        this.bianjiadd1 = this.$store.state.bianjiadd;
        this.bianji = "完成";
      }
    },
    deladd() {
      this.loading = true;
      let loadingInstance1 = Loading.service({ fullscreen: true });
      let url =
        "https://elm.cangdu.org/v1/users/" +
        this.$store.state.usermsg.user_id +
        "/addresses/" +
        this.adds[0].id;
      this.$http({
        method: "DELETE",
        url: url,
        withCredentials: true
      }).then(res => {
        loadingInstance1.close();
        this.loading = false;
        let url =
          "https://elm.cangdu.org/v1/users/" +
          this.$store.state.usermsg.user_id +
          "/addresses";
        this.$http({
          method: "get",
          url: url,
          withCredentials: true
        }).then(res => {
          if (res.data.length == 0) {
            this.adds = [];
            this.youdizhi = false;
          } else {
            this.adds = res.data;
            this.youdizhi = true;
          }
        });
      });
    },
    returnuup() {
      this.$router.push({ name: "login" });
    }
  },
  created() {
    this.youdizhi = false;
    this.$store.commit("changetn", "编辑地址");
    this.$store.commit("tianjiadizhi", false);
    this.loading = true;
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url =
      "https://elm.cangdu.org/v1/users/" +
      this.$store.state.usermsg.user_id +
      "/addresses";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
      // console.log(res)
      loadingInstance1.close();
      this.loading = false;
      // console.log(res);
      if (res.data.length == 0) {
        this.adds = [];
        this.youdizhi = false;
      } else {
        this.adds = res.data;
        this.youdizhi = true;
      }
    });
  }
};
</script>
<style scoped>
.hello {
  border-bottom: 10px solid #eaeaea;
}
.resetaddmax {
  width: 100%;
  position: relative;
}
.xinzengdizhi {
  width: 100%;
  /* border: 1px solid red; */
}
.alladd {
  width: 94%;
  padding: 2% 3% 2% 3%;
  border-top: 1px solid gray;
  background-color: #eaeaea;
  font-size: 0.16rem;
}
.alladda {
  background-color: palegreen;
}
.xinzengdizhi .alladda {
  padding: 4% 3% 4% 3%;
  background-color: palegoldenrod;
}
.alladd > li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.alladd > li > img {
  width: 8%;
}
.alladd > li p {
  padding-top: 1%;
  padding-bottom: 1%;
}
.adadddiv {
  width: 100%;
  /* border: 1px solid black; */
  font-size: 0.16rem;
  padding-top: 3%;
  padding-bottom: 3%;
}
.adadddiv div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid gray;
  padding-bottom: 3%;
}
.adadddiv div > p {
  margin-left: 3%;
}
.adadddiv div > img {
  width: 5%;
  margin-right: 3%;
}
.hello {
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid;
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
  text-align: end;
  width: 25%;
}
.hello > a {
  color: black;
}
</style>

