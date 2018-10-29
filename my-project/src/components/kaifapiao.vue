<template>
    <div class="fapiao">
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <img src="../imgs/记录.png" alt="">
        <p>没有购买记录</p>
    </div>
</template>
<script>
export default {
  name: "fapiao",
  created() {
    this.$store.commit("changetn", "购买记录");
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "vip" });
    }
  }
};
</script>
<style>
.fapiao {
  width: 100%;
}
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
.fapiao>img{
    width: 80%;
    padding: 10%;
}
.fapiao>p{
    font-size: 0.16rem;
    text-align: center;
}
</style>

