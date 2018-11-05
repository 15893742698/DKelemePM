<template>
    <div class="sousuodizhi">
        <div class="citytou">
            <img src="../imgs/后退.png" alt="" @click="returnuup">
            <p></p>
            <p class="cityname">{{cityname}}</p>
            <p @click="returnuup">切换城市</p>
        </div>
        <div class="sousuodiv">
            <input v-model="add" type="text" placeholder="输入学校、商务楼、地址"/>
            <button @click="tijiaola">提交</button>
        </div>
        <ul class="dizhiul">
            <li class="dizhili" v-for="(item, index) in data" :key="index" @click="baocunadd(item)">
                <p>{{item.name}}</p>
                <p class="cityaddress">{{item.address}}</p>
            </li>
        </ul>
        <p>搜索历史</p>
        <ul class="lishijilu" v-if="show">
          <li v-for="(item, index) in bubu" :key="index" @click="xuanzezhege(item)">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
          </li>
          <button @click="qingkongsousuo">清空所有</button>
        </ul>
        <el-collapse-transition>
        <div class="hele" v-show="hele">
            <img src="../imgs/感叹.png" alt="">
            <div>
              <span>请输入搜索地址</span>
            </div>
            <p @click="godenglu">确认</p>
        </div>
        </el-collapse-transition>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "city",
  data() {
    return {
      cityname: "",
      add: "",
      cityid: "",
      data: [],
      hele: false,
      show: false,
      bubu: []
    };
  },
  created() {
    if (this.$route.params.data) {
      this.cityname = this.$route.params.data.name;
      this.$store.commit("changecityid", this.$route.params.data.id);
      this.cityid = this.$route.params.data.id;
    } else if (this.$route.params.item) {
      this.cityname = this.$route.params.item.name;
      this.$store.commit("changecityid", this.$route.params.item.id);
      this.cityid = this.$route.params.item.id;
    } else {
      this.$router.push({ name: "choicecity" });
    }
    if (this.$store.state.sousuojilu.length == 0) {
      this.show = false;
    } else {
      this.show = true;
      this.bubu = this.$store.state.sousuojilu;
    }
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "choicecity" });
    },
    tijiaola() {
      if (!this.add) {
        this.hele = true;
      } else {
        let url =
          "https://elm.cangdu.org/v1/pois?city_id=" +
          this.cityid +
          "&keyword=" +
          this.add +
          "&type=search";
        this.$http({
          method: "get",
          url: url,
          withCredentials: true
        }).then(res => {
          this.data = res.data;
        });
      }
    },
    godenglu() {
      this.hele = false;
    },
    baocunadd(item) {
      this.$store.commit("changecityadd", item);
      this.$store.commit("changesousuojilu", item);
      this.add = item.name;
      this.$router.push({ name: "waimai" });
    },
    qingkongsousuo() {
      this.bubu = [];
      this.$store.commit("qingkongsousuo",[]);
    },
    xuanzezhege(item) {
      this.$store.commit("changecityadd", item);
      this.$router.push({ name: "waimai" });
    }
  }
};
</script>
<style>
.sousuodizhi {
  width: 100%;
}
.citytou {
  width: 96%;
  padding: 2%;
  background-color: rgb(59, 59, 219);
  display: flex;
  justify-content: space-between;
  font-size: 0.2rem;
  align-items: center;
  color: white;
}
.cityname {
  margin-right: 8%;
}
.citytou > img {
  width: 10%;
}
.sousuodiv {
  width: 94%;
  padding: 3%;
  margin-top: 2%;
  margin-bottom: 2%;
  border-bottom: 1px solid gray;
  border-top: 1p solid gray;
  text-align: center;
}
.sousuodiv > input {
  width: 90%;
  font-size: 0.2rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.sousuodiv > button {
  width: 90%;
  font-size: 0.2rem;
  color: white;
  height: 0.5rem;
  line-height: 0.5rem;
  margin-top: 3%;
  border-radius: 10px;
  background-color: rgb(59, 59, 219);
}
.dizhiul {
  width: 100%;
}
.dizhili {
  width: 94%;
  padding: 3%;
  border-bottom: 1px solid gray;
}
.dizhili > p {
  padding: 1%;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
.dizhili > .cityaddress {
  font-size: 0.14rem;
}
.hele {
  width: 100%;
  position: fixed;
  top: 30%;
  /* border: 1px solid black; */
  text-align: center;
  background-color: rgb(238, 204, 159);
}
.hele > img {
  width: 20%;
  padding: 10%;
}
.hele > p {
  font-size: 0.2rem;
  height: 0.5rem;
  background-color: rgb(231, 96, 42);
  color: white;
  border-radius: 10px;
  line-height: 0.5rem;
  padding: 2%;
}
.hele > div {
  margin: 3%;
}
.hele > div > span {
  color: black;
  padding-bottom: 3%;
  font-size: 0.2rem;
}
.dizhiul + p {
  width: 94%;
  padding: 3%;
  font-size: 0.2rem;
}
.lishijulu {
  width: 100%;
}
.lishijilu > li {
  width: 94%;
  padding: 3%;
}
.lishijilu > li > p {
  width: 98%;
  padding: 1%;
  font-size: 0.16rem;
}
.lishijilu > button {
  width: 94%;
  margin: 3%;
  height: 0.5rem;
  line-height: 0.4rem;
  background-color: rgb(153, 241, 153);
  color: white;
  font-size: 0.2rem;
  border-radius: 10px;
}
</style>

