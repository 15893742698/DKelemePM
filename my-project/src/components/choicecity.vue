<template>
    <div class="choicecity">
        <div class="cityhead">
            <p @click="returnuup">ele.me</p>
            <img src="../imgs/我的.png" alt="" @click="tohome">
        </div>
        <div class="citytips">
            <p>当前定位城市:</p>
            <p class="buzhuntip">定位不准时,请在城市列表中选择</p>
        </div>
        <router-link :to="{name:'city',params:{data}}">
            <p>{{dataname}}</p>
            <img src="../imgs/前进.png" alt="">
        </router-link>
        <p></p>
        <ul class="cityul">
            <li class="hotcity">热门城市</li>
            <li v-for="item in datas" :key="item.id" class="allhotcitys">
                <router-link :to="{name:'city',params:{item}}">
                    {{item.name}}
                </router-link>
            </li>
        </ul>
        <ul class="allcityul">
            <li v-for="(value,kk,index) in sortgroupCity" :key="index" class="allcityli">
                <p>{{kk}}</p>
                <span v-if="index==0">(字母排序)</span>
                <ul class="xiaocityul">
                    <li v-for="item in value" :key="item.id" class="xiaocityli" @click="cccc(item)">
                        {{item.name}}
                    </li>
                </ul>
            </li>
            
        </ul>
    </div>
</template>
<script>
import { Loading } from "element-ui";
export default {
  name: "choicecity",
  data() {
    return {
      datas: [],
      data: [],
      loading: true,
      datagroup: [],
      dataname: ""
    };
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "choicecity" });
    },
    tohome() {
      this.$router.push({ name: "home" });
    },
    cccc(item) {
      this.$router.push({ name: "city", params: { item } });
    }
  },
  created() {
    let loadingInstance1 = Loading.service({
      fullscreen: true
    });
    let url = "https://elm.cangdu.org/v1/cities?type=hot";
    this.$http({
      method: "get",
      url: url,
      withCredentials: true
    }).then(res => {
      this.datas = res.data;
    });
    let url1 = "https://elm.cangdu.org/v1/cities?type=guess";
    this.$http({
      method: "get",
      url: url1,
      withCredentials: true
    }).then(res => {
      this.data = res.data;
      this.dataname = res.data.name;
      // console.log(this.data)
    });
    let url2 = "https://elm.cangdu.org/v1/cities?type=group";
    this.$http({
      method: "get",
      url: url2,
      withCredentials: true
    }).then(res => {
      this.datagroup = res.data;
    });
    loadingInstance1.close();
    this.loading = false;
  },
  computed: {
    sortgroupCity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.datagroup[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.datagroup[
            String.fromCharCode(i)
          ];
        }
      }
      return sortobj;
    }
  }
};
</script>
<style>
.choicecity {
  width: 100%;
  background-color: #eaeaea;
}
.cityhead {
  width: 94%;
  padding: 3%;
  color: white;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(59, 59, 219);
  margin-bottom: 2%;
}
.cityhead > img {
  width: 8%;
}
.citytips {
  width: 94%;
  padding: 3%;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
.citytips > p {
  color: black;
  font-size: 0.16rem;
}
.citytips > .buzhuntip {
  color: gray;
  font-weight: bold;
}
.choicecity > a {
  width: 94%;
  padding: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: blue;
}
.choicecity > a > p {
  font-size: 0.2rem;
}
.choicecity > a > img {
  width: 5%;
}
.choicecity > p {
  width: 97%;
  padding: 1.5%;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  background-color: #eaeaea;
}
.choicecity > span {
  width: 96%;
  padding: 1%;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
}
.cityul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.hotcity {
  width: 94%;
  padding: 3%;
  font-size: 0.16rem;
  background-color: #fff;
  border-bottom: 1px solid gray;
}
.allhotcitys {
  width: 25%;
  height: 0.3rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.16rem;
  color: blue;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
  box-sizing: border-box;
}
.allcityul {
  width: 100%;
  background-color: #fff;
}
.allcityli {
  width: 100%;
  /* padding: 3%; */
  font-size: 0.16rem;
}
.allcityli>p{
    margin-bottom: 4%;
    margin: 3%;
}
.allcityli>p:nth-child(1){
    display: inline-block;
}
.allcityli > span {
  font-size: 0.2rem;
}
.xiaocityul {
  width: 100%;
  overflow: hidden;
  background-color: #fff;
}
.xiaocityli {
  width: 25%;
  border-right: 1px solid gray;
  border-top: 1px solid gray;
  height: 0.3rem;
  background-color: #fff;
  text-align: center;
  line-height: 0.3rem;
  font-size: 0.16rem;
  color: blue;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  margin: 0;
  box-sizing: border-box;
}
</style>
