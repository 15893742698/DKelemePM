<template>
    <div>
        <div class="hello">
          <img src="../imgs/后退.png" alt="" @click="returnuup">
          <p>{{$store.state.titlename}}</p>
        </div>
        <p>{{data}}</p>
    </div>
</template>
<script>
export default {
  name: "serveexplain",
  data() {
    return {
        data:""
    };
  },
  created() {
    this.$store.commit("changetn",this.$route.params.name);
    this.data = this.$route.params.quest;
  },
  methods: {
    returnuup() {
      this.$router.push({ name: "serve" });
    }
  }
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
.hello+p{
  width: 94%;
  padding: 3%;
  font-size: 0.16rem;
  color: black;
  line-height: 30px;
}
</style>

