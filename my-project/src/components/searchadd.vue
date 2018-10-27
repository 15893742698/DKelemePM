<template>
    <div class="searchaddmax">
        <Headd></Headd>
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
    </div>
</template>
<script>
import Headd from "../components/element/head";
export default {
  name: "searchadd",
  data() {
    return {
      detailsearchadd: "",
      adddata: []
    };
  },
  created() {
    this.$store.commit("changetn", "搜索地址");
  },
  components: {
    Headd
  },
  methods: {
    search() {
      // console.log(this.detailsearchadd);
      let url ="https://elm.cangdu.org/v1/pois?city_id="+this.$store.state.cityid+"&keyword="+this.detailsearchadd+"&type=search";
      this.$http({
        method: "get",
        url: url,
        withCredentials: true
      }).then(res => {
          // console.log(res)
        this.adddata = res.data;
        // console.log(this.adddata);
      });
    },
    getaddmsg(item) {
      console.log(item);
      this.$store.commit("changeaddmsg",item)
      this.$store.commit("changeadd", this.detailsearchadd);
      this.detailsearchadd = item.name;
      this.$router.push({ name: "detailadadd" });
    }
  }
};
</script>
<style>
.searchaddmax {
  width: 100%;
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
  height: 40px;
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
.changde{
    line-height: 20px;
}
</style>
