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
        <div class="hele" v-show="hele">
            <img src="../imgs/感叹.png" alt="">
            <div>
              <span>请输入搜索地址</span>
            </div>
            <p @click="godenglu">确认</p>
        </div>
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
      hele: false
    };
  },
  created() {
    if (this.$route.params.data) {
      this.cityname = this.$route.params.data.name;
      this.$store.commit("changecityid", this.$route.params.data.id);
      this.cityid = this.$store.state.cityid;
    } else if (this.$route.params.item) {
      this.cityname = this.$route.params.item.name;
      this.$store.commit("changecityid", this.$route.params.item.id);
      this.cityid = this.$store.state.cityid;
    } else {
      this.$router.push({ name: "choicecity" });
    }
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "choicecity" });
    },
    tijiaola() {
      // console.log("ccc");
      if (!this.add) {
        // console.log("aaa");
        this.hele = true;
      } else {
        // console.log("aaa");
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
          //   console.log(res);
          // console.log(res.data);
          this.data = res.data;
        });
      }
    },
    godenglu() {
      this.hele = false;
    },
    baocunadd(item) {
      this.$store.commit("changecityadd", item);
      this.add = item.name;
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
}
.sousuodiv > button {
  width: 90%;
  font-size: 0.2rem;
  color: white;
  height: 40px;
  line-height: 40px;
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
  line-height: 30px;
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
  height: 50px;
  background-color: rgb(231, 96, 42);
  color: white;
  border-radius: 10px;
  line-height: 50px;
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
</style>

