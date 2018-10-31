<template>
<!--最大div-->
    <div class="hongbaomax">
        <!-- 说明div -->
        <div class="explaindiv">
            <span>有</span>
            <span class="hongbaoshu">{{this.$store.state.usermsg.gift_amount}}</span>
            <span>个红包即将到期</span>
                <div>
                    <router-link to="/detailexplain">
                        <img src="../../imgs/问号.png" alt="">
                        <span>红包说明</span>
                    </router-link>
                </div>
        </div>
        <!-- 三个框框 -->
        <ul class="hongbaoul">
            <!-- 第一个框框 -->
            <li class="hbli" v-for="(item, index) in datas" :key="index">
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
                <p>{{item.description_map.validity_delta}}</p>
            </li>
            <li class="hbtips">
                <p>限品类:快餐便当、特色菜系、小吃夜宵、甜品饮品、</p>
                <p>异国料理</p>
            </li>
        </ul>
        <p @click="seeoldhb"><span>>查看历史红包</span></p>
        <div id="hbcaozuo">
          <router-link to="/discount/duihuanhongbao" class="duihuanhb">
              <button>兑换红包</button>
          </router-link>
         <router-link to="/discount/tuijianhb" class="tuijianhb">
             <button>推荐有奖</button>
         </router-link>
        </div>
    </div>    
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "hongbao",
  data() {
    return {
      datas: [],
      guoqihongbao: Boolean,
      loading: true
    };
  },
  created() {
    if (!this.$store.state.denglu) {
      this.$router.push({ name: "unloginyouhuiyemian" });
    } else {
      let loadingInstance1 = Loading.service({ fullscreen: true });
      let url =
        "https://elm.cangdu.org/promotion/v2/users/" +
        this.$store.state.usermsg.user_id +
        "/hongbaos?limit=20&offset=0";
      this.$http({
        methods: "get",
        url: url,
        withCredentials: true
      }).then(res => {
        loadingInstance1.close();
        this.loading = false;
        // console.log(res);
        this.datas = res.data;
      });
    }
  },
  methods: {
    seeoldhb() {
      this.$router.push({ name: "guoqihongbao" });
    }
  }
};
</script>
<style scoped>
.hongbaomax {
  width: 96%;
  /* border: 1px solid red; */
  padding: 2%;
  background-color: #eaeaea;
  /* background-color: gray; */
}
.explaindiv {
  width: 94%;
  margin: 3%;
  font-size: 0.16rem;
}
.explaindiv > div {
  float: right;
  width: 50%;
  /* border: 1px solid black; */
  text-align: end;
  margin-right: 6%;
}
.explaindiv > div > a {
  color: blue;
}
.hongbaoshu {
  color: red;
}
.explaindiv img {
  width: 10%;
  vertical-align: top;
}
.hongbaoul {
  width: 100%;
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
  color: red;
  border-right: 1px dashed gray;
  margin-top: 3%;
  margin-bottom: 3%;
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
  color: red;
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
#hbcaozuo {
  width: 100%;
  background-color: rgb(223, 221, 126);
}
.duihuanhb > button,
.tuijianhb > button {
  width: 49%;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 0.16rem;
  background-color: rgb(223, 221, 126);
  border: none;
  border-radius: 10px;
}
</style>

