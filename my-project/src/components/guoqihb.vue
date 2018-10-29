<template>
    <div>
        <Headd></Headd>
        <ul class="hongbaoul">
            <li class="hbli" v-for="(item) in datas2" :key="item.sn">
                <div class="hblileft">
                    <p>¥</p>
                    <span>{{item.amount}}</span>
                    <p>.0</p>
                    <p class="manjian">{{item.description_map.sum_condition}}</p>
                </div>
                <div class="hblicon">
                    <p class="hblibig">{{item.name}}</p>
                    <p>{{item.description_map.validity_periods}}</p>
                    <p>{{item.description_map.phone}}</p>
                </div>
                <img src="../imgs/过期.png" alt="">
            </li>
        </ul>
        <div></div>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "guoqihb",
  data() {
    return {
      loading: true,
      datas2: []
    };
  },
  created() {
    this.$store.commit("changetn", "历史红包");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    let url1 =
      "https://elm.cangdu.org/promotion/v2/users/" +
      this.$store.state.usermsg.user_id +
      "/expired_hongbaos?limit=20&offset=3";
    this.$http({
      methods: "get",
      url: url1,
      withCredentials: true
    }).then(res => {
      if (res.data.length == 0) {
        this.guoqihongbao = false;
      } else {
        loadingInstance1.close();
        this.loading = false;
        this.datas2 = res.data;
      }
    });
  },
  components: {
    Headd
  }
};
</script>
<style scoped>
.hongbaoul {
  width: 100%;
  margin-top: 5%;
}
.guoqihongbao > p {
  font-size: 0.2rem;
  padding-bottom: 3%;
}
.hbli {
  width: 94%;
  padding: 3%;
  border-top: 5px dashed orangered;
  display: flex;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 10px;
  padding-top: 3%;
  padding-bottom: 3%;
  margin-bottom: 3%;
}
.hblileft {
  width: 30%;
  font-size: 0.16rem;
  border-right: 1px dashed gray;
  margin-top: 3%;
  margin-bottom: 3%;
  margin-right: 3%;
}
.hblileft > p {
  display: inline-block;
}
.hblileft > span {
  font-size: 0.3rem;
}
.manjian {
  margin-top: 1%;
  width: 100%;
  color: gray;
  font-size: 0.15;
}
.hblicon {
  width: 50%;
  margin-top: 3%;
  margin-bottom: 3%;
}
.hblicon > p {
  font-size: 0.06rem;
  margin-top: 1%;
}
.hblicon > .hblibig {
  font-size: 0.12rem;
}
.hblicon + p {
  font-size: 0.12rem;
  margin-top: 3%;
  /* color: gray; */
}
.hbtips {
  width: 85%;
  margin-left: 3%;
  font-size: 0.08rem;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 2%;
  padding: 2%;
}
.hbtips > p {
  margin-top: 1%;
}
.hongbaoul + p {
  width: 80%;
  margin: 10%;
  text-align: center;
  font-size: 0.1rem;
}
.hongbaoul + p > span {
  margin: 1%;
}
.hbli > img {
  width: 20%;
  height: 20%;
}
.hblibig {
  font-size: 0.16rem;
}
.hbli > p {
  font-size: 0.12rem;
  margin: 1%;
}
</style>

