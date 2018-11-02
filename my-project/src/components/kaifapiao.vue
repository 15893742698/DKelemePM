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
  width: 98%;
  padding: 1%;
  background-color: #436eee;
  border-bottom: 1px solid #436eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  width: 58%;
  text-align: start;
}
.hello > a {
  color: black;
}
.fapiao > img {
  width: 80%;
  padding: 10%;
}
.fapiao > p {
  font-size: 0.16rem;
  text-align: center;
}
</style>

