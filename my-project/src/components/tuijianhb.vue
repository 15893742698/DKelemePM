<template>
    <div>
        <Headd></Headd>
    </div>
</template>
<script>
import { Loading } from "element-ui";
import Headd from "../components/element/head";
export default {
  name: "tuijianhb",
  data() {
    return {
      fun: "",
      loading: true
    };
  },
  created() {
    this.$store.commit("changetn", "推荐有奖");
    let loadingInstance1 = Loading.service({ fullscreen: true });
    loadingInstance1.close();
    this.loading = false;
  },
  components: {
    Headd
  },
  methods: {}
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
  /* border: 1px solid red; */
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
</style>

